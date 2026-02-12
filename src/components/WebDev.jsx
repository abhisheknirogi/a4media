export default function WebDev() {
  const projects = [
    {
      title: "Glown n' Bride",
      subtitle: "Front-end Portfolio showcase",
      description: "A high-performance real estate platform featuring dynamic filtering and optimized lead capture.",
      tech: ["React", "Vercel","CSS"],
      link: "https://www.glownbride.com"
    },
    {
      title: "Personal Portfolio v1",
      subtitle: "Creative UX Architecture",
      description: "A developer-focused showcase emphasizing smooth micro-interactions and responsive design.",
      tech: ["HTML/CSS", "JavaScript", "GitHub Pages"],
      link: "https://abhisheknirogi.github.io/nirogiabhishek-s-portfolio/"
    }
  ];

  return (
    <div className="web-engineering-container">
      {/* Intro Header */}
      <div className="dev-intro">
        <span className="dev-badge">Development Division</span>
        <h3>Redefining What Digital Excellence Means</h3>
        <p>We go beyond design, building scalable, performance-driven digital infrastructure for ambitious brands.</p>
      </div>

      {/* Case Studies Grid */}
      <div className="featured-dev-works">
        {projects.map((proj, index) => (
          <div key={index} className="dev-work-card">
            <div className="work-content">
              <span className="work-type">{proj.subtitle}</span>
              <h4>{proj.title}</h4>
              <p>{proj.description}</p>
              
              <div className="tech-pills">
                {proj.tech.map((t, i) => <span key={i} className="pill">{t}</span>)}
              </div>

              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="live-link">
                Visit Live Demo <span>↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Bar */}
      <div className="tech-trust-bar">
        <span>Web Design</span> / <span>Full-Stack Development</span> / <span>SEO Optimization</span> / <span>E-Commerce</span>
      </div>
    </div>
  );
}