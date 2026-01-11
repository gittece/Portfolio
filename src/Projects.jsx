import { useEffect, useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Academic Portfolio v.1",
    screenshots: [
      "/project1/1.png",
      "/project1/2.png",
      "/project1/3.png",
      "/project1/4.png",
      "/project1/5.png",
      "/project1/6.png",
      "/project1/7.png",
      "/project1/8.png",],
  },
  {
  title: "Fanpage Project: BTS Themed",
  screenshots: [
    "/project2/1.png",
    "/project2/2.png",
    "/project2/3.png",
    "/project2/4.png",
    "/project2/5.png",
    "/project2/6.png",
    "/project2/7.png",
    "/project2/8.png",
    "/project2/9.png",
    "/project2/10.png",
    "/project2/11.png",
    "/project2/12.png",
    "/project2/13.png",
  ],
  },
{
  title: "Silanganan Studio: Booking System",
  screenshots: [
    "/project3/1.jpg",
    "/project3/2.jpg",
    "/project3/3.jpg",
    "/project3/4.jpg",
    "/project3/5.jpg",
    "/project3/6.jpg",
    "/project3/7.jpg",
    "/project3/8.jpg",
    "/project3/9.jpg",
    "/project3/10.jpg",
    "/project3/11.jpg",
    "/project3/12.jpg",
    "/project3/13.jpg",
    "/project3/14.jpg",
    "/project3/15.jpg",
    "/project3/16.jpg",
    "/project3/17.jpg",
    "/project3/18.jpg",
    "/project3/19.jpg",
    "/project3/20.jpg",
    "/project3/21.jpg",
    "/project3/22.jpg",
    "/project3/23.jpg",
    "/project3/24.jpg",
  ],
},
{
  title: "Claudy Nails: Booking System",
  screenshots: [
    "/project4/1.png",
    "/project4/2.png",
    "/project4/3.png",
    "/project4/4.png",
    "/project4/5.png",
    "/project4/6.png",
    "/project4/7.png",
    "/project4/8.png",
    "/project4/9.png",
    "/project4/10.png",
    "/project4/11.png",
    "/project4/12.png",
    "/project4/13.png",
    "/project4/14.png",
    "/project4/15.png",
    "/project4/16.png",
    "/project4/18.png",
  ],
},
{
  title: "MiCasa Living: Estate Project",
  screenshots: [
  "/project5/Admin Interface/1.png",
  "/project5/Admin Interface/2.png",
  "/project5/Admin Interface/3.png",
  "/project5/Admin Interface/4.png",
  "/project5/Admin Interface/5.png",
  "/project5/Admin Interface/6.png",
  "/project5/Admin Interface/7.png",
  "/project5/Admin Interface/8.png",
  "/project5/Admin Interface/9.png",
  "/project5/Admin Interface/10.png",
  "/project5/Admin Interface/11.png",
  "/project5/Admin Interface/12.png",
  "/project5/Admin Interface/13.png",
  "/project5/Agent Interface/1.png",
  "/project5/Agent Interface/2.png",
  "/project5/Agent Interface/3.png",
  "/project5/Agent Interface/4.png",
  "/project5/Agent Interface/5.png",
  "/project5/Agent Interface/6.png",
  "/project5/End User Interface/1.png",
  "/project5/End User Interface/2.png",
  "/project5/End User Interface/3.png",
  "/project5/End User Interface/4.png",
  "/project5/End User Interface/5.png",
  "/project5/End User Interface/6.png",
  "/project5/End User Interface/7.png",
  "/project5/End User Interface/8.png",
  "/project5/End User Interface/9.png",
  "/project5/End User Interface/10.png",
  "/project5/End User Interface/11.png",
  "/project5/End User Interface/12.png",
  "/project5/End User Interface/13.png",
  "/project5/End User Interface/14.png",
  ]
},

  {
    title: "Profile Card",
    screenshots: [
  "/project6/1.png",
  "/project6/2.png",
  "/project6/3.png",
],
  },
  {
    title: "Slambook Project",
    screenshots: [
      "/project7/1.png", 
      "/project7/2.png",
      "/project7/3.png",
      "/project7/4.png",],
  },
{
  title: "Academic Portfolio v.2",
  screenshots: [
    "/project8/1.png",
    "/project8/2.png",
    "/project8/3.png",
    "/project8/4.png",
    "/project8/5.png",
    "/project8/6.png",
    "/project8/7.png",
    "/project8/8.png",
    "/project8/9.png",
    "/project8/10.png",
    "/project8/11.png",
  ],
},
 {
  title: "Capstone Project: ICA System",
  screenshots: [
    "/project9/1.png",
    "/project9/2.png",
    "/project9/3.png",
    "/project9/4.png",
    "/project9/5.png",
    "/project9/6.png",
    "/project9/7.png",
    "/project9/8.png",
    "/project9/9.png",
    "/project9/10.png",
    "/project9/11.png",
    "/project9/12.png",
    "/project9/13.png",
    "/project9/14.png",
    "/project9/15.png",
    "/project9/16.png",
    "/project9/17.png",
    "/project9/18.png",
    "/project9/19.png",
    "/project9/20.png",
    "/project9/21.png",
    "/project9/22.png",
    "/project9/23.png",
    "/project9/24.png",
    "/project9/25.png",
    "/project9/26.png",
    "/project9/27.png",
    "/project9/28.png",
    "/project9/29.png",
    "/project9/30.png",
    "/project9/31.png",
    "/project9/32.png",
    "/project9/33.png",
    "/project9/34.png",
    "/project9/35.png",
    "/project9/36.png",
    "/project9/37.png",
    "/project9/38.png",
  ],
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
