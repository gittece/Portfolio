import { useEffect, useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Academic Portfolio v.1",
    screenshots: [
      "public/project1/1.png",
      "public/project1/2.png",
      "public/project1/3.png",
      "public/project1/4.png",
      "public/project1/5.png",
      "public/project1/6.png",
      "public/project1/7.png",
      "public/project1/8.png",],
  },
  {
  title: "Fanpage Project: BTS Themed",
  screenshots: [
    "public/project2/1.png",
    "public/project2/3.png",
    "public/project2/4.png",
    "public/project2/2.png",
    "public/project2/5.png",
    "public/project2/6.png",
    "public/project2/7.png",
    "public/project2/8.png",
    "public/project2/9.png",
    "public/project2/10.png",
    "public/project2/11.png",
    "public/project2/12.png",
    "public/project2/13.png",
  ],
  },
{
  title: "Silanganan Studio: Booking System",
  screenshots: [
    "public/project3/1.jpg",
    "public/project3/2.jpg",
    "public/project3/3.jpg",
    "public/project3/4.jpg",
    "public/project3/5.jpg",
    "public/project3/6.jpg",
    "public/project3/7.jpg",
    "public/project3/8.jpg",
    "public/project3/9.jpg",
    "public/project3/10.jpg",
    "public/project3/11.jpg",
    "public/project3/12.jpg",
    "public/project3/13.jpg",
    "public/project3/14.jpg",
    "public/project3/15.jpg",
    "public/project3/16.jpg",
    "public/project3/17.jpg",
    "public/project3/18.jpg",
    "public/project3/19.jpg",
    "public/project3/20.jpg",
    "public/project3/21.jpg",
    "public/project3/22.jpg",
    "public/project3/23.jpg",
    "public/project3/24.jpg",
  ],
},
{
  title: "Claudy Nails: Booking System",
  screenshots: [
    "public/project4/1.png",
    "public/project4/2.png",
    "public/project4/3.png",
    "public/project4/4.png",
    "public/project4/5.png",
    "public/project4/6.png",
    "public/project4/7.png",
    "public/project4/8.png",
    "public/project4/9.png",
    "public/project4/10.png",
    "public/project4/11.png",
    "public/project4/12.png",
    "public/project4/13.png",
    "public/project4/14.png",
    "public/project4/15.png",
    "public/project4/16.png",
    "public/project4/18.png",
  ],
},
{
  title: "MiCasa Living: Estate Project",
  screenshots: [
  "public/project5/Admin Interface/1.png",
  "public/project5/Admin Interface/2.png",
  "public/project5/Admin Interface/3.png",
  "public/project5/Admin Interface/4.png",
  "public/project5/Admin Interface/5.png",
  "public/project5/Admin Interface/6.png",
  "public/project5/Admin Interface/7.png",
  "public/project5/Admin Interface/8.png",
  "public/project5/Admin Interface/9.png",
  "public/project5/Admin Interface/10.png",
  "public/project5/Admin Interface/11.png",
  "public/project5/Admin Interface/12.png",
  "public/project5/Admin Interface/13.png",
  "public/project5/Agent Interface/1.png",
  "public/project5/Agent Interface/2.png",
  "public/project5/Agent Interface/3.png",
  "public/project5/Agent Interface/4.png",
  "public/project5/Agent Interface/5.png",
  "public/project5/Agent Interface/6.png",
  "public/project5/End User Interface/1.png",
  "public/project5/End User Interface/2.png",
  "public/project5/End User Interface/3.png",
  "public/project5/End User Interface/4.png",
  "public/project5/End User Interface/5.png",
  "public/project5/End User Interface/6.png",
  "public/project5/End User Interface/7.png",
  "public/project5/End User Interface/8.png",
  "public/project5/End User Interface/9.png",
  "public/project5/End User Interface/10.png",
  "public/project5/End User Interface/11.png",
  "public/project5/End User Interface/12.png",
  "public/project5/End User Interface/13.png",
  "public/project5/End User Interface/14.png",
  ]
},

  {
    title: "Profile Card",
    screenshots: [
  "public/project6/1.png",
  "public/project6/2.png",
  "public/project6/3.png",
],
  },
  {
    title: "Slambook Project",
    screenshots: [
      "public/project7/1.png", 
      "public/project7/2.png",
      "public/project7/3.png",
      "public/project7/4.png",],
  },
{
  title: "Academic Portfolio v.2",
  screenshots: [
    "publicpublic/project8/1.png",
    "publicpublic/project8/2.png",
    "publicpublic/project8/3.png",
    "publicpublic/project8/4.png",
    "publicpublic/project8/5.png",
    "publicpublic/project8/6.png",
    "publicpublic/project8/7.png",
    "publicpublic/project8/8.png",
    "publicpublic/project8/9.png",
    "publicpublic/project8/10.png",
    "publicpublic/project8/11.png",
  ],
},
 {
  title: "Capstone Project: ICA System",
  screenshots: [
    "public/project9/1.png",
    "public/project9/2.png",
    "public/project9/3.png",
    "public/project9/4.png",
    "public/project9/5.png",
    "public/project9/6.png",
    "public/project9/7.png",
    "public/project9/8.png",
    "public/project9/9.png",
    "public/project9/10.png",
    "public/project9/11.png",
    "public/project9/12.png",
    "public/project9/13.png",
    "public/project9/14.png",
    "public/project9/15.png",
    "public/project9/16.png",
    "public/project9/17.png",
    "public/project9/18.png",
    "public/project9/19.png",
    "public/project9/20.png",
    "public/project9/21.png",
    "public/project9/22.png",
    "public/project9/23.png",
    "public/project9/24.png",
    "public/project9/25.png",
    "public/project9/26.png",
    "public/project9/27.png",
    "public/project9/28.png",
    "public/project9/29.png",
    "public/project9/30.png",
    "public/project9/31.png",
    "public/project9/32.png",
    "public/project9/33.png",
    "public/project9/34.png",
    "public/project9/35.png",
    "public/project9/36.png",
    "public/project9/37.png",
    "public/project9/38.png",
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
