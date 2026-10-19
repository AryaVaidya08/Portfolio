"use client";

import { useState } from "react";
import Image from "next/image";
import { MdChevronRight, MdArrowOutward } from "react-icons/md";
import Scroller from "./Scroller";
import Rise from "./Rise";
import SocialLinks from "./SocialLinks";

const ABOUT = [
  { text: "First-year (sophomore-classified) at Georgia Tech studying Computer Science with threads in AI & Devices. Previously an Applied AI Engineer @ MoBoo where I fine-tuned LLMs and made agents using LangChain. Currently looking for software engineering internships where I can use my experience within AI to make a real impact!" },
];

const SECTIONS = [
  { id: "overview", label: "Overview" },
  {
    id: "experience",
    label: "Experience",
    items: [
      { icon: "/icons/MoBoo.png", title: "Applied AI Engineer Intern @ MoBoo", date: "Jun – Sep 2025", text: ["Fine-tuned Llama 3.2 with LoRA via Hugging Face to summarize 1M+ tokenized reviews across 35k+ books.", "Built a LangChain evaluation pipeline using a larger Llama 3.2 as an LLM-judge, scoring 90%+ faithfulness.", "Built BERT sentiment and KeyBERT keyword tools that helped 32k users make more informed reading decisions."] },
      { icon: "/icons/ScAI Lab.png", title: "ScAI Lab @ Stevens Institute of Technology", date: "Jun 2025 – Present", text: ["Engineered a lightweight PyTorch hypernetwork for multi-step fluid simulations across 4 datasets.", "Extended 1D-trained models to 2D with transfer learning, needing 20× less training data.", "Cut 50-step rollout MSE by 72.3% with a calibrated periodic boundary-condition loss.", { text: "Published an AAAI Fall 2026 Symposium paper with Prof. Nikhil Muralidhar.", link: { label: "Paper link", href: "#" } }] },
      { icon: "/icons/iCode.png", title: "Instructor & Course Developer @ iCode", date: "Jan 2024 – Jul 2026", text: ["Taught 35+ students ML, Python, Arduino, and VEX Robotics through hands-on capstone projects and competition-ready builds.", "Built and sold a 50-week AI curriculum covering ML, deep learning, and agentic AI.", "Created slide decks, quizzes, and Colab notebooks for every unit."] },
      { icon: "/icons/FRC.png", title: "Programming Supervisor @ FRC Robotics 303", date: "Sep 2022 – Jun 2026", text: ["Managed a $50k+ budget and led 50 members to build competition-ready robots and host 6 STEAM events.", "Built a real-time YOLOv8 detection pipeline feeding live game piece positions into an A* pathing algorithm.", "Built an offline Bluetooth scouting app for 100+ members to power alliance selection picks.", "Named a FIRST Leadership Award Semi-Finalist in March 2025."] },
    ],
  },
  {
    id: "projects",
    label: "Projects",
    items: [
      { icon: "/icons/ElbowRoom.png", title: "ElbowRoom", href: "https://github.com/AryaVaidya08/ElbowRoom", date: "Oct 2026 – Present", meta: "Python · Gymnasium · Reinforcement Learning", text: ["Training a 2D two-link robot arm with a gripper to pick up a ball, place it, and avoid obstacles using reinforcement learning.", "Built an inverse-kinematics simulation of the arm to drive and visualize its motion.", "Wrapped the arm in a custom Gymnasium environment for training and testing the agent."] },
      { icon: "/icons/Lens.png", title: "Lens", href: "https://github.com/AryaVaidya08/Lens", date: "Sep 2026 – Present", meta: "Swift · ARKit · FastAPI · MongoDB · RAG", text: ["Built at GTHacks13: an iOS clinical copilot using Swift, ARKit, a Create ML model, and OCR for local drug recognition.", "Grounded RAG retrieval over 2,000+ OpenFDA drug records for drug-specific clinical context.", "FastAPI/MongoDB backend with 23 REST endpoints for clinician authentication and patient records."] },
      { icon: "/icons/AlumHub.png", title: "AlumHub", href: "https://thealumhub.com", date: "Apr 2025 – Aug 2026", meta: "Next.js · React · Firebase · SQL", text: ["Full-stack mentorship platform connecting 3k+ high school students and 2k+ alumni, built with Next.js, React, and Firebase.", "Scaled to 170+ schools across 24 states, with SQL queries 3x faster through indexing and caching.", "Rule-based mentor matching on shared interests, with an LLM re-ranking layer for top matches."] },
      { icon: "/icons/Art.png", title: "Gen AI Art Restoration", href: "https://github.com/AryaVaidya08", date: "Dec 2024 – Jul 2025", meta: "PyTorch · Latent Diffusion · VAE", text: ["Latent diffusion model in PyTorch combining a residual VAE with an image-conditioned diffusion transformer, reaching 0.010 L1 error.", "Outperformed 4 state-of-the-art restoration models by 8.1% PSNR and 1.82% SSIM, validated against 3 baselines and 6 loss configurations.", "Presented at the NJ ISEF Fair, placing 3rd in Computer Science."] },
      { icon: "/icons/RoboCup.png", title: "RoboCup Maze Robot", date: "Mar 2024 – May 2024", meta: "TensorFlow · OpenCV · Raspberry Pi", text: ["CNN-guided maze navigator at 95% accuracy. 2nd nationally."] },
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
      { icon: "/icons/GT.png", title: "Georgia Institute of Technology", date: "2025 – May 2029", text: ["B.S. in Computer Science, Threads: AI & Devices.", "Coursework: Data Structures & Algorithms, Discrete Mathematics, Linear Algebra."] },
      { icon: "/icons/BR.png", title: "Bridgewater-Raritan High School", date: "2026", text: ["Top 5% of class, GPA 3.97."] },
    ],
  },
];

function Entry({ item, index }) {
  const [open, setOpen] = useState(false);
  const delay = index * 6;
  const head = (
    <>
      <span className="entry-title"><Rise text={item.title} start={delay} /></span>
      {item.text && <MdChevronRight className={"chevron" + (open ? " open" : "")} size={20} aria-hidden />}
    </>
  );
  return (
    <div className="entry">
      <div className="entry-main">
      <span className="entry-icon" aria-hidden>
        {item.icon && <Image src={item.icon} alt="" fill sizes="32px" style={{ objectFit: "contain" }} />}
      </span>
      <div className="entry-body">
      <div className="entry-row">
        {item.text ? (
          <button className="entry-head" aria-expanded={open} onClick={() => setOpen(!open)}>{head}</button>
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
      {open && (
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
      )}
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("overview");
  const section = SECTIONS.find((s) => s.id === active);

  return (
    <main className="page">
      <h1>
        <button onClick={() => setActive("overview")}>Arya Vaidya</button>
      </h1>


      <nav className="menu" aria-label="Sections">
        {SECTIONS.map((s) => (
          <button key={s.id} className={s.id === active ? "on" : ""} aria-pressed={s.id === active} onClick={() => setActive(s.id)}>
            {s.label}
          </button>
        ))}
      </nav>

      <section className="panel" aria-live="polite">
        {/* key remounts the content so the letter-rise replays on every change */}
        <div key={active} className="content">
          {section.slides
            ? <Scroller slides={section.slides} />
            : active !== "overview"
            ? section.items.map((it, i) => <Entry key={it.title} item={it} index={i} />)
            : ABOUT.map((p, i) => (
                <p key={i} className={"rise-block " + (p.meta ? "entry-meta" : "entry-text")}>{p.text}</p>
              ))}
        </div>
      </section>

      <SocialLinks />
    </main>
  );
}
