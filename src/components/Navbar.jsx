
import { useState, useEffect } from "react";

export default function Navbar() {
  
  const [open, setOpen] = useState(false);
  

  // Close menu when a link is clicked
  const handleLinkClick = () => setOpen(false);

  useEffect(() => {
    // Prevent scrolling the background when the mobile menu is open
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Cleanup on unmount
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close menu when viewport is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close on Escape when mobile menu is open
  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Branding Section */}
        <a href="#top" className="nav-logo-link" onClick={handleLinkClick}>
          <div className="logo-box" style={{ 
            background: 'var(--primary, #00ffcc)', 
            color: '#000', 
            padding: '2px 10px', 
            borderRadius: '6px', 
            fontWeight: '900',
            fontSize: '1.1rem'
          }}>A4</div>
          <span className="nav-brand-name">MEDIA</span>
        </a>

        {/* Mobile Toggle Button */}
        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="hamburger" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#about" className="nav-item" onClick={handleLinkClick}>Agency</a>
          <a href="#short-form" className="nav-item" onClick={handleLinkClick}>Shorts</a>
          <a href="#long-form" className="nav-item" onClick={handleLinkClick}>Long Form</a>
          <a href="#web-design" className="nav-item" onClick={handleLinkClick}>Web Engineering</a>
          
          <a 
            href="https://www.instagram.com/a4mediaofficial" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-item nav-social"
            onClick={handleLinkClick}
          >
            Instagram
          </a>

          <a href="#contact" className="nav-item contact-btn" onClick={handleLinkClick}>
            Start Project
          </a>
        </div>
      </div>
    </nav>
  );
}