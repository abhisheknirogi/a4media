export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Branding Section */}
        <a href="#top" className="nav-logo-link">
          <div className="logo-box" style={{ 
            background: 'var(--primary)', 
            color: 'var(--bg-dark)', 
            padding: '2px 10px', 
            borderRadius: '6px', 
            fontWeight: '900',
            fontSize: '1.1rem',
            boxShadow: '0 0 15px var(--primary-glow)'
          }}>A4</div>
          <span className="nav-brand-name">MEDIA</span>
        </a>

        {/* Navigation Links */}
        <div className="nav-links">
          {/* Main Services */}
          <a href="#about" className="nav-item">Agency</a>
          <a href="#short-form" className="nav-item">Shorts</a>
          <a href="#long-form" className="nav-item">Long Form</a>
          <a href="#web-design" className="nav-item">Web Engineering</a>

          {/* Social Proof Link */}
          <a 
            href="https://www.instagram.com/a4mediaofficial?igsh=MWl2eXZ1bjhyczMwag==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-item nav-social"
          >
            Instagram
          </a>

          {/* Primary CTA */}
          <a href="#contact" className="nav-item contact-btn">Start Project</a>
        </div>
      </div>
    </nav>
  );
}