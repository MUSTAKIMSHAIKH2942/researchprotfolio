import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from './data/portfolio';

function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="section-heading">
      <p className="section-label">
        {subtitle || 'Portfolio Section'}
      </p>

      <h2 className="section-title">
        {title}
      </h2>
    </div>
  );
}

function SkillTag({
  label,
}: {
  label: string;
}) {
  return (
    <span className="skill-tag">
      {label}
    </span>
  );
}

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

function App() {
  const [selectedDocument, setSelectedDocument] =
    useState(
      portfolioData.documents[0]
    );

  const initials = portfolioData.name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <>
      {/* BACKGROUND */}

      <div className="background-bubbles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="app-shell">
        {/* HEADER */}

        <motion.header
          className="site-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="header-inner">
            <div>
              <p className="eyebrow">
                Professional Portfolio
              </p>

              <h1 className="site-title">
                {portfolioData.name}
              </h1>

              <p className="hero-subtitle">
                {portfolioData.headline}
              </p>
            </div>

            <nav className="site-nav">
              <a href="#about">
                About
              </a>

              <a href="#projects">
                Projects
              </a>

              <a href="#experience">
                Experience
              </a>

              <a href="#education">
                Education
              </a>

              <a href="#documents">
                Documents
              </a>

              <a
                href="/resume"
                target="_blank"
                rel="noreferrer"
                className="resume-nav-btn"
              >
                Resume
              </a>
            </nav>
          </div>
        </motion.header>

        {/* HERO */}

        <section className="hero-section">
          {/* LEFT PANEL */}

          <motion.aside
            className="profile-panel"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
          >
            
<div
  className="avatar"
  style={{
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '3px solid rgba(255,255,255,0.08)',
    background: '#111827',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '12px', // move slightly down
  }}
>
  <img
    src={portfolioData.profilePicture}
    alt={portfolioData.name}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }}
  />
</div>





            <h2 className="profile-name">
              {portfolioData.name}
            </h2>

            <p className="profile-role">
              {portfolioData.primaryFocus}
            </p>

            <p className="profile-bio">
              {portfolioData.aboutShort}
            </p>

            <div className="profile-links">
              <a
                href={`mailto:${portfolioData.email}`}
              >
                {portfolioData.email}
              </a>

              <a
                href={
                  portfolioData.linkedin
                }
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <span>
                {portfolioData.location}
              </span>
            </div>
          </motion.aside>

          {/* RIGHT CONTENT */}

          <motion.div
            id="about"
            className="hero-content"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.9,
            }}
          >
            <p className="section-label">
              Neuropharmacology •
              Preclinical Research • CNS
              Therapeutics
            </p>

            <h1>
              Focused on
              neuropharmacology,
              preclinical pharmacology,
              and translational CNS drug
              research.
            </h1>

           
            

           <motion.div
  className="about-card"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
>
  <p>
    I’m a Pharmacologist and Biomedical Research Enthusiast driven by a strong
    passion for neuroscience, stroke therapeutics, and next-generation
    healthcare innovation. My work focuses on integrating pharmacology,
    nanomedicine, biomedical engineering, and AI-driven approaches to develop
    impactful solutions for neurological disorders and targeted therapy systems.
  </p>

  <p>
    Currently, I am working on a research project focused on
    <strong> self-propelled micromotors for ischemic stroke therapy</strong>,
    designed to enhance targeted thrombus removal and improve the precision of
    stroke treatment. This research reflects my deep interest in translational
    medicine, advanced drug delivery systems, and innovative biomedical
    technologies that can transform patient care.
  </p>

  <p>
    I enjoy working on ideas that bridge scientific research with real-world
    healthcare applications and actively seek opportunities to contribute
    through research, innovation, consultancy, and collaborative scientific
    communities. My goal is to contribute to meaningful advancements in
    biomedical science and help build technologies that improve healthcare
    outcomes globally.
  </p>

  <p>
    Passionate about continuous learning and innovation, I aspire to be part of
    communities and organizations shaping the future of medicine through
    science, technology, and impactful research.
  </p>

  <div className="chip-grid about-tags">
    <SkillTag label="Neuropharmacology" />
    <SkillTag label="Preclinical Research" />
    <SkillTag label="Neuroinflammation" />
    <SkillTag label="CNS Drug Development" />
    <SkillTag label="Drug Evaluation" />
    <SkillTag label="GraphPad Prism" />
    <SkillTag label="Pharmacology" />
  </div>
