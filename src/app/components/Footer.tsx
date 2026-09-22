export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-inner">

        <div>
          <strong>
            GOBHI<span> J</span>
          </strong>

          <p>
            Senior SDET / Automation Architect
          </p>
        </div>

        <div className="footer-links">

          <a href="#home">
            Home
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Gobhi J. Built with
          Next.js & TypeScript.
        </p>

      </div>

    </footer>
  );
}