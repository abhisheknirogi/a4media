import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <div className="contact-header-content">
          <span className="video-category">Get In Touch</span>
          <h2 style={{ fontSize: '3rem', marginTop: '10px' }}>Let's Build Your <br /> Visual Legacy</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '400px', margin: '20px 0' }}>
            Whether you need a viral short-form strategy or a full-scale cinematic production, 
            A4 Media is ready to scale your brand.
          </p>
        </div>

        <div className="contact-details">
          {/* Email Item */}
          <div className="info-item">
            <h3>Direct Inquiry</h3>
            <a href="mailto:arnavconnectsofficial@gmail.com" className="contact-link-text">
              arnavconnectsofficial@gmail.com
            </a>
          </div>

          {/* Social Item */}
          <div className="info-item" style={{ marginTop: '30px' }}>
            <h3>Social Presence</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '15px', fontSize: '0.9rem' }}>
              For daily updates and behind-the-scenes content:
            </p>
            <a 
              href="https://www.instagram.com/a4mediaofficial?igsh=MWl2eXZ1bjhyczMwag==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="instagram-link"
            >
              Follow @a4mediaofficial
            </a>
          </div>
        </div>
      </div>

      <div className="contact-form-wrapper">
        <div className="main-form">
          <h3 style={{ marginBottom: '20px' }}>Send us a Message</h3>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}