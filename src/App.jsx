import React, { useEffect, useState } from "react";

const skills = [
  { title: "Programming", items: ["Python", "R", "JavaScript", "PHP"] },
  { title: "Web development", items: ["React", "HTML", "CSS", "Node.js"] },
  { title: "Data & databases", items: ["MySQL", "MongoDB", "Pandas", "Matplotlib"] },
];

const projects = [
  {
    number: "01",
    category: "FULL-STACK · MERN",
    title: "Boutique Management System",
    description:
      "A management application designed to bring customer records, product listings, orders, inventory, and billing together in one place.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    icon: "store",
  },
  {
    number: "02",
    category: "PYTHON · MANAGEMENT",
    title: "Beauty Management System",
    description:
      "A Python application concept for simplifying customer and service records, product information, orders, and day-to-day business operations.",
    tags: ["Python", "Management", "Automation"],
    icon: "sparkles",
  },
  {
    number: "03",
    category: "PYTHON · DATA ANALYSIS",
    title: "Sales Data Analysis",
    description:
      "An analysis tool that explores sales records, calculates revenue, surfaces top-selling products, and communicates trends through visualisations.",
    tags: ["Python", "Pandas", "Matplotlib"],
    icon: "chart",
  },
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="arrow-icon"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3.5 10h12m-5-5 5 5-5 5" />
      )}
    </svg>
  );
}

