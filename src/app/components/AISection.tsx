export default function AISection() {
  return (
    <section id="ai" className="section ai-section">

      <div className="ai-container">

        <div className="ai-content">

          <p className="section-eyebrow">
            AI + QUALITY ENGINEERING
          </p>

          <h2>
            Modern QA with
            <span> AI-assisted engineering.</span>
          </h2>

          <p className="ai-description">
            I&apos;m actively exploring how generative AI,
            Playwright MCP and AI agents can improve the
            software testing lifecycle without compromising
            engineering quality or human judgment.
          </p>

          <div className="ai-points">

            <div className="ai-point">
              <div className="ai-point-number">
                01
              </div>

              <div>
                <h3>
                  Test Scenario Generation
                </h3>

                <p>
                  Use AI to analyze requirements and identify
                  functional, negative and edge-case scenarios.
                </p>
              </div>
            </div>

            <div className="ai-point">
              <div className="ai-point-number">
                02
              </div>

              <div>
                <h3>
                  Playwright MCP
                </h3>

                <p>
                  Explore agent-driven browser interaction and
                  AI-assisted automation workflows using
                  Playwright MCP.
                </p>
              </div>
            </div>

            <div className="ai-point">
              <div className="ai-point-number">
                03
              </div>

              <div>
                <h3>
                  Faster Debugging
                </h3>

                <p>
                  Combine automation evidence, logs and AI
                  assistance to accelerate root-cause analysis.
                </p>
              </div>
            </div>

          </div>

        </div>

        <div className="ai-visual">

          <div className="ai-glow"></div>

          <div className="ai-terminal">

            <div className="terminal-header">

              <div className="terminal-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>
                playwright-mcp
              </span>

            </div>

            <div className="terminal-body">

              <p>
                <span className="terminal-green">
                  $
                </span>{" "}
                analyze login workflow
              </p>

              <p className="terminal-muted">
                → Inspecting application...
              </p>

              <p className="terminal-muted">
                → Identifying user journeys...
              </p>

              <p className="terminal-blue">
                ✓ 12 test scenarios identified
              </p>

              <p className="terminal-blue">
                ✓ Edge cases generated
              </p>

              <p className="terminal-blue">
                ✓ Playwright workflow ready
              </p>

              <p>
                <span className="terminal-green">
                  $
                </span>{" "}
                _
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}