import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="section-heading">
        <p className="eyebrow">Get in Touch</p>
        <h2 id="contact-title">Partner with Adam</h2>
      </div>
      <form className="contact-form" onSubmit={(e) => { e.preventDefault(); }}>
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Message
          <textarea name="message" rows={4} required />
        </label>
        <button type="submit" className="button-primary">Send Message</button>
      </form>
    </section>
  );
}
