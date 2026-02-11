export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
    <div className="about-video-wrapper">
  <img
    src="/files/about.jpeg"
    alt="About A4Media"
    className="about-video"
  />
</div>



        
        <div className="about-text">
          <h1>ABOUT</h1>
                  
          <p>
          A4 Media is a premier creative agency specializing in high-impact visual storytelling, web development, and digital growth. We bridge cinematic production, modern web experiences, and data-driven SEO to help brands and creators dominate social and search platforms through precision editing, innovative VFX, and performance-optimized websites.
          </p>

          <p style={{ marginTop: '15px', color: 'var(--text-muted)' }}>
           We turn attention into loyalty across short-form virality and long-form storytelling.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <strong>50M+</strong>
              <span>Total Views</span>
            </div>
            <div className="stat-item">
              <strong>15+</strong>
              <span>Global Clients</span>
            </div>
          </div>

          <div className="about-cta-wrapper" style={{ marginTop: '30px' }}>
            <p style={{ marginBottom: '10px', fontSize: '0.9rem' }}>
              Check out our latest productions and behind-the-scenes on our Instagram:
            </p>
            <a 
              href="https://www.instagram.com/a4mediaofficial?igsh=MWl2eXZ1bjhyczMwag==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="insta-about-link"
              style={{
                color: 'var(--primary)', 
                fontWeight: 'bold', 
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              View us on Instagram <span style={{ fontSize: '1.2rem' }}>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}