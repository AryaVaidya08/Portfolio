"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight, MdArrowOutward } from "react-icons/md";
import Scroller from "./Scroller";
import Rise from "./Rise";
import SocialLinks from "./SocialLinks";

const ABOUT = [
  { text: "Hi, I'm a first-year (sophomore-classified) at Georgia Tech studying Computer Science with threads in AI & Devices. Previously an Applied AI Engineer @ MoBoo where I fine-tuned LLMs and made agents using LangChain. Currently looking for software engineering internships where I can use my experience within AI to make a real impact!" },
];

const SECTIONS = [
  { id: "overview", label: "Overview" },
  {
    id: "experience",
    label: "Experience",
    items: [
      { icon: "/icons/MoBoo.png", title: "Applied AI Engineer Intern @ MoBoo", date: "Jun – Sep 2025", text: ["Fine-tuned Llama 3.2 with LoRA via Hugging Face to summarize 1M+ tokenized reviews across 35k+ books.", "Built a LangChain evaluation pipeline using a larger Llama 3.2 as an LLM-judge, scoring 90%+ faithfulness.", "Built BERT sentiment and KeyBERT keyword tools that helped 32k users make more informed reading decisions."] },
      { icon: "/icons/ScAI Lab.png", title: "ScAI Lab @ Stevens Institute of Technology", date: "Jun 2025 – Present", text: ["Engineered a lightweight PyTorch hypernetwork for multi-step fluid simulations across 4 datasets.", "Extended 1D-trained models to 2D with transfer learning, needing 20× less training data.", "Cut 50-step rollout MSE by 72.3% with a calibrated periodic boundary-condition loss.", { text: "Published an AAAI Fall 2026 Symposium paper with Prof. Nikhil Muralidhar.", link: { label: "Paper link", href: "/papers/FSS-26_Paper_XXX_5736.pdf" } }] },
      { icon: "/icons/iCode.png", title: "Instructor & Course Developer @ iCode", date: "Jan 2024 – Jul 2026", text: ["Taught 35+ students ML, Python, Arduino, and VEX Robotics through hands-on capstone projects and competition-ready builds.", "Built and sold a 50-week AI curriculum covering ML, deep learning, and agentic AI.", "Created slide decks, quizzes, and Colab notebooks for every unit."] },
      { icon: "/icons/FRC.png", title: "Programming Supervisor @ FRC Robotics 303", date: "Sep 2022 – Jun 2026", text: ["Managed a $50k+ budget and led 50 members to build competition-ready robots and host 6 STEAM events.", "Built a real-time YOLOv8 detection pipeline feeding live game piece positions into an A* pathing algorithm.", "Built an offline Bluetooth scouting app for 100+ members to power alliance selection picks.", "Named a FIRST Leadership Award Semi-Finalist in March 2025."] },
    ],
  },
  {
    id: "projects",
    label: "Projects",
    items: [
      { icon: "/icons/ElbowRoom.png", title: "ElbowRoom", demo: { type: "image", src: "/ElbowRoom-Untrained.gif", aspect: "500 / 450", caption: "The untrained arm. I'm currently training it with reinforcement learning to pick up the ball, place it, and avoid obstacles." }, href: "https://github.com/AryaVaidya08/ElbowRoom", date: "Oct 2026 – Present", meta: "Python · Gymnasium · Reinforcement Learning", text: ["Training a 2D two-link robot arm with a gripper to pick up a ball, place it, and avoid obstacles using reinforcement learning.", "Built an inverse-kinematics simulation of the arm to drive and visualize its motion.", "Wrapped the arm in a custom Gymnasium environment for training and testing the agent."] },
      { icon: "/icons/Lens.png", title: "Lens", demo: { type: "video", src: "https://youtu.be/hyMUIQ1_ZgM" }, href: "https://devpost.com/software/lens-sq1j65", date: "Sep 2026 – Present", meta: "Swift · ARKit · FastAPI · MongoDB · RAG", text: ["Built at GTHacks13: an iOS clinical copilot using Swift, ARKit, a Create ML model, and OCR for local drug recognition.", "Grounded RAG retrieval over 2,000+ OpenFDA drug records for drug-specific clinical context.", "FastAPI/MongoDB backend with 23 REST endpoints for clinician authentication and patient records."] },
      { icon: "/icons/AlumHub.png", title: "AlumHub", demo: { type: "image", src: "/AlumHubPreview.png", aspect: "1598 / 1656", caption: "A mentorship platform connecting high school students with alumni.", link: { label: "Visit the website", href: "https://www.thealumhub.com/" } }, href: "https://www.thealumhub.com/", date: "Apr 2025 – Aug 2026", meta: "Next.js · React · Firebase · SQL", text: ["Full-stack mentorship platform connecting 3k+ high school students and 2k+ alumni, built with Next.js, React, and Firebase.", "Scaled to 170+ schools across 24 states, with SQL queries 3x faster through indexing and caching.", "Rule-based mentor matching on shared interests, with an LLM re-ranking layer for top matches."] },
      { icon: "/icons/Art.png", title: "Gen AI Art Restoration", demo: { type: "carousel", slides: [
        { src: "/GenAI/Experimental Results Images.jpg", caption: "Restorations next to C3N, PRN, StrDiffusion, and ST-DiffNet. Red boxes mark regions to compare against the ground truth." },
        { src: "/GenAI/Ablation Study Images.jpg", caption: "Ablation study: Vanilla VAE, Res-VAE, and pixel-space variants against the proposed model." },
        { src: "/GenAI/Emperical Results.png", caption: "The proposed model scores best on L1 (0.010), PSNR (41.212), and SSIM (0.951)." },
      ] }, href: "/papers/High_Fidelity_Art_Restoration_Utilizing_Latent_Diffusion.pdf", date: "Dec 2024 – Jul 2025", meta: "PyTorch · Latent Diffusion · VAE", text: ["Latent diffusion model in PyTorch combining a residual VAE with an image-conditioned diffusion transformer, reaching 0.010 L1 error.", "Outperformed 4 state-of-the-art restoration models by 8.1% PSNR and 1.82% SSIM, validated against 3 baselines and 6 loss configurations.", { text: "Authored a research paper and presented it at the NJ ISEF Fair, placing 3rd in Computer Science.", link: { label: "Paper link", href: "/papers/High_Fidelity_Art_Restoration_Utilizing_Latent_Diffusion.pdf" } }] },
      { icon: "/icons/RoboCup.png", title: "RoboCup Maze Robot", href: "https://docs.google.com/document/d/10FHWSa4bOjSSGlIXhLycigUrB8t-IbroZ4CENJtcZuU/edit?usp=sharing", demo: { type: "image", src: "/RCJ_robot.jpg", aspect: "384 / 352", maxWidth: 384, caption: "The runner-up maze robot I built for RoboCup Junior. A Raspberry Pi runs a CNN that detects letters and colors in real time at 95% accuracy." }, date: "Mar 2024 – May 2024", meta: "TensorFlow · OpenCV · Raspberry Pi", text: ["Built CNN-guided maze navigator using TensorFlow with 95% accuracy for color and letter detection. 2nd nationally."] },
    ],
  },
  {
    id: "awards",
    label: "Awards",
    items: [
      { icon: "/icons/FIRST.png", title: "FIRST Leadership Award Semi-Finalist", date: "Mar 2025", text: ["Recognized for leadership as Programming Supervisor and Subcaptain of FRC Robotics 303.", "Led 50 members, managed a $50k+ budget, and hosted 6 STEAM events."] },
      { icon: "/icons/NJ_ISEF.png", title: "3rd Place, Computer Science, NJ ISEF", date: "2025", text: ["Placed 3rd in the Computer Science category at the NJ ISEF Fair.", "Presented a latent diffusion model for artwork restoration that beat 4 state-of-the-art models by 8.1% PSNR and 1.82% SSIM."] },
      { icon: "/icons/RoboCup.png", title: "2nd Place Nationally, RoboCup Junior Maze", date: "2024", text: ["Placed 2nd nationally in the Maze category of RoboCup Junior.", "Trained a CNN with OpenCV and TensorFlow on a Raspberry Pi for real-time letter and color detection at 95% accuracy to navigate the maze autonomously."] },
      { icon: "/icons/CaC.png", title: "Winner, Congressional App Challenge", date: "2021", text: ["Won the 2021 Congressional App Challenge with OurVote, a civic engagement iOS app built in Swift."] },
    ],
  },
  {
    id: "education",
    label: "Education",
    items: [
      { icon: "/icons/GT.png", title: "Georgia Institute of Technology", date: "Aug 2026 – May 2029", text: ["B.S. in Computer Science, Threads: AI & Devices.", "Coursework: Data Structures & Algorithms, Discrete Mathematics, Linear Algebra."] },
      { icon: "/icons/BR.png", title: "Bridgewater-Raritan High School", date: "Sep 2022 – Jun 2026", text: ["Top 5% of class, GPA 3.97."] },
    ],
  },
];

