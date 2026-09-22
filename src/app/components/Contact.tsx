export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-card">
        <div>
          <p className="section-eyebrow">LET&apos;S CONNECT</p>

          <h2>
            Building something
            <span> worth testing?</span>
          </h2>

          <p className="contact-description">
            I&apos;m open to remote Senior SDET, QA Automation, Automation Architect
            and Quality Engineering opportunities.
          </p>
        </div>

        <div className="contact-actions">
          <a href="mailto:gobhi28396@gmail.com" className="primary-button">
            Email Me →
          </a>

          <a href="tel:+919952286150" className="secondary-button">
            Call Me ☎
          </a>

          <a
            href="https://www.linkedin.com/in/gobhi-jagadeeshwaran-0ba10ba4"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}