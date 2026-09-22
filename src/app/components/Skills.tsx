const skillGroups = [
  {
    title: "Automation",
    skills: [
      "Playwright",
      "Selenium WebDriver",
      "Rest Assured",
      "Postman",
    ],
  },
  {
    title: "Languages",
    skills: [
      "TypeScript",
      "Java",
      "JavaScript",
      "SQL",
      "Node.js",
    ],
  },
  {
    title: "Quality Engineering",
    skills: [
      "UI Testing",
      "API Testing",
      "E2E Testing",
      "Integration Testing",
      "Regression",
      "Database Testing",
    ],
  },
  {
    title: "DevOps & CI/CD",
    skills: [
      "GitHub Actions",
      "Jenkins",
      "Git",
      "CI/CD Pipelines",
      "Parallel Execution",
    ],
  },
  {
    title: "Frontend & Platforms",
    skills: [
      "React",
      "Next.js",
      "Test Dashboards",
      "Test Management",
    ],
  },
  {
    title: "AI & Modern QA",
    skills: [
      "Playwright MCP",
      "AI Agents",
      "AI-Assisted Testing",
      "Prompt Engineering",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">

      <div className="section-heading">
        <p className="section-eyebrow">
          TECHNICAL STACK
        </p>

        <h2>
          Tools I use to
          <span> build quality.</span>
        </h2>
      </div>

      <div className="skills-grid">

        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>

            <h3>
              {group.title}
            </h3>

            <div className="skill-list">

              {group.skills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}