function ProjectIcon({ type }) {
  if (type === "store") {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48" fill="none">
        <path d="M9 21v17h30V21M7 19l4-10h26l4 10" />
        <path d="M7 19a5 5 0 0 0 10 0 5 5 0 0 0 10 0 5 5 0 0 0 10 0 5 5 0 0 0 10 0" />
        <path d="M19 38V27h10v11" />
      </svg>
    );
  }
  if (type === "sparkles") {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48" fill="none">
        <path d="m24 7 3.7 11.3L39 22l-11.3 3.7L24 37l-3.7-11.3L9 22l11.3-3.7L24 7Z" />
        <path d="m38 30 1.8 5.2L45 37l-5.2 1.8L38 44l-1.8-5.2L31 37l5.2-1.8L38 30ZM11 4l1.4 4.6L17 10l-4.6 1.4L11 16l-1.4-4.6L5 10l4.6-1.4L11 4Z" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" fill="none">
      <path d="M8 39V9M8 39h33" />
      <path d="m13 31 9-9 7 5 12-14" />
      <path d="M33 13h8v8" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;

    const revealTargets = document.querySelectorAll(
      ".intro-copy, .education-strip, .skills-heading, .skill-card, .soft-skills, .projects-heading, .project-card, .experience-card, .document-card, .contact-content, .contact-stamp",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
    );

    revealTargets.forEach((target) => {
      target.classList.add("scroll-reveal");
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Hemansi Kalsariya home">
          <span className="brand-mark">H</span>
          <span>hemansi<span className="brand-period">.</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "navigation navigation-open" : "navigation"}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a className="nav-contact" href={`${baseUrl}hemansi-kalsariya-resume.pdf`} download onClick={closeMenu}>
            Resume <ArrowIcon diagonal />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES</p>
            <p className="hero-role">ASPIRING SOFTWARE ENGINEER <span /> DATA ANALYSIS</p>
            <h1>
              Software-minded.
              <br />
              <span className="serif-accent">Data-curious.</span>
              <br />
              Problem solver.
            </h1>
            <p className="hero-description">
              Hi, I&apos;m <strong>Hemansi Kalsariya</strong> — an M.C.A. student
              aspiring to become a software engineer with a focus on data
              analysis. I enjoy building useful software and finding insights
              in data.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href={`${baseUrl}hemansi-kalsariya-resume.pdf`} download>
                Download resume <ArrowIcon />
              </a>
              <a className="button button-outline" href="#projects">
                View my work <ArrowIcon diagonal />
              </a>
            </div>
            <div className="hero-location">
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                <path d="M16 8.3c0 4.1-6 9-6 9s-6-4.9-6-9a6 6 0 1 1 12 0Z" />
                <circle cx="10" cy="8" r="2" />
              </svg>
              Surat, Gujarat, India
            </div>
          </div>
          <div className="profile-panel">
            <div className="profile-card">
              <span className="profile-tag">SOFTWARE + DATA</span>
              <span className="profile-side-note" aria-hidden="true">
                <span>CURIOUS BY DESIGN</span>
                <i />
                <b>01</b>
              </span>
              <div className="profile-frame">
                <img
                  className="profile-photo"
                  src={`${baseUrl}profile.png`}
                  alt="Hemansi Kalsariya"
                  onError={(event) => { event.currentTarget.hidden = true; }}
                />
                <div
                  className="photo-placeholder"
                  role="img"
                  aria-label="Profile photo placeholder. Replace with your photo at public/profile.png."
                >
                  <span>HK</span>
                  <div>
                    <strong>PROFILE PHOTO</strong>
                    <small>Add your picture to public/profile.png</small>
                  </div>
                </div>
              </div>
              <div className="profile-note">
                <span className="profile-note-star" aria-hidden="true">✳</span>
                <span>Learn a little.<br />Build a little.</span>
              </div>
              <div className="profile-caption">
                <span className="profile-caption-copy">
                  <strong>HEMANSI KALSARIYA</strong>
                  <span>SOFTWARE · DATA · INSIGHTS</span>
                </span>
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
            <span /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="intro-band" id="about">
          <div className="section-wrap intro-content">
            <div className="section-label"><span>01</span> A LITTLE ABOUT ME</div>
            <div className="intro-copy">
              <h2>
                Analytical by nature.
                <br />
                <span className="serif-accent">Creative</span> by choice.
              </h2>
              <div className="intro-details">
                <p>
                  I&apos;m a motivated M.C.A. student aspiring to become a
                  software engineer, with a growing interest in data analysis.
                  I enjoy turning ideas into practical applications and using
                  data to better understand problems.
                </p>
                <p>
                  With hands-on experience from my internship at Creative Web
                  Infotech and projects spanning full-stack web apps to Python
                  visualisations, I&apos;m excited to keep learning and
                  contribute to meaningful work.
                </p>
                <a className="underlined-link" href="#contact">
                  Have a project in mind? <ArrowIcon diagonal />
                </a>
              </div>
            </div>
            <div className="education-strip">
              <div>
                <span className="education-year">CURRENT · IN PROGRESS</span>
                <span className="education-degree">M.C.A.</span>
                <span className="education-school">Master of Computer Applications</span>
              </div>
              <div>
                <span className="education-year">2023</span>
                <span className="education-degree">H.S.C.</span>
                <span className="education-school">65.57%</span>
              </div>
              <div>
                <span className="education-year">2021</span>
                <span className="education-degree">S.S.C.</span>
                <span className="education-school">73.50%</span>
              </div>
              <div className="education-note">
                <span className="note-star">✳</span>
                <span>Always learning,<br />always building.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <div className="section-label"><span>02</span> WHAT I BRING</div>
          <div className="skills-heading">
            <h2>A toolkit for<br /><span className="serif-accent">what&apos;s next.</span></h2>
            <p>
              Practical skills, a thoughtful approach, and the curiosity to
              learn whatever a new challenge requires.
            </p>
          </div>
          <div className="skill-grid">
            {skills.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <span className="skill-index">0{index + 1}</span>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
          <div className="soft-skills">
            <span className="soft-skills-label">THE HUMAN SIDE</span>
            <span>Problem solving</span><i /> <span>Creativity</span><i />
            <span>Teamwork</span><i /> <span>Adaptability</span><i />
            <span>Communication</span><i /> <span>Quick learning</span>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-wrap projects-wrap">
            <div className="section-label"><span>03</span> SELECTED PROJECTS</div>
            <div className="projects-heading">
              <h2>Small steps.<br /><span className="serif-accent">Real impact.</span></h2>
              <p>
                A few of the ways I&apos;ve been learning by building —
                combining thoughtful software with a love of data.
              </p>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <span className="project-number">{project.number}</span>
                  <div className="project-art">
                    <ProjectIcon type={project.icon} />
                    <span>{project.category}</span>
                  </div>
                  <div className="project-info">
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                  <span className="project-arrow" aria-hidden="true"><ArrowIcon diagonal /></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <div className="section-label"><span>04</span> EXPERIENCE</div>
          <div className="experience-layout">
            <div className="experience-card">
              <div className="experience-date">DEC 2025 — JAN 2026</div>
              <div className="experience-main">
                <h3>Web Development Intern</h3>
                <p>Creative Web Infotech</p>
              </div>
              <div className="experience-badge">INTERNSHIP</div>
            </div>
            <div className="document-list" aria-label="Career documents">
              <a
                className="document-card"
                href={`${baseUrl}hemansi-kalsariya-resume.pdf`}
                download
              >
                <span className="document-label">CAREER DOCUMENT · PDF</span>
                <strong>Download my resume</strong>
                <span className="document-action">DOWNLOAD <ArrowIcon diagonal /></span>
              </a>
              <a
                className="document-card"
                href={`${baseUrl}creative-web-infotech-internship-certificate.pdf`}
                download
              >
                <span className="document-label">INTERNSHIP · PDF</span>
                <strong>Internship certificate</strong>
                <span className="document-action">DOWNLOAD <ArrowIcon diagonal /></span>
              </a>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-wrap">
            <div className="section-label"><span>05</span> GET IN TOUCH</div>
            <div className="contact-content">
              <p className="eyebrow">HAVE AN OPPORTUNITY OR AN IDEA?</p>
              <h2>Let&apos;s make<br /><span className="serif-accent">something matter.</span></h2>
              <p className="contact-description">
                I&apos;m ready to learn, collaborate, and take on new challenges.
                If you&apos;re looking for an enthusiastic future software
                engineer with an interest in data analysis, I&apos;d love to
                hear from you.
              </p>
              <div className="contact-actions">
                <a
                  className="button button-light"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=Hemansikalsariya16%40gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Say hello <ArrowIcon diagonal />
                </a>
                <div className="contact-details">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=Hemansikalsariya16%40gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Hemansikalsariya16@gmail.com
                  </a>
                  <a
                    href="https://wa.me/919023345822"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Chat with Hemansi on WhatsApp at +91 90233 45822"
                  >
                    +91 90233 45822
                  </a>
                  <span>Surat, Gujarat, India</span>
                </div>
              </div>
            </div>
            <div className="contact-stamp" aria-hidden="true">
              <span>LET&apos;S</span><span>CONNECT</span><span className="stamp-star">✳</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">H</span>
          <span>hemansi<span className="brand-period">.</span></span>
        </a>
        <p>Designed with curiosity in Surat, India.</p>
        <a className="footer-resume" href={`${baseUrl}hemansi-kalsariya-resume.pdf`} download>DOWNLOAD RESUME ↓</a>
        <a href="#home" className="back-to-top">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}

export default App;
