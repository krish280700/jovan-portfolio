// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="gradient-bg" />

      <nav className="nav">
        <div className="nav-container">
          <div className="logo">JT</div>
          <ul className="nav-links">
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
            <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
            <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
            <li><a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <section id="hero" className="hero">
        <div className="hero-content">
          <h1 className="animate-fade-in-up">Jovan Titus Joshua Maharaj</h1>
          <div className="subtitle animate-fade-in-up-delay-1">Computer Science Graduate Student</div>
          <p className="animate-fade-in-up-delay-2">Specializing in Big Data Analytics, Software Development & Data-Driven Solutions</p>
          <div className="location animate-fade-in-up-delay-3">
            <span>📍</span>
            <span>Chicago, Illinois</span>
          </div>
          <div className="cta-buttons animate-fade-in-up-delay-4">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View My Work</a>
          </div>
          <div className="scroll-indicator">
            <span>↓</span>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="glass-card about-card">
              <h3>🎯 Who I Am</h3>
              <p>As a passionate Computer Science graduate student at Illinois Institute of Technology, I specialize in software development, data analytics, and innovative problem-solving. With expertise spanning Python, SQL, and data visualization, I bring a unique blend of technical prowess and creative design thinking to every project.</p>
            </div>
            <div className="glass-card about-card">
              <h3>💡 What I Do</h3>
              <p>I craft data-driven solutions that address real-world challenges. From leading technical teams to designing engaging user experiences, I've spearheaded 5+ high-profile initiatives and organized major tech events like Scarlet Hacks 2025, Illinois Tech's largest hackathon with 200+ participants.</p>
            </div>
            <div className="glass-card about-card">
              <h3>🚀 What Drives Me</h3>
              <p>I'm driven by the intersection of technology and impact. Whether it's organizing workshops on emerging technologies like generative AI and Blockchain for 200+ students, or implementing blockchain solutions for small-scale farmers, I believe in technology's power to transform lives.</p>
            </div>
            <div className="glass-card about-card">
              <h3>🎨 Beyond Code</h3>
              <p>As a Creative Director at ACM and former photographer, I bring a designer's eye to technical challenges. This unique perspective allows me to create solutions that are not only functional but also beautiful and user-centered, increasing engagement by up to 40% in promotional campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-timeline">
            <div className="experience-item">
              <h3>Creative Director</h3>
              <div className="company">ACM (Association for Computing Machinery)</div>
              <div className="date">November 2024 – Present</div>
              <ul>
                <li>Organized Scarlet Hacks 2025, Illinois Tech's largest hackathon, leading logistics, branding, and the event website/registration portal for 200+ participants and 10+ sponsors</li>
                <li>Collaborated with the ACM development team to design and maintain chapter and event websites, increasing event-page traffic by ~30% and online registrations by ~25%</li>
                <li>Directed creative strategy for 10+ ACM events, producing posters, social media campaigns, and emails, boosting engagement on promotional posts by ~40%</li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>UI/UX Intern</h3>
              <div className="company">Qubiq Technologies PVT LTD</div>
              <div className="date">July 2023 – September 2023</div>
              <ul>
                <li>Conducted comprehensive user research with surveys and interviews, identifying 15+ key audience pain points, leading to a 20% improvement in design effectiveness</li>
                <li>Synthesized research findings to design 3 user personas, enhancing design relevance and boosting user engagement across test groups</li>
                <li>Collaborated with cross-functional teams to ensure user-centered design practices were integrated into all project phases</li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>Technical Lead</h3>
              <div className="company">TECH VAYUNA</div>
              <div className="date">January 2021 – June 2024</div>
              <ul>
                <li>Led technical and design teams to successfully execute 5+ high-impact projects, enhancing the club's portfolio and raising visibility by 30%</li>
                <li>Organized 10+ workshops on emerging technologies like generative AI and Blockchain for 200+ students across 5+ institutions</li>
                <li>Drove strong engagement among participants through visually engaging and technically robust designs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="glass-card skill-category">
              <h3>💻 Programming Languages</h3>
              <div className="skill-tags">
                {['Python', 'Java', 'C', 'C++', 'SQL', 'R', 'JavaScript', 'HTML', 'CSS'].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="glass-card skill-category">
              <h3>🛠️ Technologies & Tools</h3>
              <div className="skill-tags">
                {['AWS', 'Docker', 'Apache Spark', 'Apache Hadoop', 'React', 'Node.js', 'Django', 'GitHub', 'Postman'].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="glass-card skill-category">
              <h3>📊 Data & Analytics</h3>
              <div className="skill-tags">
                {['PowerBI', 'Tableau', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-Learn', 'MySQL', 'PostgreSQL', 'MongoDB'].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="glass-card skill-category">
              <h3>🎨 Design & Creative</h3>
              <div className="skill-tags">
                {['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Premiere Pro', 'UI/UX Design'].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Windmill Pitch Prediction using Data Analysis</h3>
              <div className="date">September 2022</div>
              <p>Developed accurate pitch angle predictions with real-time error correction to enhance wind turbine performance and energy capture efficiency through advanced data analysis methodologies.</p>
              <a href="https://ieeexplore.ieee.org/document/10433983" target="_blank" rel="noopener noreferrer" className="project-link">
                View Publication →
              </a>
            </div>

            <div className="project-card">
              <h3>Empowering Small-Scale Farmers with DeFi</h3>
              <div className="date">November 2023</div>
              <p>Implemented blockchain-based decentralized finance solution via Ethereum Smart Contracts, utilizing transparent and immutable ledger technology to enhance supply chain transparency and product traceability from farm to consumer.</p>
              <a href="https://www.researchgate.net/publication/383535482" target="_blank" rel="noopener noreferrer" className="project-link">
                View Research →
              </a>
            </div>

            <div className="project-card">
              <h3>Scarlet Hacks 2025 Platform</h3>
              <div className="date">2024 - 2025</div>
              <p>Led the development and design of Illinois Tech's largest hackathon website and registration portal, successfully managing 200+ participants and 10+ sponsors with improved user experience and responsive design.</p>
              <a href="#contact" className="project-link">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            <div className="glass-card education-card">
              <h3>Illinois Institute of Technology</h3>
              <div className="degree">Master of Science in Computer Science</div>
              <div className="date">August 2024 - Present</div>
              <div className="courses">
                <strong>Coursework:</strong> Database Organization, Data Mining, Computer Networks, Software Project Management
              </div>
            </div>

            <div className="glass-card education-card">
              <h3>SRM Institute of Science and Technology</h3>
              <div className="degree">Bachelor of Technology in Computer Science with Specialization in Big Data Analytics</div>
              <div className="date">September 2020 - June 2024 | GPA: 3.54</div>
              <div className="courses">
                <strong>Coursework:</strong> Big Data Visualization, Big Data Tools and Techniques, Deep Learning, Artificial Intelligence, Database Security and Privacy, Data Structures and Algorithms, Object Oriented Design and Programming, Software Engineering and Project Management
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <div className="contact-content">
            <p>I'm actively seeking summer internship opportunities for 2025 in software development and data analytics. Let's collaborate on cutting-edge projects!</p>
            
            <div className="contact-links">
              <a href="mailto:jjoshuamaharaj@hawk.illinoistech.edu" className="contact-link">
                <span>📧</span>
                <span>Email Me</span>
              </a>
              <a href="tel:8728995080" className="contact-link">
                <span>📱</span>
                <span>(872) 899-5080</span>
              </a>
              <a href="https://www.linkedin.com/in/jjovantitus/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span>💼</span>
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="cta-buttons" style={{ marginTop: '2rem' }}>
              <a href="mailto:jjoshuamaharaj@hawk.illinoistech.edu" className="btn btn-primary">Send a Message</a>
              <a href="https://www.linkedin.com/in/jjovantitus/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Download Resume</a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>© 2025 Jovan Titus Joshua Maharaj. Designed & Built with Next.js</p>
        </div>
      </footer>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --bg-primary: #0a0a0f;
          --bg-secondary: #131318;
          --bg-card: rgba(26, 26, 35, 0.6);
          --accent-purple: #8b5cf6;
          --accent-cyan: #06b6d4;
          --accent-pink: #ec4899;
          --text-primary: #ffffff;
          --text-secondary: #a1a1aa;
          --glass-bg: rgba(255, 255, 255, 0.05);
          --glass-border: rgba(255, 255, 255, 0.1);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: var(--bg-primary);
          color: var(--text-primary);
          line-height: 1.6;
          overflow-x: hidden;
        }

        .gradient-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background: radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
                      radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .nav {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(10, 10, 15, 0.8);
          backdrop-filter: blur(20px);
          z-index: 1000;
          border-bottom: 1px solid var(--glass-border);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 2rem;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--accent-purple), var(--accent-cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: var(--text-primary);
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-purple), var(--accent-cyan));
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding-top: 80px;
          position: relative;
        }

        .hero-content h1 {
          font-size: 4.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-content .subtitle {
          font-size: 1.8rem;
          color: var(--accent-purple);
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .hero-content p {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto 2rem;
        }

        .location {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .btn {
          padding: 1rem 2rem;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
          font-size: 1rem;
          display: inline-block;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--accent-purple), var(--accent-cyan));
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);
        }

        .btn-secondary {
          background: var(--glass-bg);
          color: var(--text-primary);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: var(--glass-border);
          transform: translateY(-3px);
        }

        .section {
          padding: 6rem 0;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, var(--text-primary), var(--accent-purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-card {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 2rem;
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }

        .glass-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-purple);
          box-shadow: 0 20px 60px rgba(139, 92, 246, 0.2);
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .about-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--accent-cyan);
        }

        .about-card p {
          color: var(--text-secondary);
          line-height: 1.8;
        }

        .experience-timeline {
          position: relative;
          padding-left: 2rem;
        }

        .experience-timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(180deg, var(--accent-purple), var(--accent-cyan));
        }

        .experience-item {
          position: relative;
          margin-bottom: 3rem;
          padding-left: 2rem;
        }

        .experience-item::before {
          content: '';
          position: absolute;
          left: -2.5rem;
          top: 0;
          width: 12px;
          height: 12px;
          background: var(--accent-purple);
          border-radius: 50%;
          border: 3px solid var(--bg-primary);
        }

        .experience-item h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .experience-item .company {
          color: var(--accent-cyan);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .experience-item .date {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .experience-item ul {
          list-style: none;
          padding-left: 0;
        }

        .experience-item li {
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          padding-left: 1.5rem;
          position: relative;
        }

        .experience-item li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--accent-purple);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .skill-category h3 {
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          color: var(--accent-pink);
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-tag {
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.3);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          color: var(--text-primary);
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          background: rgba(139, 92, 246, 0.2);
          border-color: var(--accent-purple);
          transform: translateY(-2px);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 2rem;
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--accent-purple), var(--accent-cyan));
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-cyan);
          box-shadow: 0 20px 60px rgba(6, 182, 212, 0.2);
        }

        .project-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .project-card .date {
          color: var(--accent-cyan);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .project-card p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent-purple);
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          color: var(--accent-cyan);
          gap: 0.75rem;
        }

        .education-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }

        .education-card h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--accent-purple);
        }

        .education-card .degree {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .education-card .date {
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .education-card .courses {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .contact-content {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .contact-content p {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .contact-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          color: var(--text-primary);
          text-decoration: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .contact-link:hover {
          transform: translateY(-5px);
          border-color: var(--accent-purple);
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
        }

        footer {
          text-align: center;
          padding: 2rem 0;
          color: var(--text-secondary);
          border-top: 1px solid var(--glass-border);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2s infinite;
          font-size: 2rem;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease;
        }

        .animate-fade-in-up-delay-1 {
          animation: fadeInUp 1s ease 0.2s both;
        }

        .animate-fade-in-up-delay-2 {
          animation: fadeInUp 1s ease 0.4s both;
        }

        .animate-fade-in-up-delay-3 {
          animation: fadeInUp 1s ease 0.6s both;
        }

        .animate-fade-in-up-delay-4 {
          animation: fadeInUp 1s ease 0.8s both;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }

          .hero-content .subtitle {
            font-size: 1.3rem;
          }

          .nav-links {
            display: none;
          }

          .about-grid,
          .education-grid {
            grid-template-columns: 1fr;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .contact-links {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}