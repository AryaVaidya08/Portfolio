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
            <span className="eyebrow mono">Atlanta, Georgia · Class of 2030</span>

            <h1>
              Hi, I&apos;m{" "} <strong>Arya Vaidya</strong>
            </h1>

            <p className="hero-descriptor">
              [Short one-liner — a student, researcher, and builder interested in
              [field]. Currently at [University].]
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "4px" }}>
              <p>
                [First paragraph — introduce yourself. Who are you, what are you
                studying or working on, and what drives you? Keep it genuine and
                conversational. This is the human version of your CV.]
              </p>
              <p>
                [Second paragraph — go a bit deeper. What problems excite you?
                What do you want to build or discover? Any particular
                intersection of fields you&apos;re drawn to?]
              </p>
              <p>
                [Third paragraph — optional. Mention a few personal details or
                interests that make you memorable beyond credentials.]
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
              <span className="eyebrow" style={{ color: "var(--text-faint)" }}>[ photo ]</span>
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
              { company: "[Company Name A]", role: "[Role · Full-time]", date: "[Year]–[Year]" },
              { company: "[Company Name B]", role: "[Role · Internship]", date: "[Year]" },
              { company: "[Company Name C]", role: "[Role · Part-time]", date: "[Year]–[Year]" },
              { company: "[Company Name D]", role: "[Role · Contract]", date: "[Year]" },
            ].map(({ company, role, date }) => (
              <div key={company} className="work-row">
                <span className="work-company">{company}</span>
                <span className="work-role">{role}</span>
                <span className="work-date">{date}</span>
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
                n: "01",
                type: "Open Source",
                title: "[Project Title Alpha]",
                desc: "[Short description of the project. What does it do, what problem does it solve, and what was interesting about building it?]",
                tags: ["[Tag]", "[Tag]", "[Tag]"],
              },
              {
                n: "02",
                type: "Research Tool",
                title: "[Project Title Beta]",
                desc: "[Short description of the project. What does it do, what problem does it solve, and what was interesting about building it?]",
                tags: ["[Tag]", "[Tag]"],
              },
              {
                n: "03",
                type: "Hackathon",
                title: "[Project Title Gamma]",
                desc: "[Short description of the project. What does it do, what problem does it solve, and what was interesting about building it?]",
                tags: ["[Tag]", "[Tag]", "[Tag]"],
              },
              {
                n: "04",
                type: "Side Project",
                title: "[Project Title Delta]",
                desc: "[Short description of the project. What does it do, what problem does it solve, and what was interesting about building it?]",
                tags: ["[Tag]", "[Tag]"],
              },
              {
                n: "05",
                type: "Web App",
                title: "[Project Title Epsilon]",
                desc: "[Short description of the project. What does it do, what problem does it solve, and what was interesting about building it?]",
                tags: ["[Tag]", "[Tag]", "[Tag]"],
              },
              {
                n: "06",
                type: "Mobile",
                title: "[Project Title Zeta]",
                desc: "[Short description of the project. What does it do, what problem does it solve, and what was interesting about building it?]",
                tags: ["[Tag]", "[Tag]"],
              },
            ].map(({ n, type, title, desc, tags }) => (
              <div key={n} className="card">
                <div className="card-meta">
                  <span className="card-index">{n}</span>
                  <span className="card-type">{type}</span>
                </div>
                <h3 className="card-title">{title}</h3>
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

      {/* ── 03 · RESEARCH / PUBLICATIONS ───────────────────── */}
      <section id="research" className="section">
        <div className="section-inner">
          <SectionHeader index="03" title="Research &amp; Publications" />

          <ul className="research-list">
            {[
              {
                n: "01",
                title: "[Paper Title: A Study of Something Interesting and Important]",
                meta: "[Venue / Journal Name] · [Year] · [Authors et al.]",
              },
              {
                n: "02",
                title: "[Paper Title: Another Contribution to the Field]",
                meta: "[Conference Name (ACRONYM)] · [Year] · [Authors et al.]",
              },
              {
                n: "03",
                title: "[Paper Title: A Third Work in Progress or Under Review]",
                meta: "Under Review · [Target Venue] · [Year]",
              },
            ].map(({ n, title, meta }) => (
              <li key={n} className="research-item">
                <span className="research-index">{n}</span>
                <div>
                  <p className="research-title">{title}</p>
                  <p className="research-meta">{meta}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 04 · ACTIVITIES / AWARDS ───────────────────────── */}
      <section id="activities" className="section">
        <div className="section-inner">
          <SectionHeader index="04" title="Activities &amp; Awards" />

          <div className="activities-grid">
            {[
              { name: "[Award Name]", org: "[Awarding Organization]", year: "[Year]" },
              { name: "[Award Name]", org: "[Awarding Organization]", year: "[Year]" },
              { name: "[Activity / Club]", org: "[Institution or Organization]", year: "[Year]–[Year]" },
              { name: "[Scholarship Name]", org: "[Institution]", year: "[Year]" },
              { name: "[Competition Name]", org: "[Organizer]", year: "[Year]" },
              { name: "[Leadership Role]", org: "[Organization]", year: "[Year]–[Year]" },
            ].map(({ name, org, year }, i) => (
              <div key={i} className="activity-item">
                <span className="activity-name">{name}</span>
                <span className="activity-org">{org}</span>
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
                school: "[University Name]",
                degree: "[Degree] in [Major] · [Minor or Concentration]",
                year: "[Year]–[Year]",
                gpa: "GPA [X.XX]",
              },
              {
                school: "[High School Name]",
                degree: "[Diploma or Certificate]",
                year: "[Year]",
                gpa: null,
              },
            ].map(({ school, degree, year, gpa }, i) => (
              <div key={school} className="edu-row" style={i > 0 ? { borderTop: "none" } : {}}>
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

      {/* ── 06 · FUN ───────────────────────────────────────── */}
      <section id="fun" className="section">
        <div className="section-inner">
          <SectionHeader index="06" title="Fun!" />

          <p style={{ marginBottom: "36px", maxWidth: "540px", fontSize: "14px" }}>
            [A line or two about what this section is — the stuff that doesn&apos;t fit a CV
            but makes you, you. Keep it loose and genuine.]
          </p>

          <div className="fun-grid">
            {[
              {
                label: "Currently reading",
                title: "[Book Title]",
                body: "[Author] — [One sentence on why this book.]",
              },
              {
                label: "Listening to",
                title: "[Artist or Album]",
                body: "[Brief note on what genre or mood you've been in lately.]",
              },
              {
                label: "Side obsession",
                title: "[Hobby or Interest]",
                body: "[A sentence or two on something you do outside of work that you're genuinely proud of or enthusiastic about.]",
              },
              {
                label: "Favorite tool",
                title: "[Tool / App / Language]",
                body: "[Why you love it and what you use it for.]",
              },
              {
                label: "Currently watching",
                title: "[Show or Film]",
                body: "[One sentence recommendation or reaction.]",
              },
              {
                label: "Random fact",
                title: "[Something surprising about you]",
                body: "[Expand on it slightly — make it memorable.]",
              },
            ].map(({ label, title, body }) => (
              <div key={label} className="fun-card">
                <span className="fun-card-label">{label}</span>
                <p className="fun-card-title">{title}</p>
                <p className="fun-card-body">{body}</p>
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
