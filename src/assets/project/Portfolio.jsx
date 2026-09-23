import { useState } from "react";
import heroImage from "../hero.png";

function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  function changeTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? "dark container" : "light container"}>
      <nav className="navbar">
        <div className="logo">FAIZAN.</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="theme-btn" onClick={changeTheme}>
          {darkMode ? "☀ Light" : "☾ Dark"}
        </button>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-tag">AI & ML • WEB DEVELOPMENT • GENAI</p>

          <h1>
            Hi, I'm
            <br />
            Md Faizan Alam
          </h1>

          <h2>B.Tech AI & ML Student</h2>

          <p className="hero-text">
            I build web applications and explore AI-powered solutions using
            React.js, Python, Generative AI, LLMs and modern development tools.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src={heroImage}
            alt="Md Faizan Alam Portfolio"
            className="hero-image"
          />
        </div>
      </section>

      <section className="section" id="about">
        <p className="section-label">ABOUT ME</p>
        <h2>Building with curiosity and learning by doing.</h2>

        <p className="section-text">
          I am a B.Tech AI & ML student at Narula Institute of Technology with
          an interest in web development, Artificial Intelligence and
          Generative AI. I enjoy building practical projects and learning how
          modern AI applications work.
        </p>

        <p className="section-text">
          My current focus includes React.js, JavaScript, Python, APIs,
          Generative AI, Large Language Models, RAG and AI application
          development.
        </p>
      </section>

      <section className="section" id="skills">
        <p className="section-label">SKILLS</p>
        <h2>Technologies I work with.</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Web Development</h3>
            <p>HTML • CSS • JavaScript • React.js</p>
          </div>

          <div className="skill-card">
            <h3>Programming</h3>
            <p>Python • JavaScript • C</p>
          </div>

          <div className="skill-card">
            <h3>Generative AI</h3>
            <p>LLMs • RAG • LangChain • Prompt Engineering</p>
          </div>

          <div className="skill-card">
            <h3>AI Application Development</h3>
            <p>Embeddings • Semantic Search • Vector Databases • APIs</p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git • GitHub • VS Code • Vite</p>
          </div>

          <div className="skill-card">
            <h3>Currently Learning</h3>
            <p>DSA • Full-Stack Development • Backend Development</p>
          </div>
        </div>
      </section>

      <section className="section" id="ai">
        <p className="section-label">AI & GENAI</p>
        <h2>Exploring modern AI application development.</h2>

        <div className="ai-grid">
          <div className="ai-card">
            <span>01</span>
            <h3>Generative AI</h3>
            <p>
              Exploring Large Language Models and building applications that
              use AI-generated responses.
            </p>
          </div>

          <div className="ai-card">
            <span>02</span>
            <h3>RAG</h3>
            <p>
              Working with document retrieval, embeddings, semantic search and
              context-aware LLM responses.
            </p>
          </div>

          <div className="ai-card">
            <span>03</span>
            <h3>Agentic AI</h3>
            <p>
              Exploring Agentic AI concepts and modern AI-powered application
              workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="education">
        <p className="section-label">EDUCATION</p>
        <h2>Academic journey.</h2>

        <div className="education-card">
          <div>
            <p className="education-year">2024 — PRESENT</p>
            <h3>B.Tech in Artificial Intelligence & Machine Learning</h3>
            <p>Narula Institute of Technology</p>
            <p>Affiliated to MAKAUT</p>
          </div>

          <div className="education-status">
            <span>Currently Pursuing</span>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <p className="section-label">PROJECTS</p>
        <h2>Things I have built.</h2>

        <div className="projects-grid">
          <div className="project-card featured-project">
            <p className="project-number">01</p>

            <h3>GRU PDF Assistant</h3>

            <h4>RAG-Powered AI Research Assistant</h4>

            <p>
              An AI research assistant that allows users to ask questions about
              PDF documents and receive context-aware answers.
            </p>

            <div className="pipeline">
              <span>PDF</span>
              <b>→</b>
              <span>Chunks</span>
              <b>→</b>
              <span>Embeddings</span>
              <b>→</b>
              <span>Vector DB</span>
              <b>→</b>
              <span>LLM</span>
            </div>

            <div className="project-tech">
              <span>Python</span>
              <span>React.js</span>
              <span>LangChain</span>
              <span>RAG</span>
              <span>LLMs</span>
              <span>ChromaDB</span>
            </div>
          </div>

          <div className="project-card">
            <p className="project-number">02</p>

            <h3>Personal Portfolio</h3>

            <h4>React.js Portfolio Website</h4>

            <p>
              A responsive personal portfolio website showcasing my skills,
              projects, education and interest in AI and web development.
            </p>

            <div className="project-tech">
              <span>React.js</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Vite</span>
            </div>
          </div>

          <div className="project-card">
            <p className="project-number">03</p>

            <h3>Student Registration Form</h3>

            <h4>Beginner Web Development Project</h4>

            <p>
              A beginner-friendly project created while learning HTML, CSS and
              JavaScript fundamentals.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="certifications">
        <p className="section-label">CERTIFICATIONS</p>
        <h2>Learning beyond the classroom.</h2>

        <div className="cert-grid">
          <div className="cert-card">
            <p>01</p>
            <h3>NPTEL — Principles of Management</h3>
            <span>Elite Certificate • 2026</span>
          </div>

          <div className="cert-card">
            <p>02</p>
            <h3>Prompt Engineering</h3>
            <span>Certificate of Completion • 2026</span>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-label">CONTACT</p>

        <h2>Let's build something interesting.</h2>

        <p>
          I am open to learning, collaborating on projects and connecting with
          developers and AI enthusiasts.
        </p>

        <a href="mailto:your-email@example.com" className="primary-btn">
          Get In Touch
        </a>
      </section>

      <footer>
        <p>© 2026 Md Faizan Alam</p>
        <p>B.Tech AI & ML Student</p>
      </footer>
    </div>
  );
}

export default Portfolio;