export default function Projects() {
  return (
    <section id="projects" className="section projects-section">

      <div className="section-heading">
        <p className="section-eyebrow">
          SELECTED WORK
        </p>

        <h2>
          Things I&apos;ve
          <span> built.</span>
        </h2>

        <p className="section-description">
          Engineering solutions that improve automation,
          test visibility and release confidence.
        </p>
      </div>

      <div className="project-grid">

        <article className="project-card project-featured">

          <div className="project-top">

            <div className="project-icon">
              S
            </div>

            <span className="project-label">
              FEATURED PROJECT
            </span>

          </div>

          <h3>
            Simulacra
          </h3>

          <p className="project-subtitle">
            Enterprise Test Automation & QA Platform
          </p>

          <p className="project-description">
            A scalable test automation platform built around
            Playwright, TypeScript, Node.js and React. Designed
            to manage test cases, trigger executions, track
            results and provide actionable QA visibility.
          </p>

          <div className="project-features">

            <span>UI Automation</span>
            <span>API Testing</span>
            <span>React Dashboard</span>
            <span>Database Tracking</span>
            <span>Allure Reporting</span>
            <span>CI/CD</span>

          </div>

          <div className="project-footer">
            <span>
              Playwright + TypeScript
            </span>

            <a href="#contact">
              Discuss Project →
            </a>
          </div>

        </article>

        <article className="project-card">

          <div className="project-top">

            <div className="project-icon project-icon-blue">
              AI
            </div>

            <span className="project-label">
              AI TESTING
            </span>

          </div>

          <h3>
            AI-Assisted QA
          </h3>

          <p className="project-description">
            Exploring AI agents, Playwright MCP and
            AI-assisted workflows to accelerate test
            creation, debugging and quality engineering.
          </p>

          <div className="project-features">
            <span>Playwright MCP</span>
            <span>AI Agents</span>
            <span>Test Generation</span>
            <span>Debugging</span>
          </div>

        </article>

        <article className="project-card">

          <div className="project-top">

            <div className="project-icon project-icon-green">
              CI
            </div>

            <span className="project-label">
              ENGINEERING
            </span>

          </div>

          <h3>
            CI/CD Quality Pipeline
          </h3>

          <p className="project-description">
            Automated test execution pipelines with
            parallel execution, retries, reporting and
            continuous feedback through GitHub Actions.
          </p>

          <div className="project-features">
            <span>GitHub Actions</span>
            <span>Parallel Tests</span>
            <span>Reports</span>
            <span>Quality Gates</span>
          </div>

        </article>

      </div>

    </section>
  );
}