"use client";

import { useEffect, useRef } from "react";

// Two bands of drifting 0/1 characters behind the page.
// A: left edge midpoint -> top edge at 1/3.  B: bottom edge at 2/3 -> right edge midpoint.
const BANDS = [
  { p: (w, h) => [[0, h * 0.5], [w * 0.02, h * 0.12], [w * 0.14, h * 0.05], [w / 3, 0]], dir: 1 },
  { p: (w, h) => [[(w * 2) / 3, h], [w * 0.8, h * 0.95], [w * 0.98, h * 0.88], [w, h * 0.5]], dir: 1 },
];

const GRIP_CONSTANT = 7;
const FLING_CONSTANT = 0.75;
const SPRING_CONSTANT = 5;
const FRICTION_CONSTANT = 3;

function bezier(pts, t) {
  const u = 1 - t;
  const a = u * u * u, b = 3 * u * u * t, c = 3 * u * t * t, d = t * t * t;
  const x = a * pts[0][0] + b * pts[1][0] + c * pts[2][0] + d * pts[3][0];
  const y = a * pts[0][1] + b * pts[1][1] + c * pts[2][1] + d * pts[3][1];
  const dx = 3 * u * u * (pts[1][0] - pts[0][0]) + 6 * u * t * (pts[2][0] - pts[1][0]) + 3 * t * t * (pts[3][0] - pts[2][0]);
  const dy = 3 * u * u * (pts[1][1] - pts[0][1]) + 6 * u * t * (pts[2][1] - pts[1][1]) + 3 * t * t * (pts[3][1] - pts[2][1]);
  const len = Math.hypot(dx, dy) || 1;
  return [x, y, -dy / len, dx / len]; // point + unit normal
}

// Gaussian-ish value in about [-1, 1], so bits cluster toward the middle of the band
const spread = () => (Math.random() + Math.random() + Math.random() - 1.5) / 1.5;

export default function BitFlow() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const phone = window.matchMedia("(max-width: 600px)");
    let w = 0, h = 0, raf = 0, last = 0, bits = [];
    const mouse = { x: 0, y: 0, mx: 0, my: 0, vx: 0, vy: 0, active: false };
    const pointerR = 80;

    const onMove = (e) => {
      // accumulate travel since the last frame; draw() turns it into a velocity
      if (mouse.active) {
        mouse.mx += e.clientX - mouse.x;
        mouse.my += e.clientY - mouse.y;
      }
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onLeave = () => { mouse.active = false; };

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const perBand = Math.round(Math.min(260, Math.max(90, (w * h) / 5500)));
      bits = [];
      BANDS.forEach((_, band) => {
        for (let i = 0; i < perBand; i++) {
          bits.push({
            band,
            t: Math.random(),
            speed: 0.018 + Math.random() * 0.03,
            off: spread(),
            size: 11 + Math.random() * 5,
            hue: 208 + Math.random() * 28,
            phase: Math.random() * Math.PI * 2,
            dx: 0,
            dy: 0,
            vx: 0,
            vy: 0,
            ch: Math.random() < 0.5 ? "0" : "1",
          });
        }
      });
    };

    const draw = (time, dt) => {
      ctx.clearRect(0, 0, w, h);
      // cursor velocity in px/s, smoothed; zero once the mouse stops
      if (dt > 0) {
        mouse.vx += (mouse.mx / dt - mouse.vx) * Math.min(1, dt * 20);
        mouse.vy += (mouse.my / dt - mouse.vy) * Math.min(1, dt * 20);
      }
      mouse.mx = 0;
      mouse.my = 0;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const reach = Math.min(w, h) * 0.09 + 18;
      const curves = BANDS.map((b) => b.p(w, h));
      for (const bit of bits) {
        bit.t += bit.speed * dt;
        if (bit.t > 1) {
          bit.t -= 1;
          bit.off = spread();
        }
        // occasionally flip, so the band shimmers
        if (Math.random() < 0.6 * dt) bit.ch = bit.ch === "0" ? "1" : "0";
        const t = bit.t;
        const [x, y, nx, ny] = bezier(curves[bit.band], t);
        // band swells and pinches along its length and over time, and the spine ripples
        const swell = 0.55 + 0.45 * Math.sin(t * 7 + time * 0.0006 + bit.band * 2);
        const ripple = Math.sin(t * 11 - time * 0.0011 + bit.band) * reach * 0.35;
        const o = bit.off * reach * (0.6 + swell) + ripple;
        const bx = x + nx * o, by = y + ny * o;

        // cursor interaction: the cursor drags bits along and flings them; they drift back like on a spring
        let near = 0;
        if (mouse.active) {
          const ddx = bx + bit.dx - mouse.x, ddy = by + bit.dy - mouse.y;
          const d = Math.hypot(ddx, ddy) || 1;
          if (d < pointerR) {
            near = 1 - d / pointerR;
            const grip = Math.min(1, dt * GRIP_CONSTANT) * near;
            // carry the bit with the cursor's motion
            bit.vx += (mouse.vx - bit.vx) * grip;
            bit.vy += (mouse.vy - bit.vy) * grip;
            // plus a nudge away from the cursor so it doesn't just ride on top
            const kick = Math.min(Math.hypot(mouse.vx, mouse.vy), 1500) * FLING_CONSTANT * near * dt;
            bit.vx += (ddx / d) * kick;
            bit.vy += (ddy / d) * kick;
            if (Math.random() < 6 * near * dt) bit.ch = bit.ch === "0" ? "1" : "0";
          }
        }
        // loose spring back to the band, with some friction so they overshoot and settle
        bit.vx += -bit.dx * SPRING_CONSTANT * dt;
        bit.vy += -bit.dy * SPRING_CONSTANT * dt;
        const damp = Math.exp(-dt * FRICTION_CONSTANT);
        bit.vx *= damp;
        bit.vy *= damp;
        bit.dx += bit.vx * dt;
        bit.dy += bit.vy * dt;
        const mag = Math.hypot(bit.dx, bit.dy);
        if (mag > 260) { bit.dx *= 260 / mag; bit.dy *= 260 / mag; }
        const px = bx + bit.dx, py = by + bit.dy;

        const fade = Math.sin(Math.PI * t) ** 0.7; // dissolve at both ends
        const core = 1 - Math.abs(bit.off) * 0.55;
        const pulse = 0.65 + 0.35 * Math.sin(time * 0.002 + bit.phase);
        const a = Math.min(1, fade * core * pulse * 0.55 + near * fade * 0.5);
        if (a < 0.02) continue;
        ctx.fillStyle = `hsla(0, 0%, ${Math.max(8, 34 + (1 - core) * 14 - near * 26)}%, ${a})`;
        ctx.font = `${bit.size * (1 + near * 0.35)}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;
        ctx.fillText(bit.ch, px, py);
      }
    };

    const frame = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!phone.matches) draw(now, dt); // hidden by CSS on phones, so skip the work
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };

    const onResize = () => {
      build();
      if (reduced && !phone.matches) draw(0, 0);
    };
    const onVisibility = () => {
      if (reduced) return;
      if (document.hidden) cancelAnimationFrame(raf);
      else start();
    };

    build();
    if (reduced) draw(0, 0);
    else start();
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    if (!reduced) {
      window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerleave", onLeave);
    }
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="bitflow" />;
}
