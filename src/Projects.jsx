import { useEffect, useState } from "react";
import "./Projects.css";

const base = import.meta.env.BASE_URL;
const projects = [
  {
    title: "Academic Portfolio v.1",
    screenshots: Array.from({ length: 8 }, (_, i) => `${base}project1/${i + 1}.png`),
  },
  {
    title: "Fanpage Project: BTS Themed",
    screenshots: Array.from({ length: 13 }, (_, i) => `${base}project2/${i + 1}.png`),
  },
  {
    title: "Silanganan Studio: Booking System",
    screenshots: Array.from({ length: 24 }, (_, i) => `${base}project3/${i + 1}.jpg`),
  },
  {
    title: "Claudy Nails: Booking System",
    screenshots: Array.from({ length: 16 }, (_, i) => `${base}project4/${i + 1}.png`),
  },
  {
    title: "MiCasa Living: Estate Project",
    screenshots: [
      ...Array.from({ length: 13 }, (_, i) => `${base}project5/Admin Interface/${i + 1}.png`),
      ...Array.from({ length: 6 }, (_, i) => `${base}project5/Agent Interface/${i + 1}.png`),
      ...Array.from({ length: 14 }, (_, i) => `${base}project5/End User Interface/${i + 1}.png`),
    ],
  },
  {
    title: "Profile Card",
    screenshots: Array.from({ length: 3 }, (_, i) => `${base}project6/${i + 1}.png`),
  },
  {
    title: "Slambook Project",
    screenshots: Array.from({ length: 4 }, (_, i) => `${base}project7/${i + 1}.png`),
  },
  {
    title: "Academic Portfolio v.2",
    screenshots: Array.from({ length: 11 }, (_, i) => `${base}project8/${i + 1}.png`),
  },
  {
    title: "Capstone Project: ICA System",
    screenshots: Array.from({ length: 38 }, (_, i) => `${base}project9/${i + 1}.png`),
  },
];



export default function Projects() {
  const [open, setOpen] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const [shotIndex, setShotIndex] = useState(0);

  const currentProject = projects[projectIndex];
  const currentShot = currentProject?.screenshots?.[shotIndex];

  const openModal = (pIdx) => {
    setProjectIndex(pIdx);
    setShotIndex(0);
    setOpen(true);
  };

  const closeModal = () => setOpen(false);

  const next = () => {
    const total = currentProject.screenshots.length;
    setShotIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    const total = currentProject.screenshots.length;
    setShotIndex((prev) => (prev - 1 + total) % total);
  };

  // Close on ESC, prevent background scroll
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, projectIndex, shotIndex]);

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2>Projects</h2>
          <hr />
          <p>These are the projects I created from 2022 to 2024.<br></br>
            I explored, learned, and is ready to create better
            projects soon.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p, idx) => (
            <button
              type="button"
              className="project-card"
              key={idx}
              onClick={() => openModal(idx)}
            >
              <div className="project-thumb">
                <img src={p.screenshots[0]} alt={p.title} loading="lazy" />
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p className="project-note">{p.screenshots.length} screenshot(s)</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="modal-overlay" onClick={closeModal} role="presentation">
          <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <div className="modal-top">
              <div className="modal-title">
                <h3>{currentProject.title}</h3>
                <p>
                  Screenshot {shotIndex + 1} / {currentProject.screenshots.length}
                </p>
              </div>

              <button className="modal-close" onClick={closeModal} aria-label="Close modal">
                ✕
              </button>
            </div>

            <div className="modal-body">
              <button className="modal-nav" onClick={prev} aria-label="Previous screenshot">
                ‹
              </button>

              <div className="modal-imageWrap">
                <img src={currentShot} alt={`${currentProject.title} screenshot`} />
              </div>

              <button className="modal-nav" onClick={next} aria-label="Next screenshot">
                ›
              </button>
            </div>

            <div className="modal-hint">
              <span>Tip: Use ← → keys to navigate, ESC to close</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