// open/onToggle are optional: pass them to control the dropdown from outside (Projects tab)
function Entry({ item, index, open: controlledOpen, onToggle }) {
  const [ownOpen, setOwnOpen] = useState(false);
  const open = controlledOpen ?? ownOpen;
  const toggle = onToggle ?? (() => setOwnOpen(!ownOpen));
  const delay = index * 6;
  const ref = useRef(null);

  // After the dropdown has finished growing, scroll just enough to bring it fully into view
  useEffect(() => {
    if (!open) return;
    const id = setTimeout(() => {
      const r = ref.current.getBoundingClientRect();
      if (r.top < 0 || r.bottom > window.innerHeight) {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        ref.current.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "nearest" });
      }
    }, 480);
    return () => clearTimeout(id);
  }, [open]);

  const head = (
    <>
      <span className="entry-title"><Rise text={item.title} start={delay} /></span>
      {item.text && <MdChevronRight className={"chevron" + (open ? " open" : "")} size={20} aria-hidden />}
    </>
  );
  return (
    <div className="entry" ref={ref}>
      <div className="entry-main">
      <span className="entry-icon" aria-hidden>
        {item.icon && <Image src={item.icon} alt="" fill sizes="32px" style={{ objectFit: "contain" }} />}
      </span>
      <div className="entry-body">
      <div className="entry-row">
        {item.text ? (
          <button className="entry-head" aria-expanded={open} onClick={toggle}>{head}</button>
        ) : (
          <div className="entry-head">{head}</div>
        )}
        {(item.date || item.href) && (
          <span className="entry-side">
            {item.date && <span className="entry-date"><Rise text={item.date} start={delay + 4} /></span>}
            {item.href && (
              <a className="entry-link" href={item.href} target="_blank" rel="noreferrer" aria-label={`Open ${item.title}`}>
                <MdArrowOutward size={16} aria-hidden />
              </a>
            )}
          </span>
        )}
      </div>
      {item.meta && <p className="entry-meta"><Rise text={item.meta} start={delay + 4} /></p>}
      </div>
      </div>
      {item.text && (
        <div className={"bullets" + (open ? " open" : "")} inert={!open}>
        <ul className="entry-bullets">
          {item.text.map((b, bi) => {
            // a bullet is a string, or { text, link: { label, href } } to end it with a link
            const { text, link } = typeof b === "string" ? { text: b } : b;
            return (
              <li key={bi}>
                <Rise text={text} start={bi * 8} />
                {link && (
                  <a className="entry-link inline" href={link.href} target="_blank" rel="noreferrer">
                    <Rise text={link.label} start={bi * 8 + text.length} />
                    <span className="letter" style={{ animationDelay: `${Math.min(bi * 8 + text.length + link.label.length, 140) * 14}ms` }}>
                      <MdArrowOutward size={16} aria-hidden />
                    </span>
                  </a>
                )}
              </li>
            );
          })}
        </ul>
        </div>
      )}
    </div>
  );
}

