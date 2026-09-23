import { useState } from "react";

function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  function changeTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? "dark container" : "light container"}>

      <nav className="navbar">
        <h2 className="logo">FAIZAN.</h2>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="theme-btn" onClick={changeTheme}>
          {darkMode ? "☀ Light" : "☾ Dark"}
        </button>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hero-tag">AI & ML • WEB DEVELOPMENT • GENAI</p>

          <h1>
            Hi, I'm <span>Md Faizan Alam</span>
          </h1>

          <h2>B.Tech AI & ML Student</h2>

          <p className="hero-text">
            I build web applications and explore AI-powered solutions using
            React.js, Python, Generative AI, LLMs and modern development tools.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="main-btn">
              View Projects
            </a>

            <a href="#contact" className="outline-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-box">
          <div className="hero-box-inner">
            <p>Currently Exploring</p>
            <h3>Generative AI</h3>
            <span>RAG • LLMs • Agentic AI</span>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>Building. Learning. Exploring.</h2>
        </div>

        <div className="about-card">
          <div>
            <h3>Who I Am</h3>

            <p>
              I am a B.Tech student specializing in Artificial Intelligence
              and Machine Learning at Narula Institute of Technology.
            </p>

            <p>
              My current focus is on web development, React.js and building
              practical AI-powered applications. I enjoy understanding how
              modern AI systems work and turning those concepts into usable
              projects.
            </p>

            <p>
              Along with software development, I am exploring Generative AI,
              Large Language Models, Retrieval-Augmented Generation and
              Agentic AI concepts.
            </p>
          </div>

          <div className="about-highlight">
            <div>
              <span>Focus</span>
              <strong>AI + Web</strong>
            </div>

            <div>
              <span>Frontend</span>
              <strong>React.js</strong>
            </div>

            <div>
              <span>AI</span>
              <strong>GenAI / LLM</strong>
            </div>

            <div>
              <span>Learning</span>
              <strong>DSA</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-heading">
          <p>TECHNICAL SKILLS</p>
          <h2>Tools & Technologies</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <span>01</span>
            <h3>Web Development</h3>
            <p>HTML • CSS • JavaScript • React.js</p>
          </div>

          <div className="skill-card">
            <span>02</span>
            <h3>Programming</h3>
            <p>Python • C • JavaScript</p>
          </div>

          <div className="skill-card">
            <span>03</span>
            <h3>Generative AI</h3>
            <p>LLMs • Prompt Engineering • RAG • GenAI</p>
          </div>

          <div className="skill-card">
            <span>04</span>
            <h3>AI Technologies</h3>
            <p>LangChain • Embeddings • Semantic Search</p>
          </div>

          <div className="skill-card">
            <span>05</span>
            <h3>AI Infrastructure</h3>
            <p>Vector Databases • APIs • Document Retrieval</p>
          </div>

          <div className="skill-card">
            <span>06</span>
            <h3>Development Tools</h3>
            <p>Git • GitHub • VS Code • Vite</p>
          </div>
        </div>
      </section>

      <section className="section ai-section">
        <div className="section-heading">
          <p>AI & GENAI</p>
          <h2>What I'm Exploring</h2>
        </div>

        <div className="ai-grid">

          <div className="ai-card">
            <div className="ai-number">01</div>
            <h3>Generative AI</h3>
            <p>
              Exploring how Large Language Models can be integrated into
              applications to generate useful, context-aware responses.
            </p>
            <div className="tags">
              <span>LLMs</span>
              <span>Prompt Engineering</span>
              <span>GenAI</span>
            </div>
          </div>

          <div className="ai-card">
            <div className="ai-number">02</div>
            <h3>Retrieval-Augmented Generation</h3>
            <p>
              Building systems that retrieve relevant information from
              documents before sending the context to an LLM for better
              grounded answers.
            </p>
            <div className="tags">
              <span>RAG</span>
              <span>Embeddings</span>
              <span>Vector DB</span>
            </div>
          </div>

          <div className="ai-card">
            <div className="ai-number">03</div>
            <h3>Agentic AI</h3>
            <p>
              Exploring Agentic AI concepts such as tool usage, reasoning,
              task planning, context handling and AI systems that can work
              through multi-step tasks.
            </p>
            <div className="tags">
              <span>Agents</span>
              <span>Tools</span>
              <span>Reasoning</span>
            </div>
          </div>

        </div>
      </section>

      <section id="education" className="section">
        <div className="section-heading">
          <p>EDUCATION</p>
          <h2>Academic Journey</h2>
        </div>

        <div className="education-card">
          <div className="education-year">2024 — PRESENT</div>

          <div>
            <h3>B.Tech in Artificial Intelligence & Machine Learning</h3>
            <p>Narula Institute of Technology</p>
            <span>Affiliated to MAKAUT</span>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-heading">
          <p>PROJECTS</p>
          <h2>Things I've Built</h2>
        </div>

        <div className="projects-grid">

          <div className="project-card featured-project">
            <div className="project-top">
              <span className="project-type">AI / GENAI</span>
              <span className="project-icon">↗</span>
            </div>

            <h3>GRU PDF Assistant</h3>

            <h4>RAG-Powered AI Research Assistant</h4>

            <p>
              An AI research assistant that allows users to upload a PDF or
              research paper and ask questions about its content. The system
              retrieves relevant document information and uses an LLM to
              generate context-aware answers.
            </p>

            <div className="project-flow">
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

            <div className="tags">
              <span>Python</span>
              <span>React.js</span>
              <span>LangChain</span>
              <span>RAG</span>
              <span>ChromaDB</span>
              <span>Gemini API</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-top">
              <span className="project-type">WEB DEVELOPMENT</span>
              <span className="project-icon">↗</span>
            </div>

            <h3>Personal Portfolio</h3>

            <h4>React-based Portfolio Website</h4>

            <p>
              A responsive personal portfolio created using React.js,
              JavaScript and CSS to showcase my skills, education, projects
              and learning journey.
            </p>

            <div className="tags">
              <span>React.js</span>
              <span>JavaScript</span>
              <span>CSS</span>
              <span>Vite</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-top">
              <span className="project-type">JAVASCRIPT</span>
              <span className="project-icon">↗</span>
            </div>

            <h3>Student Registration Form</h3>

            <h4>Frontend Practice Project</h4>

            <p>
              A beginner-friendly web project created to practice HTML, CSS
              and JavaScript form handling and user interaction.
            </p>

            <div className="tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>

        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p>CERTIFICATIONS</p>
          <h2>Learning Beyond College</h2>
        </div>

        <div className="cert-grid">

          <div className="cert-card">
            <span>NPTEL</span>
            <h3>Principles of Management</h3>
            <p>Elite Certification • 2026</p>
          </div>

          <div className="cert-card">
            <span>IALSD</span>
            <h3>Prompt Engineering</h3>
            <p>Certificate of Completion • 2026</p>
          </div>

        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="section-heading">
          <p>CONTACT</p>
          <h2>Let's Connect</h2>
        </div>

        <div className="contact-card">
          <h3>Have a project or opportunity?</h3>

          <p>
            I'm interested in web development, AI/ML, Generative AI and
            building practical software projects.
          </p>

          <a href="mailto:your-email@example.com" className="main-btn">
            Get In Touch
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Md Faizan Alam</p>
        <p>B.Tech AI & ML • Building with React & AI</p>
      </footer>

    </div>
  );
}

export default Portfolio;