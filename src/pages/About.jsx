export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          {/* Replace this URL with a photo of your team or studio */}
          <img 
            src="https://images.unsplash.com/photo-1551503766-ac63dfa6401c?w=800" 
            alt="A4 Media Agency Studio" 
          />
        </div>
        
        <div className="about-text">
          <h1>A4 MEDIA</h1>
          <p className="subtitle">Visual Excellence. Scalable Growth.</p>
          
          <p>
            A4 Media is a premier creative agency specializing in high-impact visual storytelling. 
            We bridge the gap between cinematic production and digital strategy, helping brands 
            and creators dominate social platforms through precision editing and innovative VFX.
          </p>

          <p style={{ marginTop: '15px', color: 'var(--text-muted)' }}>
            From viral short-form hooks to immersive long-form documentaries, our mission is to 
            turn viewers into loyal followers.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <strong>5M+</strong>
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
              View Portfolio on Instagram <span style={{ fontSize: '1.2rem' }}>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}