// YouTube watch/short links become embed URLs; anything else is treated as a video file
function videoEmbed(src) {
  const m = src.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : null;
}

const ARROW_HIDE_MS = 1500;
const SWIPE_PX = 40;

// Results carousel: pictures and captions slide sideways together; the arrows fade away
// when the pointer has been still (or gone) for a moment.
function Slides({ slides }) {
  const [i, setI] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const hideTimer = useRef(null);
  const startX = useRef(null);
  const n = slides.length;
  const move = { transform: `translateX(-${i * 100}%)` };

  const wake = () => {
    setShowArrows(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setShowArrows(false), ARROW_HIDE_MS);
  };
  const sleep = () => {
    clearTimeout(hideTimer.current);
    setShowArrows(false);
  };
  useEffect(() => () => clearTimeout(hideTimer.current), []);

  return (
    <>
      <div className={"stage wide" + (showArrows ? " show-arrows" : "")} onPointerMove={wake}
        onPointerDown={(e) => { startX.current = e.clientX; wake(); }}
        onPointerUp={(e) => {
          if (startX.current === null) return;
          const dx = e.clientX - startX.current;
          startX.current = null;
          if (Math.abs(dx) > SWIPE_PX) setI((i + (dx < 0 ? 1 : n - 1)) % n); // swipe left = next
        }}
        onPointerCancel={() => { startX.current = null; }}
        onPointerLeave={sleep}>
        <div className="slide-track" style={move}>
          {slides.map((sl, k) => (
            <div key={k} className="pane" aria-hidden={k !== i}>
              {sl.src ? <Image src={sl.src} alt={sl.caption} fill sizes="520px" draggable={false} style={{ objectFit: "contain" }} /> : <p>Image coming soon</p>}
            </div>
          ))}
        </div>
        {n > 1 && (
          <>
            <button className="arrow prev" aria-label="Previous result" onClick={() => { setI((i + n - 1) % n); wake(); }}><MdChevronLeft size={22} /></button>
            <button className="arrow next" aria-label="Next result" onClick={() => { setI((i + 1) % n); wake(); }}><MdChevronRight size={22} /></button>
          </>
        )}
      </div>
      <div className="caption-window">
        <div className="slide-track" style={move}>
          {slides.map((sl, k) => <p key={k} className="preview-caption" aria-hidden={k !== i}>{sl.caption}</p>)}
        </div>
      </div>
      {n > 1 && (
        <div className="dots">
          {slides.map((sl, k) => <button key={k} className={k === i ? "on" : ""} aria-label={`Show result ${k + 1}`} aria-current={k === i} onClick={() => setI(k)} />)}
        </div>
      )}
    </>
  );
}

