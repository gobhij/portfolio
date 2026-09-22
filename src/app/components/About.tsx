export default function About() {
  return (
    <section id="about" className="section about-section">

      <div className="section-heading">
        <p className="section-eyebrow">
          ABOUT ME
        </p>

        <h2>
          Engineering quality into
          <span> every release.</span>
        </h2>
      </div>

      <div className="about-grid">

        <div className="about-text">

          <p>
            I&apos;m a Senior SDET and Automation Architect with
            9+ years of experience in software quality engineering,
            test automation and framework development.
          </p>

          <p>
            My focus is building scalable automation solutions
            that go beyond UI test scripts. I work across UI,
            API, database and CI/CD layers to create reliable
            end-to-end quality systems.
          </p>

          <p>
            I&apos;m particularly interested in modernizing QA with
            Playwright, TypeScript, AI-assisted testing and
            agent-driven workflows such as Playwright MCP.
          </p>

        </div>

        <div className="about-highlights">

          <div className="highlight-card">
            <span className="highlight-number">9+</span>
            <span className="highlight-label">
              Years in QA & Automation
            </span>
          </div>

          <div className="highlight-card">
            <span className="highlight-number">UI + API</span>
            <span className="highlight-label">
              End-to-End Automation
            </span>
          </div>

          <div className="highlight-card">
            <span className="highlight-number">CI/CD</span>
            <span className="highlight-label">
              Continuous Quality
            </span>
          </div>

          <div className="highlight-card">
            <span className="highlight-number">AI</span>
            <span className="highlight-label">
              Modern QA Engineering
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}