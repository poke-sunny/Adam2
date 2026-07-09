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
      <a className="header-cta" href="#contact">
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
              <a className="button button-primary" href="#sponsors">
                Partner With Adam
              </a>
              <a className="button button-secondary" href="#journey">
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

        <section className="section journey-section" id="journey" aria-labelledby="journey-title">
          <div className="section-heading compact">
            <p className="eyebrow">Journey System</p>
            <h2 id="journey-title">From identity to operating platform.</h2>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-item" key={item.phase}>
                <span>{item.phase}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section sponsor-section" id="sponsors" aria-labelledby="sponsor-title">
          <div className="split-layout">
            <div className="section-heading compact">
              <p className="eyebrow">Sponsor Value</p>
              <h2 id="sponsor-title">A partner experience that measures the story.</h2>
              <p>
                The platform is designed to show sponsors what is happening, why it
                matters, where the audience is growing, and what action should happen next.
              </p>
              <a className="button button-primary" href="#contact">
                Start Partnership Conversation
              </a>
            </div>
            <div className="sponsor-grid" aria-label="Sponsor platform capabilities">
              {sponsorMetrics.map((metric) => (
                <article className="sponsor-card" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section mission-section" id="mission-control" aria-labelledby="mission-title">
          <div className="section-heading">
            <p className="eyebrow">Mission Control</p>
            <h2 id="mission-title">The command layer for performance, media, and commercial growth.</h2>
          </div>
          <div className="dashboard-preview" aria-label="Mission Control preview">
            <div className="dashboard-topline">
              <span>Live platform overview</span>
              <span>2026 build path</span>
            </div>
            <div className="dashboard-grid">
              <article>
                <Icon id="ae-icon-stopwatch" />
                <span>Next race</span>
                <strong>TBC</strong>
              </article>
              <article>
                <Icon id="ae-icon-sponsor" />
                <span>Sponsor ROI</span>
                <strong>Ready</strong>
              </article>
              <article>
                <Icon id="ae-icon-analytics" />
                <span>Audience</span>
                <strong>Tracked</strong>
              </article>
              <article>
                <Icon id="ae-icon-ai" />
                <span>AI insights</span>
                <strong>Planned</strong>
              </article>
            </div>
            <div className="chart-panel">
              <div className="chart-axis" />
              <div className="chart-line" />
              <div className="chart-bars">
                <span style={{ height: "38%" }} />
                <span style={{ height: "62%" }} />
                <span style={{ height: "52%" }} />
                <span style={{ height: "80%" }} />
                <span style={{ height: "68%" }} />
                <span style={{ height: "90%" }} />
              </div>
            </div>
          </div>
        </section>

        <section className="section media-section" id="media" aria-labelledby="media-title">
          <div className="section-heading compact">
            <p className="eyebrow">Media Centre</p>
            <h2 id="media-title">Press-ready by design.</h2>
            <p>
              Journalists, sponsors, and partners need assets quickly. The media centre
              is structured for facts, downloads, race context, and citation-ready pages.
            </p>
          </div>
          <div className="media-list">
            {mediaAssets.map((asset) => (
              <article className="media-item" key={asset}>
                <Icon id="ae-icon-document" />
                <span>{asset}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">Partner Access</p>
            <h2 id="contact-title">Build early. Measure properly. Move before the field notices.</h2>
          </div>
          <a className="button button-primary" href="mailto:partners@adamellahi.com">
            partners@adamellahi.com
          </a>
        </section>
      </main>
    </>
  );
}