// Right-hand panel on the Projects tab. item.demo is one of:
//   { type: "iframe", src }  embedded site or simulation
//   { type: "video", src }   YouTube link or video file
//   { type: "image", src, aspect?, maxWidth?, caption?, link? }   single picture or GIF
//   { type: "carousel", slides: [{ src, caption }] }  results with captions underneath
// An empty src shows a "coming soon" note until the asset is added.
function Preview({ item }) {
  const d = item.demo;
  let body;
  if (d?.type === "carousel") {
    body = <Slides slides={d.slides} />;
  } else if (!d?.src) {
    body = <div className="stage"><p>{d ? "Preview coming soon" : `No preview for ${item.title} yet.`}</p></div>;
  } else if (d.type === "image") {
    // aspect shapes the frame to the picture and maxWidth stops small pictures being blown up; caption goes underneath; GIFs skip the optimizer so they keep animating
    body = (
      <>
        <div className="stage" style={d.aspect ? { aspectRatio: d.aspect, maxWidth: d.maxWidth, marginInline: "auto" } : undefined}>
          <Image src={d.src} alt={d.caption ?? item.title} fill sizes="520px" unoptimized={d.src.endsWith(".gif")} style={{ objectFit: d.aspect ? "contain" : "cover" }} />
        </div>
        {d.caption && (
          <p className="preview-caption">
            {d.caption}
            {d.link && (
              <a className="entry-link inline" href={d.link.href} target="_blank" rel="noreferrer">
                {d.link.label}
                <MdArrowOutward size={16} aria-hidden />
              </a>
            )}
          </p>
        )}
      </>
    );
  } else if (d.type === "video" && !videoEmbed(d.src)) {
    body = <div className="stage live"><video src={d.src} controls playsInline /></div>;
  } else {
    body = <div className="stage live"><iframe src={d.type === "video" ? videoEmbed(d.src) : d.src} title={`${item.title} preview`} loading="lazy" allowFullScreen /></div>;
  }
  return <aside className="preview" aria-label="Project preview" key={item.title}>{body}</aside>;
}

export default function Portfolio() {
  const [active, setActive] = useState("overview");
  const [openProject, setOpenProject] = useState(null); // title of the project open on the Projects tab
  const closeTimer = useRef(null);
  const [shownProject, setShownProject] = useState(null); // last one opened, kept so the preview can animate out
  const section = SECTIONS.find((s) => s.id === active);
  const projects = active === "projects";

  const selectTab = (id) => {
    setActive(id);
    clearTimeout(closeTimer.current);
    setOpenProject(null);
    setShownProject(null);
  };

  const toggleProject = (title) => {
    const next = openProject === title ? null : title;
    setOpenProject(next);
    clearTimeout(closeTimer.current);
    if (next) setShownProject(next);
    // unmount the preview once it has slid away, so a video can't keep playing unseen
    else closeTimer.current = setTimeout(() => setShownProject(null), 700);
  };

  return (
    <main className="page">
      <h1>
        <button onClick={() => selectTab("overview")}>Arya Vaidya</button>
      </h1>


      <nav className="menu" aria-label="Sections">
        {SECTIONS.map((s) => (
          <button key={s.id} className={s.id === active ? "on" : ""} aria-pressed={s.id === active} data-label={s.label} onClick={() => selectTab(s.id)}>
            {s.label}
          </button>
        ))}
      </nav>

      <section className={"panel" + (projects ? " projects" : "")} aria-live="polite">
        {/* key remounts the content so the letter-rise replays on every change */}
        <div key={active} className="content">
          {section.slides
            ? <Scroller slides={section.slides} />
            : active !== "overview"
            ? section.items.map((it, i) => projects
              ? <Entry key={it.title} item={it} index={i} open={openProject === it.title} onToggle={() => toggleProject(it.title)} />
              : <Entry key={it.title} item={it} index={i} />)
            : ABOUT.map((p, i) => (
                <p key={i} className={"rise-block " + (p.meta ? "entry-meta" : "entry-text")}>{p.text}</p>
              ))}
        </div>
        {projects && (
          <div className={"preview-wrap" + (openProject ? " open" : "")} inert={!openProject}>
            {shownProject && <Preview item={section.items.find((it) => it.title === shownProject)} />}
          </div>
        )}
      </section>

      <SocialLinks />
    </main>
  );
}
