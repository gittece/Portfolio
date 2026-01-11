import "./App.css";
import { useState, useEffect } from "react";
import { FaFacebookF, FaGithub, FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const sentences = [
  "Front-end designer.",
  "Literate with digital media and marketing.",
  "Effective team member and leader.",
  "Ready to learn and be mentored.",
  "Focused and goal-driven.",
  "Explored and lived to believe in the growth of technology.",
];

const [text, setText] = useState("");
const [sentenceIndex, setSentenceIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
  const current = sentences[sentenceIndex];

  const typingSpeed = 30;
  const deletingSpeed = 30;
  const pauseAfterTyping = 800;
  const pauseAfterDeleting = 200;

  let timeoutId;

  if (!isDeleting) {
    // typing
    if (text.length < current.length) {
      timeoutId = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, typingSpeed);
    } else {
      // finished typing -> pause -> start deleting
      timeoutId = setTimeout(() => setIsDeleting(true), pauseAfterTyping);
    }
  } else {
    // deleting
    if (text.length > 0) {
      timeoutId = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, deletingSpeed);
    } else {
      // finished deleting -> next sentence -> type again
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setSentenceIndex((i) => (i + 1) % sentences.length); // LOOP
      }, pauseAfterDeleting);
    }
  }

  return () => clearTimeout(timeoutId);
}, [text, isDeleting, sentenceIndex, sentences]);

/** 2) Fade-in on scroll (run once on mount) */
useEffect(() => {
  const els = document.querySelectorAll("section, article, .card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          // animate once (optional but recommended)
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  els.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);


  return (
    <div className="app">
      <div className="bg-layer">
        <video className="bg-video" autoPlay loop muted playsInline>
          <source src="/bgvideo/video.mp4" type="video/mp4" />
        </video>
      </div>
      

      <header className="navbar">
        <div className="logo">
          srccode
        </div>

        {/* Desktop links */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact Me</a>
        </nav>

        {/* Hamburger button (mobile) */}
        <button
          className={`hamburger ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span><span></span><span></span>
        </button>

        {/* Mobile menu */}
        <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact Me
          </a>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="home">
        <div className="home-left">
          <img
            src="/profile.png"
            alt="MAY ANNE HAZELYN O. ARBOIZ"
            className="profile-img"
          />
        </div>

        <div className="home-right">
          <p>Hi, this is</p>
          <h1 className="home-name">MAY ANNE HAZELYN O. ARBOIZ</h1>

          <p className="home-desc">
            <span className="type">{text}</span>
            <span className="cursor">|</span>
          </p>

          <hr/>
          <div className="social-links">
            <a
              href="https://www.facebook.com/yavellana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="mailto:hazelynarboiz@gmail.com"
              aria-label="Gmail"
            >
              <MdEmail />
            </a>

            <a
              href="https://github.com/gittece"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://discord.com/users/786249498388987944"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <FaDiscord />
            </a>

            <a
              href="https://t.me/@hehsln"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <FaTelegramPlane />
            </a>
          </div>
          <a href="/cv/Arboiz_May_anne_CV.pdf" className="cv-btn" download>
            Download CV
          </a>
        </div>
      </section>

      <Projects />
      <About />
      <Contact />
    </div>
  );
}
