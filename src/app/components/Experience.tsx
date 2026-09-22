const experiences = [
  {
    company: "Synechron",
    role: "Senior QA Automation Engineer / SDET",
    period: "Current",
    description:
      "Designing and developing scalable automation solutions across UI, API and data layers with a strong focus on Playwright, TypeScript, CI/CD and quality engineering.",
    technologies: [
      "Playwright",
      "TypeScript",
      "API Testing",
      "GitHub Actions",
      "SQL",
      "AI Testing",
    ],
  },
  {
    company: "QAPITOL QA",
    role: "QA Automation Engineer",
    period: "2020 – 2022",
    description:
      "Developed and maintained enterprise automation frameworks using Selenium and Java, with focus on UI automation, API testing, regression and framework reliability.",
    technologies: [
      "Selenium",
      "Java",
      "Rest Assured",
      "API Testing",
      "SQL",
    ],
  },
  {
    company: "Capgemini",
    role: "QA / Automation Engineer",
    period: "2017 – 2019",
    description:
      "Worked on enterprise software testing and automation, contributing to functional, regression and integration testing activities.",
    technologies: [
      "Selenium",
      "Java",
      "Test Automation",
      "Regression Testing",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">

      <div className="section-heading">
        <p className="section-eyebrow">
          EXPERIENCE
        </p>

        <h2>
          From test automation to
          <span> quality engineering.</span>
        </h2>
      </div>

      <div className="timeline">

        {experiences.map((experience, index) => (
          <div className="timeline-item" key={experience.company}>

            <div className="timeline-marker">
              <span>{index + 1}</span>
            </div>

            <div className="experience-card">

              <div className="experience-header">

                <div>
                  <p className="experience-company">
                    {experience.company}
                  </p>

                  <h3>
                    {experience.role}
                  </h3>
                </div>

                <span className="experience-period">
                  {experience.period}
                </span>

              </div>

              <p className="experience-description">
                {experience.description}
              </p>

              <div className="experience-tags">
                {experience.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}