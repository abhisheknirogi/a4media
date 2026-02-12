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
          A4 Media is a creative studio focused on video editing and digital design.
We help brands and creators produce content that looks sharp, feels intentional, and performs online.
          </p>

          <p style={{ marginTop: '15px', color: 'var(--text-muted)' }}>
         From short-form videos to long-form projects, we focus on strong visuals and clean execution.

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