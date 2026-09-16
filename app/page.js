import Image from "next/image";
import TabBar from "./components/TabBar";
import SocialLinks from "./components/SocialLinks";

/* ── Reusable section header ───────────────────────────────── */
function SectionHeader({ index, title }) {
  return (
    <div className="section-header">
      <span className="section-index">{index}</span>
      <span className="eyebrow">{title}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      {/* ── 00 · HERO / ABOUT (combined) ───────────────────── */}
      <section id="hero" className="section" style={{ padding: "88px 52px 72px" }}>
        <div className="hero-grid">
          {/* Left column — headline + bio */}
          <div className="hero-text">
            <span className="eyebrow mono">Atlanta, Georgia · Class of 2029</span>

            <h1>
              Hi, I&apos;m{" "} <strong>Arya Vaidya</strong>
            </h1>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "4px" }}>
              <p>
                Currently a first-year student at Georgia Tech studying Computer
                Science (Threads: AI &amp; Devices) and Robotics. I like solving
                real-world problems and being in rooms where I&apos;m learning
                something new. Check out my{" "}
                <a href="#work" className="inline-link">experience</a>,{" "}
                <a href="#projects" className="inline-link">projects</a>,{" "}
                <a href="#research" className="inline-link">research</a>, or just
                some{" "}
                <a href="#fun" className="inline-link">fun bits</a> of me below!
              </p>
            </div>

            <a href="#work" className="cta-link" style={{ marginTop: "8px" }}>
              See my work
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="6 13 12 19 18 13" />
              </svg>
            </a>
          </div>

          {/* Right column — photo + socials */}
          <div className="about-sidebar">
            <div className="image-placeholder">
              <Image
                src="/photo.jpg"
                alt="Arya Vaidya"
                fill
                sizes="240px"
                style={{ objectFit: "cover", objectPosition: "center 30%" }}
                priority
              />
            </div>
            <SocialLinks />
          </div>
        </div>
      </section>

      {/* ── 01 · WORK EXPERIENCE ───────────────────────────── */}
      <section id="work" className="section">
        <div className="section-inner">
          <SectionHeader index="01" title="Work Experience" />

          <div className="work-list">
            {[
              {
                company: "MoBoo",
                role: "Applied AI Engineer Intern",
                date: "Jun 2025 – Sept 2025",
                bullets: [
                  "Generated consolidated book summaries across 1M+ tokenized reviews, by fine-tuning a Llama 3.2 LLM with LoRA-based parameter-efficient training via Hugging Face.",
                  "Ensured generated summaries scored 90%+ average faithfulness across 35k+ books, by designing an automated evaluation pipeline using a larger Llama 3.2 model as an LLM-judge.",
                  "Enabled 32k users to make more informed reading decisions, by building Python tools for BERT-based sentiment analysis on critic reviews and keyword extraction with KeyBERT.",
                ],
              },
              {
                company: "iCode",
                role: "Instructor & Course Developer",
                date: "Jan 2024 - Jul 2026",
                bullets: [
                  "Taught 35+ students through project-based instruction in ML, Python, Arduino, and VEX Robotics, guiding them through hands-on capstone projects and competition-ready builds.",
                  "Built and sold a comprehensive 50-week AI curriculum to iCode covering ML, deep learning, and agentic AI, supported by original slide decks, quizzes, and hands-on Colab notebooks.",
                ],
              },
            ].map(({ company, role, date, bullets }) => (
              <div key={company} className="work-row">
                <div className="work-header">
                  <span className="work-title">
                    <span className="work-role">{role}</span>
                    <span className="work-sep">|</span>
                    <span className="work-company">{company}</span>
                  </span>
                  <span className="work-date">{date}</span>
                </div>
                <ul className="work-bullets">
                  {bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 · PROJECTS ──────────────────────────────────── */}
      <section id="projects" className="section">
        <div className="section-inner">
          <SectionHeader index="02" title="Projects" />

          <div className="card-grid">
            {[
              {
                type: "Full-Stack",
                title: "AlumHub",
                bullets: [
                  "Built a full-stack mentorship platform using Next.js and React to connect 3k+ high school students and 2k+ alumni, backed by Firebase for authentication and SQL for data storage.",
                  "Scaled the platform to 170+ schools across 24 states, by optimizing SQL queries 3x faster through database indexing and caching, and integrating Stripe for subscription payments.",
                  "Engineered a rule-based scoring algorithm to connect students and mentors on shared interests and experiences, with an LLM re-ranking layer for the top matches.",
                ],
                tags: ["React", "Next.js", "Firebase", "Stripe"],
              },
              {
                type: "Robotics",
                title: "FRC Robotics: Vision & Scouting Systems",
                bullets: [
                  "Managed a $50k+ budget and led 50 members to develop competition-ready robots and host 6 STEAM events.",
                  "Enabled autonomous navigation and scoring under pressure, by building a real-time YOLOv8 object detection pipeline that fed live game piece positions into an A* pathing algorithm.",
                  "Built a scouting app for 100+ members to log in-match robot performance data, syncing entries offline over peer-to-peer Bluetooth to a master device, enabling the scouting lead to make data-driven alliance selection picks.",
                  "Named a FIRST Leadership Award Semi-Finalist in March 2025.",
                ],
                tags: ["YOLOv8", "Computer Vision", "A*"],
              },
              {
                type: "Robotics",
                title: "RoboCup Junior: Maze Navigation Robot",
                bullets: [
                  "Trained a CNN with OpenCV and TensorFlow on a Raspberry Pi for real-time letter and color detection, achieving 95% accuracy, to autonomously navigate a maze.",
                  "Placed 2nd nationally in the Maze category.",
                ],
                tags: ["TensorFlow", "OpenCV", "Raspberry Pi"],
              },
              {
                type: "iOS App",
                title: "OurVote & Chor",
                bullets: [
                  "Published OurVote, a civic engagement iOS app in Swift that won the 2021 Congressional App Challenge.",
                  "Published Chor, a family management and task-tracking iOS app in Swift with 4k+ downloads.",
                ],
                tags: ["Swift", "Xcode"],
              },
            ].map(({ type, title, bullets, tags }) => (
              <div key={title} className="card">
                <div className="card-meta">
                  <h3 className="card-title">{title}</h3>
                  <span className="card-type">{type}</span>
                </div>
                <ul className="work-bullets">
                  {bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
                <div className="card-tags">
                  {tags.map((t, ti) => (
                    <span key={ti} className="pill">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 · RESEARCH ───────────────────────────────────── */}
      <section id="research" className="section">
        <div className="section-inner">
          <SectionHeader index="03" title="Research" />

          <ul className="research-list">
            {[
              {
                title: "ML Hypernetworks for Multi-Step Fluid Simulation",
                meta: "Co-authoring an AAAI paper with Prof. Nikhil Muralidhar, Stevens Institute of Technology · 2025–Present",
                bullets: [
                  "Engineered a lightweight hypernetwork architecture in PyTorch for multi-step fluid dynamic simulations across 4 datasets, applying transfer learning to extend models trained on 1D simulations to 2D, requiring 20× less training data.",
                  "Cut 50-step rollout MSE by 72.3%, by developing a calibrated periodic boundary-condition loss with warmup scheduling.",
                ],
              },
              {
                title: "Latent Diffusion for Artwork Restoration",
                meta: "NJ ISEF Fair · 3rd Place, Computer Science Category · 2025",
                bullets: [
                  "Designed a latent diffusion model for artwork restoration in PyTorch combining a residual VAE with an image-conditioned diffusion transformer, achieving 0.010 L1 error on artwork damaged by random patch masking.",
                  "Outperformed 4 state-of-the-art restoration models by 8.1% in PSNR and 1.82% in SSIM, by validating the architecture through ablation studies against 3 baseline architectures and 6 loss function configurations.",
                ],
              },
            ].map(({ title, meta, bullets }) => (
              <li key={title} className="research-item">
                <div>
                  <p className="research-title">{title}</p>
                  <p className="research-meta">{meta}</p>
                  <ul className="work-bullets research-desc">
                    {bullets.map((b, bi) => (
                      <li key={bi}>{b}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 04 · AWARDS ─────────────────────────────────────── */}
      <section id="activities" className="section">
        <div className="section-inner">
          <SectionHeader index="04" title="Awards" />

          <div className="activities-grid">
            {[
              { name: "FIRST Leadership Award Semi-Finalist", org: "FIRST Robotics Competition", year: "2025" },
              { name: "3rd Place, Computer Science Category", org: "NJ ISEF Fair", year: "2025" },
              { name: "2nd Place Nationally, Maze Category", org: "RoboCup Junior Robotics Competition", year: "2024" },
              { name: "Winner, Congressional App Challenge", org: "OurVote (iOS App)", year: "2021" },
            ].map(({ name, org, year }, i) => (
              <div key={i} className="activity-item">
                <div className="activity-text">
                  <span className="activity-name">{name}</span>
                  <span className="activity-org">{org}</span>
                </div>
                <span className="activity-year">{year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 · EDUCATION ─────────────────────────────────── */}
      <section id="education" className="section">
        <div className="section-inner">
          <SectionHeader index="05" title="Education" />

          <div>
            {[
              {
                school: "Georgia Institute of Technology",
                degree: "B.S. in Computer Science · Threads: AI (Intelligence) & Devices",
                year: "2025 – 2029",
                gpa: null,
              },
              {
                school: "Bridgewater-Raritan High School",
                degree: "High School Diploma · Top 5% of Class",
                year: "2026",
                gpa: "GPA 3.97",
              },
            ].map(({ school, degree, year, gpa }) => (
              <div key={school} className="edu-row">
                <div>
                  <p className="edu-school">{school}</p>
                  <p className="edu-degree">{degree}{gpa && <span className="mono" style={{ marginLeft: "12px" }}>{gpa}</span>}</p>
                </div>
                <span className="edu-year">{year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 · OFF DUTY ──────────────────────────────────── */}
      <section id="fun" className="section">
        <div className="section-inner">
          <SectionHeader index="06" title="Bits (Of Me)" />

          <div className="fun-grid">
            {[
              { label: "Favorite Sport", title: "Soccer (FC Barcelona)" },
              { label: "Favorite Animal", title: "Penguins" },
              { label: "Favorite Hobby", title: "Baking" },
              { label: "Favorite Movie", title: "The Truman Show" },
            ].map(({ label, title }) => (
              <div key={label} className="fun-card">
                <span className="fun-card-label">{label}</span>
                <p className="fun-card-title">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLOATING TAB BAR ───────────────────────────────── */}
      <TabBar />
    </>
  );
}
