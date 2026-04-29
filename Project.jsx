import { useState } from "react";

const projects = [
  {
    id: 1,
    category: "Web Application",
    title: "3D E-Commerce Store",
    description:
      "Immersive shopping experience with 3D product models, AR preview, and secure checkout.",
    features: [
      {
        label: "Interactive 3D product models",
        href: "#live-preview",
      },
      {
        label: "Augmented reality preview",
        href: "#live-preview",
      },
      {
        label: "Secure payment processing",
        href: "#github-repo",
      },
      {
        label: "Real-time inventory tracking",
        href: "#live-preview",
      },
      {
        label: "Personalized recommendations",
        href: "#github-repo",
      },
    ],
    tech: ["React", "GSAP", "WebXR", "Stripe", "Node.js"],
    image: "/project1.png",
    liveUrl: "https://example.com/live",
    githubUrl: "https://github.com/khushidandwani/project1",
  },
  {
    id: 2,
    category: "Portfolio Website",
    title: "Creative Designer Portfolio",
    description:
      "A modern portfolio landing page with animated content, strong visual hierarchy, and dark glassmorphism styling.",
    features: [
      {
        label: "Smooth animated transitions",
        href: "#live-preview",
      },
      {
        label: "Responsive mobile-first layout",
        href: "#live-preview",
      },
      {
        label: "Clean glassmorphism cards",
        href: "#github-repo",
      },
    ],
    tech: ["React", "CSS", "Framer Motion", "FontAwesome"],
    image: "/project2.png",
    liveUrl: "https://example.com/portfolio",
    githubUrl: "https://github.com/khushidandwani/project2",
  },
];

const Project = () => {
  const [index, setIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const project = projects[index];

  const changeSlide = (direction) => {
    if (isSliding) return;
    setIsSliding(true);
    setTimeout(() => {
      setIndex((prev) =>
        direction === "next"
          ? (prev + 1) % projects.length
          : prev === 0
          ? projects.length - 1
          : prev - 1
      );
      setIsSliding(false);
    }, 220);
  };

  return (
    <section className="portfolio" id="projects">
      <div className="portfolio-header">
        <div>
          <h5 className="subtitle">PORTFOLIO</h5>
          <h1>
            Featured <span>Projects</span>
          </h1>
        </div>
        <p className="desc">
          Explore my latest work showcasing clean interfaces, bold visuals, and smart interactions.
        </p>
      </div>

      <div className={`portfolio-box ${isSliding ? "slide-changing" : ""}`}>
        <div className="left image-frame">
          {project.image ? (
            <img src={project.image} alt={project.title} />
          ) : (
            <div className="project-placeholder">
              <span>Project preview coming soon</span>
            </div>
          )}

          <div className="image-overlay" />
          <button
            className="nav left-btn"
            onClick={() => changeSlide("prev")}
            aria-label="Previous project"
          >
            ‹
          </button>
          <button
            className="nav right-btn"
            onClick={() => changeSlide("next")}
            aria-label="Next project"
           >
            ›
          </button>
        </div>

        <div className="right">
          <span className="tag">{project.category}</span>
          <h2>{project.title}</h2>
          <p>{project.description}</p>

          <div className="features-group">
            <h4>KEY FEATURES</h4>
            <ul className="features-list">
              {project.features.map((feature, i) => (
                <li key={i}>
                  <a href={feature.href} target="_blank" rel="noreferrer">
                    <span>✔</span>
                    {feature.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="tech">
            {project.tech.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>

          <div className="buttons">
            <a className="live" href={project.liveUrl} target="_blank" rel="noreferrer">
              Live Preview
            </a>
            <a className="github" href={project.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;