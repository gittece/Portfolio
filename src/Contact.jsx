import "./Contact.css";

export default function Contact() {
const EMAIL_TO = "hazelynarboiz@gmail.com";

function handleMailtoSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const data = new FormData(form);

  const firstName = (data.get("firstName") || "").toString().trim();
  const lastName = (data.get("lastName") || "").toString().trim();
  const email = (data.get("email") || "").toString().trim();
  const phone = (data.get("phone") || "").toString().trim();
  const message = (data.get("message") || "").toString().trim();

  const subject = `Portfolio Contact: ${firstName} ${lastName}`.trim();

  const bodyLines = [
    `Name: ${firstName} ${lastName}`.trim(),
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : `Phone: (not provided)`,
    "",
    "Message:",
    message,
  ];

  const body = bodyLines.join("\n");

  // Encode for URL
  const mailto = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailto;
  form.reset();
}
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-layout">
          {/* LEFT */}
          <div className="contact-left">
            <h2>Contact Me</h2>
            <p className="contact-lead">
              Email, message, or connect with me through my social platforms. I’m open to
              collaborations, project inquiries, and mentorship opportunities.
            </p>

            <div className="contact-details">
              <a className="contact-detail" href="mailto:hazelynarboiz@gmail.com">
                hazelynarboiz@gmail.com
              </a>
              <span className="contact-detail">+63 948 224 6681</span>

              <div className="contact-social">
                <a href="https://facebook.com/yavellana" target="_blank" rel="noreferrer">Facebook</a>
                <a href="https://github.com/gittece" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://t.me/@hehsln" target="_blank" rel="noreferrer">Telegram</a>
                <a href="https://discord.com/users/786249498388987944" target="_blank" rel="noreferrer">Discord</a>
              </div>
            </div>

            <div className="contact-miniGrid">
              <div className="mini-card">
                <h4>Customer Support</h4>
                <p>I respond as soon as possible and keep communication clear and organized.</p>
              </div>

              <div className="mini-card">
                <h4>Feedback & Suggestions</h4>
                <p>I appreciate feedback and continuously improve my work and design process.</p>
              </div>

              <div className="mini-card">
                <h4>Media / Portfolio</h4>
                <p>For portfolio requests and project collaboration, feel free to reach out.</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="contact-right">
            <div className="contact-card">
              <h3>Get in Touch</h3>
              <p className="contact-cardSub">You can reach me anytime!</p>

              <form className="contact-form" onSubmit={handleMailtoSubmit}>
                 <div className="form-row">
                 <input name="firstName" type="text" placeholder="First name" required />
                 <input name="lastName" type="text" placeholder="Last name" required />
                 </div>

                 <input name="email" type="email" placeholder="Your email" required />
                 <input name="phone" type="text" placeholder="Phone number (optional)" />

                <textarea name="message" rows="4" placeholder="How may I help?" required />

                <button type="submit" className="contact-submit">Submit</button>
              </form>

            </div>
          </div>
        </div>
      </div>
       <footer className="contact-footer">© 2026 All Rights Reserved | Arboiz Portfolio</footer>
    </section>
  );
}
