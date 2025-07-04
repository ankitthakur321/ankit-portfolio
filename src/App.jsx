import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Odoo ERP Customization",
      description: "Customized core Odoo apps including Website, Sales, E-commerce, Surveys, E-learning, Purchase, Invoicing, Inventory, and Contacts",
      tech: ["Python", "Odoo", "PostgreSQL", "JavaScript", "XML"],
      github: "https://github.com/ankit-kumar64",
      live: "#"
    },
    {
      title: "Affiliate Marketing Solutions",
      description: "Worked on Affiliate Management, Multi-Level Marketing and Two-Tier Marketing apps with commission structures and referral tracking",
      tech: ["Python", "Odoo", "PostgreSQL", "API Integration"],
      github: "https://github.com/ankit-kumar64",
      live: "#"
    },
    {
      title: "Database Backup Solutions",
      description: "Implemented automated backup solutions with AWS S3, OneDrive, and remote server integrations",
      tech: ["Python", "AWS S3", "Microsoft Graph API", "Odoo"],
      github: "https://github.com/ankit-kumar64",
      live: "#"
    },
    {
      title: "SaaS Kit Implementation",
      description: "Customized Odoo SaaS Kit for creating scalable SaaS instances with predefined and custom apps",
      tech: ["Python", "Odoo", "SaaS", "Cloud Integration"],
      github: "https://github.com/ankit-kumar64",
      live: "#"
    }
  ];

  const skills = [
    "Python", "JavaScript", "XML", "HTML", "CSS", "PostgreSQL", 
    "Odoo", "Git", "Docker", "AWS S3", "Microsoft Graph API", "Linux", "Nginx"
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          <span className="navbar-brand fw-bold">Ankit Kumar</span>
          <button className="navbar-toggler" type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><button className="btn nav-link" onClick={() => scrollToSection('about')}>About</button></li>
              <li className="nav-item"><button className="btn nav-link" onClick={() => scrollToSection('experience')}>Experience</button></li>
              <li className="nav-item"><button className="btn nav-link" onClick={() => scrollToSection('projects')}>Projects</button></li>
              <li className="nav-item"><button className="btn nav-link" onClick={() => scrollToSection('skills')}>Skills</button></li>
              <li className="nav-item"><button className="btn nav-link" onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-white text-center py-5 mt-5" style={{ background: 'linear-gradient(to right, #2563eb, #7c3aed)' }}>
        <div className="container">
          <div className="rounded-circle bg-white text-primary fw-bold d-flex justify-content-center align-items-center mx-auto mb-4" style={{ width: '128px', height: '128px', fontSize: '2rem' }}>
            AK
          </div>
          <h1 className="display-4 fw-bold">Hi, I'm Ankit Kumar</h1>
          <p className="lead mb-4">Software Engineer & Odoo ERP Developer</p>
          <div>
            <a href="#contact" className="btn btn-light text-primary me-2">Get In Touch</a>
            <a href="#projects" className="btn btn-outline-light">View Projects</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">About Me</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>
                I'm a passionate Software Engineer with over 2 years of experience in developing,
                customizing, and implementing Odoo ERP solutions. Proficient in Python, PostgreSQL,
                and JavaScript, with a strong background in Odoo core app customization, affiliate
                marketing solutions, SaaS development, and cloud-based database management.
              </p>
              <p>
                Currently working at Webkul Software Pvt. Ltd., I focus on building efficient,
                scalable, and user-friendly ERP solutions tailored to business needs. I have
                experience with Odoo versions 15-18 and specialize in API integrations,
                report customization, and cloud solutions.
              </p>
              <div className="d-flex gap-3">
                <a href="https://github.com/ankit-kumar64" className="text-dark"><Github /></a>
                <a href="https://linkedin.com/in/ankit-kumar64" className="text-dark"><Linkedin /></a>
                <a href="mailto:tankit5210@gmail.com" className="text-dark"><Mail /></a>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div>
                <img
                  src="/src/assets/ankit-about.jpg" // Replace this with the correct image path
                  alt="Ankit Kumar"
                  className="w-50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */ }
      <section id="experience" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 fs-2">Work Experience</h2>
          <div className="mx-auto" style={ { maxWidth: "900px" } }>
            <div className="bg-light rounded p-4 mb-4 shadow-sm">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3">
                <div>
                  <h3 className="h5 fw-semibold mb-1">Software Engineer (Odoo)</h3>
                  <h4 className="h6 text-primary mb-0">Webkul Software Pvt. Ltd.</h4>
                </div>
                <div className="mt-2 mt-md-0">
                  <span className="badge bg-primary bg-opacity-10 text-primary">Feb 2023 - Present</span>
                </div>
              </div>
              <ul className="list-unstyled lh-lg">
                <li>• Customized core Odoo apps: Website, Sales, E-commerce, Surveys, E-learning, Purchase, Invoicing, Inventory, Contacts</li>
                <li>• Enhanced Odoo Website & E-commerce UI/UX, integrated custom workflows</li>
                <li>• Implemented sales & purchase automation for faster processing</li>
                <li>• Developed custom survey and e-learning features for engagement</li>
                <li>• Worked on Affiliate MLM and Two-Tier Marketing apps with referral tracking functionality</li>
                <li>• Deployed secure backup solutions to AWS S3, OneDrive, remote servers</li>
                <li>• Implemented SaaS Kit enhancements for scalable Odoo instances</li>
                <li>• Integrated Microsoft Graph API & AWS S3 for cloud storage</li>
              </ul>
            </div>

            {/* Education Section */ }
            <div className="bg-body-tertiary rounded p-4 shadow-sm">
              <h3 className="h5 fw-semibold mb-4">Education</h3>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="bg-white rounded p-3 shadow-sm h-100">
                    <h4 className="h6 fw-semibold mb-1">Master in Computer Applications</h4>
                    <p className="text-primary mb-1">Lovely Professional University</p>
                    <p className="mb-1 text-muted">2021 - 2023</p>
                    <p className="mb-0 fw-medium text-secondary">CGPA: 8.74</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-white rounded p-3 shadow-sm h-100">
                    <h4 className="h6 fw-semibold mb-1">Bachelor in Computer Applications</h4>
                    <p className="text-primary mb-1">Aryabhatta Knowledge University</p>
                    <p className="mb-1 text-muted">2018 - 2021</p>
                    <p className="mb-0 fw-medium text-secondary">CGPA: 8.73</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */ }
      <section id="projects" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 fs-2">Featured Projects</h2>
          <div className="row g-4">
            { projects.map((project, index) => (
              <div key={ index } className="col-md-6 col-lg-4">
                <div className="bg-light rounded p-4 h-100 shadow-sm">
                  <h3 className="h5 fw-semibold mb-2">{ project.title }</h3>
                  <p className="text-muted mb-3">{ project.description }</p>
                  <div className="mb-3 d-flex flex-wrap gap-2">
                    { project.tech.map((tech, techIndex) => (
                      <span
                        key={ techIndex }
                        className="badge bg-primary bg-opacity-10 text-primary fw-medium"
                      >
                        { tech }
                      </span>
                    )) }
                  </div>
                  <div className="d-flex gap-3">
                    <a href={ project.github } className="text-secondary" target="_blank" rel="noreferrer">
                      <Github size={ 20 } />
                    </a>
                    <a href={ project.live } className="text-secondary" target="_blank" rel="noreferrer">
                      <ExternalLink size={ 20 } />
                    </a>
                  </div>
                </div>
              </div>
            )) }
          </div>
        </div>
      </section>

      {/* Skills Section */ }
      <section id="skills" className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-5 fs-2">Skills & Technologies</h2>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            { skills.map((skill, index) => (
              <span
                key={ index }
                className="border px-3 py-2 rounded text-secondary fw-medium"
              >
                { skill }
              </span>
            )) }
          </div>
        </div>
      </section>

      {/* Contact Section */ }
      <section id="contact" className="py-5 bg-dark text-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-4 fs-2">Let's Work Together</h2>
          <p className="fs-5 mb-4 text-opacity-75">
            I'm always interested in hearing about new opportunities and interesting projects.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a
              href="mailto:tankit5210@gmail.com"
              className="btn btn-primary px-4 py-2 fw-semibold"
            >
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/ankit-kumar64"
              className="btn btn-outline-light px-4 py-2 fw-semibold"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */ }
      <footer className="bg-black text-white py-4 text-center">
        <div className="container">
          <p className="mb-0">&copy; 2025 Ankit Kumar. All rights reserved.</p>
        </div>
      </footer>



    </div>
  );
};

export default App;
