import React, { useRef, useState, useEffect } from 'react';

export default function VideoCard({ video }) {
  const videoRef = useRef(null);
  const modalRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);

  // Identify if it's a video file
  const isVideoFile = video.thumbnail?.toLowerCase().endsWith('.mp4') || 
                      video.thumbnail?.toLowerCase().endsWith('.webm');

  // Handle Play Button Click
  const handlePlayClick = (e) => {
    e.stopPropagation();
    setVideoError(false);
    setIsBuffering(true);
    setShowModal(true);
  };

  // Request Fullscreen with better error handling
  const requestFullscreen = async () => {
    if (modalRef.current) {
      try {
        const elem = modalRef.current;
        if (elem.requestFullscreen) {
          await elem.requestFullscreen({ navigationUI: 'hide' });
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        }
      } catch (err) {
        console.log("Fullscreen request error (may be user-blocked):", err);
      }
    }
  };

  // Handle Modal Open - Request Fullscreen
  useEffect(() => {
    if (showModal && videoRef.current) {
      console.log("Modal opened, video element:", videoRef.current);
      const timer = setTimeout(() => {
        console.log("Requesting fullscreen...");
        requestFullscreen();
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  // Handle Close Modal and Exit Fullscreen
  const handleCloseModal = () => {
    try {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    } catch (err) {
      console.log("Exit fullscreen error:", err);
    }
    
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setShowModal(false);
    setVideoError(false);
    setIsBuffering(false);
  };

  // Handle Fullscreen Change
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && showModal) {
        handleCloseModal();
      }
    };
    
    const events = [
      'fullscreenchange',
      'webkitfullscreenchange',
      'mozfullscreenchange',
      'msfullscreenchange'
    ];
    
    events.forEach(event => {
      document.addEventListener(event, handleFullscreenChange);
    });
    
    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleFullscreenChange);
      });
    };
  }, [showModal]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape' && showModal) {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showModal]);

  // Handle video loaded
  const handleVideoLoad = () => {
    setIsBuffering(false);
  };

  // Handle video playing
  const handleVideoPlay = () => {
    setIsBuffering(false);
  };

  // Handle video errors
  const handleVideoError = (e) => {
    console.error("Video error:", e);
    setVideoError(true);
    setIsBuffering(false);
  };

  // Handle buffering
  const handleWaiting = () => {
    setIsBuffering(true);
  };

  return (
    <>
      <div className={`video-card type-${video.type}`}>
        <div className="video-wrapper">
          {isVideoFile ? (
            <>
              <video
                className="video-preview"
                muted
                playsInline
              >
                <source src={video.thumbnail} type="video/mp4" />
              </video>
              <button className="play-button" onClick={handlePlayClick} aria-label="Play video">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </>
          ) : (
            <img 
              src={video.thumbnail} 
              alt={video.title} 
              className="video-preview" 
            />
          )}
        </div>

        <div className="video-info">
          <span className="video-category">{video.category}</span>
          <h3 className="video-title">{video.title}</h3>
          <p className="video-description">{video.description}</p>
        </div>
      </div>

      {/* VIDEO MODAL PLAYER */}
      {showModal && isVideoFile && (
        <div className="video-modal-overlay" onClick={handleCloseModal} ref={modalRef}>
          <button className="modal-close" onClick={handleCloseModal} aria-label="Close video">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            {videoError ? (
              <div className="video-error-message">
                <p>Unable to load video. Please check your connection or try again.</p>
              </div>
            ) : (
              <>
                <video
                  ref={videoRef}
                  className="modal-video"
                  controls
                  autoPlay
                  playsInline
                  crossOrigin="anonymous"
                  onError={handleVideoError}
                  onLoadedData={handleVideoLoad}
                  onPlay={handleVideoPlay}
                  onWaiting={handleWaiting}
                >
                  <source src={video.thumbnail} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {isBuffering && (
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#fff',
                    fontSize: '1.2rem',
                    pointerEvents: 'none'
                  }}>
                    Loading...
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}