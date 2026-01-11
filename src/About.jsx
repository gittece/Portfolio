import "./About.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPython,
  SiCplusplus,
  SiMysql,
  SiCanva,
  SiFigma,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

const timeline = [
  { year: "2015", title: "Basic Computer Education Program Certification", desc: "Joined a program for selected students who wished to learn the fundamentals of computer and usage of MS Office tools. This enhances all the necessary basic knowledge that helped a lot in terms of academics." },
  { year: "2018 - 2020", title: "ICT Computer System Servicing Student", desc: "Took the academic track in her junior years to learn more about computer system. This academic program shaped her to enjoy hardware components, installation, and networking." },
  { year: "2020", title: "Participated in Science, Spelling, and ASEAN QuizBee", desc: "Aside from exploring about computers, she joined various curiccular activities that helped her expand her vocabulary and knowledge." },
  { year: "2020 - 2022", title: "TVL Computer Programming Student", desc: "She spent her senior years learning something new, which is computer programming. This unfamiliar topic did bring her challenge. She then graduated with the knowledge of the its fundamentals." },
  { year: "2022 - 2026", title: "Bachelor of Science in Information Technology", desc: "After years of exploration, she decided to enroll and complete her study as an IT student. Expanded and grow her knowledge, learn about mistakes and errors, and be a professional she wants to be." },
  { year: "2023", title: "Media Committee Officer", desc: "During her college journey, she once joined an organization who caters her talent and hobby. She then became an officer who handles all the media needed by the organization for a year." },
  { year: "2024", title: "Network Packet Tracer Certification", desc: "By the help of their subject instructor in Networking, she took an online free course in Network Packet Tracer. This certification helped her understand networking more." },
  { year: "2024 - 2026", title: "Organization President", desc: "Her last achievement was obtaining the highest position in the campus' dance organization. This experience shaped her leadership, self-trust, communication, applied ethics, formality, confidence, and ability to adapt." },
];

const skills = [
  { icon: <SiMysql />, label: "SQL" },
  { icon: <SiHtml5 />, label: "HTML5" },
  { icon: <SiReact />, label: "React JS" },
  { icon: <SiCss3 />, label: "CSS" },
  { icon: <SiPython />, label: "Python 3" },
  { icon: <SiCplusplus />, label: "C++" },
  { icon: <FaJava />, label: "Java" }, 
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiCanva />, label: "Canva" },
  { icon: <SiFigma />, label: "Figma" },
];

const certifications = [
  { name: "Basic Computer Education Program ", issuer: "Aklatang Panlungsod ng Dasmariñas", year: "2015" },
  { name: "Introduction to Packet Tracer Exam", issuer: "Networking Academy", year: "2025" },
];

const collaborators = [
  { name: "Reynalyn B. Morales", role: "Backend Developer", link: "https://my-portfolio-omega-virid-13.vercel.app/" },
  { name: "Jeams Kenneth Y. Lorilla", role: "Frontend Developer", link: "https://github.com/jeamsKenLori/" },
  { name: "Rose Ann S. Bajo", role: "Backend Developer", link: "https://github.com/roksan18/" },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <header className="about-header">
          <h2>About</h2>
          <hr />
          <p>More about me, my journey, and what I work with.</p>
        </header>

        {/* Top: Description */}
        <div className="about-top">
          <div className="about-card about-desc">
            <p className="about-description">
              My interest in information technology began at a young age, 
              starting with keyboard typing practice at nine years old and formal 
              participation in a Basic Computer Education Program by the age of ten. 
              Early exposure to safe browsing practices fostered a strong sense of digital 
              responsibility and sparked a lasting interest in computer hardware and networking. 
              Over the years, I have explored a wide range of IT disciplines, developing a comprehensive 
              understanding of both technical systems and digital environments. I remain highly curious, 
              open to mentorship, and committed to continuous growth, using my reserved nature as 
              motivation to learn thoughtfully and improve consistently.
            </p>
          </div>

          <div className="about-card about-meta">
            <div className="about-metaRow">
              <span className="about-metaLabel">College Course</span>
              <span className="about-metaValue">BS Information Technology</span>
            </div>

            <div className="about-metaRow">
              <span className="about-metaLabel">Interests</span>
              <span className="about-metaValue">Networking, SysAdmin, Designing</span>
            </div>

            <div className="about-metaRow">
              <span className="about-metaLabel">Hobby</span>
              <span className="about-metaValue">Dance, Write, Music, Movie</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="about-card">
          <div className="about-sectionTitle">
            <h3>ACADEMIC AND EXTRACURRICULAR TIMELINE</h3>
          </div>

          <div className="timeline">
            {timeline.map((item) => (
              <div className="timeline-item" key={item.year}>
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-title">{item.title}</div>
                  <div className="timeline-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills + Certifications + Collaborators */}
        {/* Skills*/}
        <div className="about-grid3">
          <div className="about-card">
            <div className="about-sectionTitle">
              <h3>Skills</h3>
              <p>Programming Tools I use</p>
            </div>
            <div className="skills-grid icons-only">
              {skills.map((skill) => (
          <div className="skill-icon" key={skill.label} title={skill.label}>
           {skill.icon}
          </div>
          ))}
        </div> 
       </div>


          {/* Certifications */}
          <div className="about-card">
            <div className="about-sectionTitle">
              <h3>Certifications</h3>
              <p>Courses & credentials</p>
            </div>

            <ul className="list">
              {certifications.map((c, idx) => (
                <li className="list-item" key={`${c.name}-${idx}`}>
                  <div className="list-main">
                    <span className="list-title">{c.name}</span>
                    <span className="list-sub">{c.issuer}</span>
                  </div>
                  <span className="list-year">{c.year}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Collaborators */}
          <div className="about-card">
            <div className="about-sectionTitle">
              <h3>Collaborated Developers</h3>
              <p>People I built with</p>
            </div>

            <ul className="list">
              {collaborators.map((dev, idx) => (
                <li className="list-item" key={`${dev.name}-${idx}`}>
                  <div className="list-main">
                    {dev.link ? (
                      <a className="list-title link" href={dev.link} target="_blank" rel="noreferrer">
                        {dev.name}
                      </a>
                    ) : (
                      <span className="list-title">{dev.name}</span>
                    )}
                    <span className="list-sub">{dev.role}</span>
                  </div>
                  <span className="list-year">↗</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
