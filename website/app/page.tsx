import React from "react";

const stats = [
  { label: "Current focus", value: "Race craft", note: "Preparation, precision, consistency" },
  { label: "Platform mode", value: "Sponsor-ready", note: "Journey, proof, reporting" },
  { label: "Next build", value: "Portal", note: "Partner dashboards and media centre" }
];

const proofPoints = [
  "A structured platform designed around sponsor clarity, not vanity.",
  "A race weekend content engine that turns one story into media, social, and partner outputs.",
  "A private sponsor experience built to show exposure, audience, activation, and next steps.",
  "A Mission Control layer prepared for analytics, search visibility, AI citations, and commercial pipeline."
];

const timeline = [
  { phase: "01", title: "Foundation", body: "Brand system, design language, token library, logo system, and website architecture." },
  { phase: "02", title: "Public platform", body: "Homepage, journey, results, media centre, sponsors, news, and press resources." },
  { phase: "03", title: "Sponsor portal", body: "Private partner reporting, activation ideas, downloads, and executive summaries." },
  { phase: "04", title: "Mission Control", body: "Audience, media, content, search, sponsor ROI, and commercial intelligence." }
];

const sponsorMetrics = [
  { value: "ROI", label: "Partner exposure reporting" },
  { value: "AI", label: "Sponsor assistant and report drafts" },
  { value: "360", label: "Race weekend content pipeline" },
  { value: "AA", label: "Accessible premium interface" }
];

const mediaAssets = [
  "Biography",
  "Fact sheet",
  "Logo pack",
  "Results archive",
  "Press releases",
  "Downloadable media"
];

function Icon({ id }: { id: string }) {
  return (
    <svg className="icon" aria-hidden="true">
      <use href={`/icons/motorsport-icon-sprite.svg#${id}`} />
    </svg>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand-link" href="#top" aria-label="Adam Ellahi home">
        <img src="/brand/logo-mobile-compact.svg" alt="" />
        <span>Adam Ellahi</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#journey">Journey</a>
        <a href="#sponsors">Sponsors</a>
        <a href="#mission-control">Mission Control</a>
        <a href="#media">Media</a>
      </nav>
      <a className="header-cta" href="#contact" style={{ color: "#00D980" }}>
        Partner
      </a>
    </header>
  );
}

function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Adam Ellahi",
    url: "https://adamellahi.com",
    jobTitle: "Racing driver",
    brand: {
      "@type": "Brand",
      name: "Adam Ellahi Racing"
    },
    sameAs: [],
    description:
      "Adam Ellahi is building a premium motorsport digital ecosystem for racing, sponsors, fans, media, and commercial partners."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <style jsx global>{`
        html, body, #__next { height: 100%; margin: 0; }
        body { background: #13161A; color: #fff; font-family: 'Inter Variable', sans-serif; font-weight: 510; letter-spacing: -1.056px; font-feature-settings: "cv01" 1, "ss03" 1, "tnum" 1; }
        a { color: #00D980; text-decoration: none; }
        .button-primary { background: #00D980; color: #000; border: none; padding: 0.6rem 1.2rem; border-radius: 4px; }
        .button-secondary { background: transparent; border: 1px solid #00D980; color: #00D980; padding: 0.6rem 1.2rem; border-radius: 4px; }
        .hero-section { padding: 4rem 2rem; text-align: center; }
        .hero-section h1 { color: #00D980; }
      `}</style>
      <StructuredData />
      <Header />
      <main id="top">
        <section className="hero-section">
          <div className="hero-visual" aria-hidden="true">
            <div className="track-line track-line-one" />
            <div className="track-line track-line-two" />
            <div className="telemetry telemetry-one" />
            <div className="telemetry telemetry-two" />
          </div>
          <div className="hero-content">
            <p className="eyebrow">Project F1 Digital Ecosystem</p>
            <h1>Adam Ellahi</h1>
            <p className="hero-copy">
              A premium motorsport platform built around precision, progress, and proof:
              the racing journey, sponsor value, media access, and the intelligence layer
              behind a future professional driver.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button-primary" href="#sponsors">
                Partner With Adam
              </a>
              <a className="button-secondary" href="#journey">
                Explore The Journey
              </a>
            </div>
          </div>
        </section>

        <section className="status-section" aria-label="Platform status">
          <div className="status-panel">
            {stats.map((stat) => (
              <article className="metric-card" key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
                <p>{stat.note}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Remaining sections unchanged for brevity */}
        <section className="section proof-section" aria-labelledby="proof-title">
          <div className="section-heading">
            <p className="eyebrow">Why Now</p>
            <h2 id="proof-title">Built to make the opportunity obvious.</h2>
          </div>
          <div className="proof-grid">
            {proofPoints.map((point, index) => (
              <article className="proof-item" key={point}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{point}</p>
              </article>
            ))}
          </div>
        </section>
        {/* Other sections (journey, sponsors, mission-control, media, contact) remain as originally defined */}
        {/* ... */}
      </main>
    </>
  );
}
