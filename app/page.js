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

            <p className="hero-descriptor">
              A student, researcher, and builder working at the intersection of
              machine learning and the physical world. Currently at Georgia Tech.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "4px" }}>
              <p>
                I&apos;m studying Computer Science at Georgia Tech, on the
                Intelligence and Devices threads. I like problems where you have to
                get your hands dirty with both the math and the hardware — the
                specifics are all below. Outside of school, I like being in rooms
                where I&apos;m learning something new — a research lab, a robotics
                pit, or a classroom I&apos;m the one running.
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
                  "Fine-tuned Llama 3.2 with LoRA-based parameter-efficient training via Hugging Face to generate consolidated summaries across a tokenized corpus of 1M+ reviews.",
                  "Designed an automated LLM-as-judge evaluation pipeline to score generated summaries for accuracy and faithfulness across 35k+ books.",
                ],
              },
              {
                company: "iCode",
                role: "Instructor & Course Developer",
                date: "Jan 2024 - Jul 2026",
                bullets: [
                  "Taught 35+ students through project-based instruction in ML, Python, Arduino, and VEX Robotics, guiding them through capstone projects and competition-ready builds.",
                  "Built and sold a comprehensive 50-week AI curriculum covering ML, deep learning, and agentic AI, supported by original slide decks, quizzes, and Colab notebooks.",
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
                desc: "A full-stack mentorship platform connecting 3k+ high school students with 2k+ alumni across 170+ schools and 24 states. Built with Next.js, React, and Firebase auth; indexed and cached SQL to make queries 3x faster; integrated Stripe for subscriptions and a rule-based matching algorithm with an LLM re-ranking layer.",
                tags: ["React", "Next.js", "Firebase", "Stripe"],
              },
              {
                type: "Robotics",
                title: "FRC Robotics: Vision & Scouting Systems",
                desc: "As programming subcaptain, built a real-time YOLOv8 object detection pipeline feeding an A* pathing algorithm for autonomous scoring under defensive pressure, plus a scouting app for 100+ members that syncs match data peer-to-peer over Bluetooth to power data-driven alliance selection.",
                tags: ["YOLOv8", "Computer Vision", "A*"],
              },
              {
                type: "Robotics",
                title: "RoboCup Junior: Maze Navigation Robot",
                desc: "Trained a CNN with OpenCV and TensorFlow on a Raspberry Pi for real-time letter and color detection, achieving 95% accuracy, to autonomously navigate a maze. Placed 2nd nationally in the Maze category.",
                tags: ["TensorFlow", "OpenCV", "Raspberry Pi"],
              },
              {
                type: "iOS App",
                title: "OurVote & Chor",
                desc: "Published two iOS apps in Swift: OurVote, a civic engagement app that won the 2021 Congressional App Challenge, and Chor, a family management and task-tracking app with 4k+ downloads.",
                tags: ["Swift", "Xcode"],
              },
            ].map(({ type, title, desc, tags }) => (
              <div key={title} className="card">
                <div className="card-meta">
                  <h3 className="card-title">{title}</h3>
                  <span className="card-type">{type}</span>
                </div>
                <p className="card-desc">{desc}</p>
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
                meta: "Co-authored with Prof. Nikhil Muralidhar, Stevens Institute of Technology · In preparation for ICLR · 2025–2026",
                desc: "A lightweight PyTorch hypernetwork for multi-step fluid dynamics across 4 datasets, using transfer learning to extend 1D-trained models to 2D with 20× less data. A calibrated boundary-condition loss cut 50-step rollout error by 72.3%.",
              },
              {
                title: "Latent Diffusion for Artwork Restoration",
                meta: "NJ ISEF Fair · 3rd Place, Computer Science Category · 2025",
                desc: "A latent diffusion model combining a residual VAE with an image-conditioned diffusion transformer for artwork restoration, achieving 0.010 L1 error and outperforming 4 state-of-the-art models by 8.1% in PSNR and 1.82% in SSIM.",
              },
            ].map(({ title, meta, desc }) => (
              <li key={title} className="research-item">
                <div>
                  <p className="research-title">{title}</p>
                  <p className="research-meta">{meta}</p>
                  <p className="research-desc">{desc}</p>
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
