export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">

        <a href="#home" className="logo">
          <span className="logo-name">
            GOBHI<span> J</span>
          </span>

          <span className="logo-subtitle">
            SDET | QA Automation | Playwright
          </span>
        </a>

        <nav className="nav-links">
          <a href="#home" className="nav-link active">
            Home
          </a>

          <a href="#about" className="nav-link">
            About
          </a>

          <a href="#experience" className="nav-link">
            Experience
          </a>

          <a href="#projects" className="nav-link">
            Projects
          </a>

          <a href="#skills" className="nav-link">
            Skills
          </a>

          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>

        <a href="/resume.pdf" className="resume-button">
          <span className="download-icon">↓</span>
          Download Resume
        </a>

      </div>
    </header>
  );
}