import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// --- Lightweight scroll reveal wiring ---
// Adds `.reveal` and `.in-view` based on intersection with viewport.
// Non-invasive: only toggles classes, doesn't modify inline styles or layout.
(function initRevealObserver() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

const revealSelector = '.card, .photo-card, .video-card';


  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting) {
        el.classList.add('in-view');
        // If you want one-time reveals, unobserve after first intersection
        observer.unobserve(el);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.08,
  });

  // Add `.reveal` to matching elements and observe them
  requestAnimationFrame(() => {
    // First handle grid containers with staggered children
    const gridContainers = Array.from(document.querySelectorAll('.video-grid, .photo-grid'));
    gridContainers.forEach((container) => {
      const children = Array.from(container.children);
      children.forEach((child, idx) => {
        if (!child.classList.contains('reveal')) child.classList.add('reveal');
        const d = (idx % 4) + 1; // delay-1..delay-4
        child.classList.add(`delay-${d}`);
        observer.observe(child);
      });
    });

    // Then observe other matching elements (avoid double-handling grid children)
    const els = Array.from(document.querySelectorAll(revealSelector)).filter(e => !e.closest('.video-grid') && !e.closest('.photo-grid'));
    els.forEach((el, i) => {
      if (!el.classList.contains('reveal')) el.classList.add('reveal');
      const d = (i % 4) + 1;
      el.classList.add(`delay-${d}`);
      observer.observe(el);
    });
  });

  // Observe future nodes (simple MutationObserver) to attach reveal
  try {
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches && node.matches(revealSelector)) {
            if (!node.classList.contains('reveal')) node.classList.add('reveal');
            observer.observe(node);
          }
          // also check children
          node.querySelectorAll && node.querySelectorAll(revealSelector).forEach((ch) => {
            if (!ch.classList.contains('reveal')) ch.classList.add('reveal');
            observer.observe(ch);
          });
        });
      });
    });
    mo.observe(document.documentElement, { childList: true, subtree: true });
  } catch (e) {
    // ignore if MutationObserver unavailable
  }
})();