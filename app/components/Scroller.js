import Image from "next/image";

// Infinite horizontal scroller that drifts on its own. The photos are rendered twice and the
// track slides left by exactly half its width, so the loop restarts without a visible jump.
// Slides are { src, caption }; no src renders a gray placeholder. Captions show on hover.
export default function Scroller({ slides }) {
  return (
    <div className="scroller" role="group" aria-label="Photos from my life" style={{ "--count": slides.length }}>
      <div className="scroller-track">
        {[0, 1].map((copy) =>
          slides.map((s, k) => (
            <figure key={`${copy}-${k}`} className="pic" style={{ "--i": k }} aria-hidden={copy === 1}>
              {s.src && <Image src={s.src} alt={copy === 0 ? s.caption : ""} fill sizes="200px" style={{ objectFit: "cover" }} />}
              <figcaption>{s.caption}</figcaption>
            </figure>
          ))
        )}
      </div>
    </div>
  );
}
