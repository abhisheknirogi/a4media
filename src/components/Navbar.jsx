import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Branding Section */}
        <a href="#top" className="nav-logo-link" onClick={handleLinkClick}>
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

        {/* Mobile toggle */}
        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((s) => !s)}
        >
          <span className="hamburger" />
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${open ? 'open' : ''}`}>
          {/* Main Services */}
          <a href="#about" className="nav-item" onClick={handleLinkClick}>Agency</a>
          <a href="#short-form" className="nav-item" onClick={handleLinkClick}>Shorts</a>
          <a href="#long-form" className="nav-item" onClick={handleLinkClick}>Long Form</a>
          <a href="#web-design" className="nav-item" onClick={handleLinkClick}>Web Engineering</a>

          {/* Social Proof Link */}
          <a 
            href="https://www.instagram.com/a4mediaofficial?igsh=MWl2eXZ1bjhyczMwag==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-item nav-social"
            onClick={handleLinkClick}
          >
            Instagram
          </a>

          {/* Primary CTA */}
          <a href="#contact" className="nav-item contact-btn" onClick={handleLinkClick}>Start Project</a>
        </div>
      </div>
    </nav>
  );
}