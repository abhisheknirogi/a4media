import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import VideoGrid from "./components/VideoGrid";
import WebDev from "./components/WebDev";
import PhotoGrid from "./components/PhotoGrid"; // <--- ADD THIS IMPORT TO FIX THE ERROR

export default function App() {
  return (
    <div id="top" className="agency-wrapper">
      <Navbar />
      
      <main className="main-content">
        {/* SECTION 1: ABOUT US */}
        <section id="about" className="section-padding">
          <About />
        </section>

        {/* SECTION 2: SHORT FORM CONTENT */}
        <section id="short-form" className="section-padding">
          <div className="section-header">
            <h2>Short Form Content</h2>
            <p>High-retention vertical storytelling for the modern era.</p>
          </div>
          <VideoGrid type="short" />
        </section>

        {/* SECTION 3: LONG FORM CONTENT */}
        <section id="long-form" className="section-padding">
          <div className="section-header">
            <h2>Long Form Content</h2>
            <p>Cinematic documentaries, YouTube strategy, and corporate films.</p>
          </div>
          <VideoGrid type="long" />
        </section>

        {/* SECTION 4: GRAPHICS & VFX */}
        <section id="graphics" className="section-padding">
          <div className="section-header">
            <h2>Motion Graphics & VFX</h2>
            <p>Elevating brands through high-end visual effects and design.</p>
          </div>
          <VideoGrid type="graphics" />
        </section>

        {/* SECTION 5: WEB ENGINEERING (YOUR 70% DIVISION) */}
        <section id="web-design" className="section-padding">
          <div className="section-header">
            <h2>Web Engineering</h2>
            <p>Premium digital infrastructure for high-scale brands.</p>
          </div>
          
          {/* Detailed Info Component */}
          <WebDev />

          {/* Photo Grid of your work (No Play Buttons!) */}
          <div style={{ marginTop: '50px' }}>
            <PhotoGrid />
          </div>

          {/* Technical Skills List */}
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <ul className="skills-list" style={{ 
              display: 'inline-grid', 
              textAlign: 'left', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '20px',
              listStyle: 'none' 
            }}>
              <li>⚡ Custom React Applications</li>
              <li>⚡ UI/UX Strategy & Prototyping</li>
              <li>⚡ SEO & Performance Optimization</li>
              <li>⚡ E-Commerce Solutions</li>
            </ul>
          </div>
        </section>

        {/* SECTION 6: CONTACT */}
        <section id="contact" className="section-padding">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
<section id="web-design" className="section-padding">
  <div className="section-header">
    <h2>Web Engineering</h2>
    <p>Premium digital infrastructure for high-scale brands.</p>
  </div>
  
  <WebDev />

  <PhotoGrid /> {/* This is now the clean, non-video photo grid */}
</section>