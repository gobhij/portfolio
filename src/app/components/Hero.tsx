export default function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <p className="eyebrow">
          QUALITY ENGINEERING FOR A BETTER TOMORROW
        </p>

        <h1>
          Senior SDET /
          <br />
          <span>Automation Architect</span>
        </h1>

        <h2>
          Building reliable software through
          <br />
          Quality Engineering
        </h2>

        <p className="hero-description">
          9+ years of experience in Playwright, TypeScript,
          API automation, CI/CD and AI-assisted testing.
          I design and build scalable automation frameworks,
          tools and QA platforms that help teams ship
          better software, faster.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="primary-button">
            <span>↗</span>
            View My Work
          </a>

          <a href="/resume.pdf" className="secondary-button">
            <span>↓</span>
            Download Resume
          </a>

        </div>

        <div className="tech-badges">

          <div className="tech-badge">
            <span className="tech-icon">◉</span>
            Playwright
          </div>

          <div className="tech-badge">
            <span className="tech-icon">TS</span>
            TypeScript
          </div>

          <div className="tech-badge">
            <span className="tech-icon">☁</span>
            API Testing
          </div>

          <div className="tech-badge">
            <span className="tech-icon">⑂</span>
            CI/CD
          </div>

          <div className="tech-badge">
            <span className="tech-icon">✦</span>
            AI Testing
          </div>

        </div>

        <div className="remote-status">

          <span className="status-dot"></span>

          <div>
            <strong>Open to Remote Opportunities</strong>
            <span>India / Global</span>
          </div>

        </div>

      </div>

      <div className="hero-visual">

        <div className="automation-card">

          <div className="card-title">
            AUTOMATION
          </div>

          <div className="stat-row">

            <div className="stat-icon">
              ◫
            </div>

            <div>
              <strong>9+</strong>
              <span>Years Experience</span>
            </div>

          </div>

          <div className="stat-row">

            <div className="stat-icon">
              ▶
            </div>

            <div>
              <strong>Playwright</strong>
              <span>Core Automation Tool</span>
            </div>

          </div>

          <div className="stat-row">

            <div className="stat-icon">
              ↗
            </div>

            <div>
              <strong>60%</strong>
              <span>Faster Regression Cycles</span>
            </div>

          </div>

          <div className="card-divider"></div>

          <p className="quote">
            “Automation is not just about testing,
            it&apos;s about enabling confidence.”
          </p>

        </div>

        <div className="automation-illustration">

          <div className="floating-icon icon-ts">
            TS
          </div>

          <div className="floating-icon icon-cloud">
            ☁
          </div>

          <div className="floating-icon icon-github">
            ◉
          </div>

          <div className="floating-icon icon-db">
            ▤
          </div>

          <div className="profile-card">
            <img src="/photo.jpg" alt="Gobhi portrait" className="profile-image" />
          </div>

        </div>

      </div>

    </section>
  );
}