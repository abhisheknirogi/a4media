import { useState } from "react";
// 1. All Imports stay at the top
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import VideoGrid from "./components/VideoGrid";
import WebDev from "./components/WebDev";
import PhotoGrid from "./components/PhotoGrid"; 

export default function App() {
  return (
    <div id="top" className="agency-wrapper">
      {/* This uses the Navbar imported from your components folder */}
      <Navbar />
      
      <main className="main-content">
        {/* SECTION 1: ABOUT US */}
        <section id="about" className="section-padding">
          <About />
        </section>

        {/* SECTION 2: SHORT FORM */}
        <section id="short-form" className="section-padding">
          <div className="section-header">
            <h2>Short Form Content</h2>
   
          </div>
          <VideoGrid type="short" />
        </section>

        {/* SECTION 3: LONG FORM */}
        <section id="long-form" className="section-padding">
          <div className="section-header">
            <h2>Long Form Content</h2>
          
          </div>
          <VideoGrid type="long" />
        </section>

        {/* SECTION 4: GRAPHICS & VFX */}
        <section id="graphics" className="section-padding">
          <div className="section-header">
            <h2>Motion Graphics & VFX</h2>
       
          </div>
          <VideoGrid type="graphics" />
        </section>

        {/* SECTION 5: WEB ENGINEERING */}
        <section id="web-design" className="section-padding">
          <div className="section-header">
            <h2>Web Engineering</h2>
            <p>Premium digital infrastructure for high-scale brands.</p>
          </div>
          
          <WebDev />

          <div style={{ marginTop: '50px' }}>
            <PhotoGrid />
          </div>

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