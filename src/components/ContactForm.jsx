import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Replace these with your actual IDs from EmailJS
    const SERVICE_ID = "service_uz99ay9";
    const TEMPLATE_ID = "your_template_id";
    const PUBLIC_KEY = "your_public_key";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          form.current.reset(); // Clears the form
      }, (error) => {
          console.log(error.text);
          setStatus("Failed to send. Please try again.");
      });
  };

  return (
    <form className="main-form" ref={form} onSubmit={sendEmail}>
      <div className="form-group">
        <label>Name</label>
        {/* IMPORTANT: The 'name' attribute must match your EmailJS template placeholders */}
        <input type="text" name="from_name" placeholder="Your Name" required />
      </div>
      
      <div className="form-group">
        <label>Email</label>
        <input type="email" name="reply_to" placeholder="Email Address" required />
      </div>

      <div className="form-group">
        <label>Message</label>
        <textarea name="message" rows="5" placeholder="Tell us about your project..." required></textarea>
      </div>

      <button type="submit" className="submit-btn">Send Message</button>
      
      {status && <p className="status-message">{status}</p>}
    </form>
  );
}