</motion.div>

            {/* HERO BUTTONS */}

            <div className="hero-actions">
              <a
                href="#projects"
                className="btn-primary"
              >
                View Research
              </a>

              <a
                href={
                  portfolioData.linkedin
                }
                className="btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                Connect
              </a>
            </div>
          </motion.div>
        </section>

        {/* PROJECTS */}

        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            staggerChildren: 0.12,
          }}
        >
          <SectionHeading
            title="Research Projects"
            subtitle="Projects"
          />

          <div className="project-grid">
            {portfolioData.researchProjects.map(
              (project) => (
                <motion.article
                  key={project.title}
                  className="project-item"
                  variants={fadeUp}
                >
                  <div className="project-top">
                    <div>
                      <h3>
                        {project.title}
                      </h3>

                      <p className="muted">
                        {project.focus}
                      </p>
                    </div>

                    <span className="project-duration">
                      {
                        project.duration
                      }
                    </span>
                  </div>

                  <ul className="bullet-list">
                    {project.highlights.map(
                      (highlight) => (
                        <li
                          key={
                            highlight
                          }
                        >
                          {highlight}
                        </li>
                      )
                    )}
                  </ul>

                  <div className="project-tech">
                    {project.techniques.map(
                      (
                        technique
                      ) => (
                        <SkillTag
                          key={
                            technique
                          }
                          label={
                            technique
                          }
                        />
                      )
                    )}
                  </div>
                </motion.article>
              )
            )}
          </div>
        </motion.section>

        {/* EXPERIENCE */}

        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            staggerChildren: 0.1,
          }}
        >
          <SectionHeading
            title="Experience"
            subtitle="Professional"
          />

          <div className="timeline">
            {portfolioData.experience.map(
              (item) => (
                <motion.div
                  key={item.title}
                  className="timeline-item"
                  variants={fadeUp}
                >
                  <div className="timeline-header">
                    <div>
                      <h3>
                        {item.title}
                      </h3>

                      <p className="timeline-role">
                        {
                          item.organization
                        }
                      </p>
                    </div>

                    <span className="timeline-duration">
                      {item.date}
                    </span>
                  </div>

             
                {'description' in item && item.description && (
                <p>{item.description}</p>
                )}

                </motion.div>
              )
            )}
          </div>
        </motion.section>

        {/* EDUCATION */}

        <motion.section
          id="education"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            staggerChildren: 0.1,
          }}
        >
          <SectionHeading
            title="Education"
            subtitle="Academic"
          />

          <div className="timeline">
            {portfolioData.education.map(
              (item) => (
                <motion.div
                  key={item.title}
                  className="timeline-item"
                  variants={fadeUp}
                >
                  <div className="timeline-header">
                    <div>
                      <h3>
                        {item.title}
                      </h3>

                      <p className="timeline-role">
                        {
                          item.organization
                        }
                      </p>
                    </div>

                    <span className="timeline-duration">
                      {item.period}
                    </span>
                  </div>

                  <p>
                    {item.description}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </motion.section>

        {/* DOCUMENTS */}

        <motion.section
          id="documents"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeading
            title="Documents"
            subtitle="Academic "
          />

          <div className="document-layout">
            <div className="document-list">
              {portfolioData.documents.map(
                (doc) => (
                  <button
                    key={doc.file}
                    type="button"
                    className={`document-item ${
                      selectedDocument?.file ===
                      doc.file
                        ? 'active'
                        : ''
                    }`}
                    onClick={() =>
                      setSelectedDocument(
                        doc
                      )
                    }
                  >
                    <span>
                      {doc.title}
                    </span>

                    <span>
                      View
                    </span>
                  </button>
                )
              )}
            </div>

            <div className="pdf-viewer-card">
              <div className="pdf-viewer-header">
                <div>
                  <p className="card-label">
                    Preview
                  </p>

                  <h3>
                    {
                      selectedDocument?.title
                    }
                  </h3>
                </div>

                <a
                  href={
                    selectedDocument?.file
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="pdf-download"
                >
                  Open
                </a>
              </div>

              <iframe
                className="pdf-viewer"
                title={
                  selectedDocument?.title
                }
                src={
                  selectedDocument?.file
                }
              />
            </div>
          </div>
        </motion.section>

        {/* ACHIEVEMENTS */}

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeading
            title="Achievements & Leadership"
            subtitle="Highlights"
          />

          <div className="achievement-grid">
            <div className="achievement-card">
              <p className="card-label">
                Achievements
              </p>

              <ul className="bullet-list">
                {portfolioData.achievements.map(
                  (
                    achievement
                  ) => (
                    <li
                      key={
                        achievement
                      }
                    >
                      {achievement}
                    </li>
                  )
                )}
              </ul>

              <div
                style={{
                  marginTop: '2rem',
                }}
              >
                <p className="card-label">
                  Publication
                </p>

                <p>
                  {
                    portfolioData.publication
                  }
                </p>
              </div>
            </div>

            <div className="achievement-card">
              <p className="card-label">
                Leadership
              </p>

              <ul className="bullet-list">
                {portfolioData.leadership.map(
                  (item) => (
                    <li key={item}>
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* FOOTER */}

        <footer className="site-footer">
          <p>
            ©{' '}
            {new Date().getFullYear()}{' '}
            {portfolioData.name}. All
            rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;

