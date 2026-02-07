export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand Column */}
        <div className="footer-section">
          <h3 className="footer-logo">A4 MEDIA</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            Elevating digital presence through cinematic excellence and strategic content creation.
          </p>
        </div>

        {/* Navigation Column */}
        <div className="footer-section">
          <h3>Sitemap</h3>
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#short-form">Short Form</a></li>
            <li><a href="#long-form">Long Form</a></li>
            <li><a href="#graphics">VFX & Graphics</a></li>
          </ul>
        </div>

        {/* Connect Column */}
        <div className="footer-section">
          <h3>Connect</h3>
          <ul className="footer-links">
            <li>
              <a 
                href="https://www.instagram.com/a4mediaofficial?igsh=MWl2eXZ1bjhyczMwag==" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="mailto:arnavconnectsofficial@gmail.com">
                Email Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>&copy; {new Date().getFullYear()} A4 MEDIA. All rights reserved.</p>
        </div>
        <div className="footer-bottom-center">
          <p className="dev-credit">
            Developed by{' '}
            <a 
              href="https://abhisheknirogi.github.io/nirogiabhishek-s-portfolio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="dev-link"
            >
              Abhishek Nirogi
            </a>
          </p>
        </div>
        <div className="footer-bottom-right">
          <a href="#top" className="back-to-top">Back to Top ↑</a>
        </div>
      </div>
    </footer>
  );
}