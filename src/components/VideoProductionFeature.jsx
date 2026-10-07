import React, { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Camera, 
  Film, 
  Sliders, 
  ArrowUpRight,
  Sparkles,
  Smartphone,
  Crosshair
} from 'lucide-react';
import { use3DTilt } from '../hooks/use3DTilt';

export default function VideoProductionFeature() {
  const shouldReduceMotion = useReducedMotion();
  const [activeMedia, setActiveMedia] = useState('video'); // 'video' | 'gimbal-action' | 'studio' | 'product'
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const { tiltProps, glareStyle } = use3DTilt(7, shouldReduceMotion);

  const mediaClips = [
    { id: 'video', label: 'Commercial Reel', type: 'video', src: '/videos/hero_showcase.mp4', poster: '/images/commercial_brand_shoot.jpg', badge: 'Cinema 4K Live Reel' },
    { id: 'gimbal-action', label: '3-Axis Phone Gimbal', type: 'image', src: '/images/gimbal_smooth_motion_capture.jpg', badge: 'Motorized Gimbal Active Tracking' },
    { id: 'studio', label: 'Studio Production', type: 'image', src: '/images/gimbal_phone_videographer.jpg', badge: 'In-House Studio & Softbox Lighting' },
    { id: 'product', label: 'Macro & Food Plating', type: 'image', src: '/images/restaurant_cinematic_dish.jpg', badge: '120fps Macro Detail Capture' }
  ];

  const currentMedia = mediaClips.find(m => m.id === activeMedia) || mediaClips[0];

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleFullscreen = () => {
    if (videoRef.current && videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const videoServices = [
    '3-Axis Gimbal Reels',
    'Smartphone Cinema',
    'Product Videography',
    'Brand Commercials',
    'Corporate Showcases',
    'Social Media Ads',
    'Macro Photography',
    'ASMR Sound Design'
  ];

  return (
    <section id="video-studio" className="section section-dark video-production-feature-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow-tag orange">
            <Sparkles size={14} />
            <span>Creative Production Studio</span>
          </span>
          <h2 className="section-headline">
            Your Brand Deserves More Than Ordinary Content.
          </h2>
          <p className="section-subtext">
            From concept and scripting to handheld 3-axis motorized gimbal filming, professional cinematography and final editing, we create reels, product videos and brand films designed to capture attention and strengthen your brand.
          </p>
        </div>

        {/* Video Feature Main Grid */}
        <div className="video-feature-grid">
          {/* Left Column: Interactive 4K Video Player & 3D Cinema Frame */}
          <motion.div
            className="video-feature-screen-box"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Multi-Clip Navigation Bar */}
            <div className="video-clip-tabs-bar">
              {mediaClips.map((clip) => (
                <button
                  key={clip.id}
                  type="button"
                  className={`video-clip-tab ${activeMedia === clip.id ? 'active' : ''}`}
                  onClick={() => setActiveMedia(clip.id)}
                >
                  {clip.type === 'video' ? <Film size={13} /> : <Smartphone size={13} />}
                  <span>{clip.label}</span>
                </button>
              ))}
            </div>

            {/* 3D Tilt Player Frame */}
            <div 
              className="feature-video-container video-3d-card"
              {...tiltProps}
            >
              <div style={glareStyle} />

              {currentMedia.type === 'video' ? (
                <video
                  ref={videoRef}
                  src={currentMedia.src}
                  poster={currentMedia.poster}
                  preload="metadata"
                  playsInline
                  loop
                  muted={isMuted}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="feature-video-element"
                />
              ) : (
                <img
                  src={currentMedia.src}
                  alt={currentMedia.label}
                  className="feature-video-element"
                  loading="lazy"
                />
              )}

              <div className="feature-video-overlay-gradient"></div>

              {/* Top video status tags */}
              <div className="feature-video-top-bar">
                <span className="badge-tag dark-orange" style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}>
                  {currentMedia.badge}
                </span>
                <span className="spec-badge" style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', color: '#FFFFFF' }}>
                  {currentMedia.type === 'video' 
                    ? (isPlaying ? '● Playing Live Demo Reel' : 'Click Play To Preview') 
                    : '4K Stabilized Capture'}
                </span>
              </div>

              {/* Bottom controls for video */}
              {currentMedia.type === 'video' ? (
                <div className="feature-video-controls">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <button
                      type="button"
                      className="video-ctrl-btn"
                      onClick={togglePlay}
                      aria-label={isPlaying ? 'Pause Demo Reel' : 'Play Demo Reel'}
                    >
                      {isPlaying ? <Pause size={18} /> : <Play size={18} style={{ marginLeft: 2 }} />}
                    </button>

                    <button
                      type="button"
                      className="video-ctrl-btn"
                      onClick={toggleMute}
                      aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                    >
                      {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
                    </button>
                  </div>

                  <button
                    type="button"
                    className="video-ctrl-btn"
                    onClick={handleFullscreen}
                    aria-label="Fullscreen view"
                  >
                    <Maximize2 size={17} />
                  </button>
                </div>
              ) : (
                <div className="feature-photo-telemetry-badge">
                  <Crosshair size={14} color="var(--accent-orange)" />
                  <span>3-AXIS GYRO STABILIZED • 4K 60FPS</span>
                </div>
              )}
            </div>

            {/* Video Services Chips Grid */}
            <div style={{ marginTop: '1.25rem' }}>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '0.65rem', fontWeight: 700 }}>
                Production Capabilities:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {videoServices.map((serviceName) => (
                  <span 
                    key={serviceName} 
                    style={{ 
                      fontSize: '0.8rem', 
                      padding: '0.35rem 0.75rem', 
                      background: 'rgba(255,255,255,0.06)', 
                      borderRadius: '6px', 
                      color: 'var(--text-light)', 
                      border: '1px solid var(--border-subtle)' 
                    }}
                  >
                    {serviceName}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Studio Production Capabilities & Process */}
          <div className="video-feature-details">
            <div className="studio-capability-card">
              <div className="studio-cap-icon">
                <Smartphone size={22} color="var(--accent-orange)" />
              </div>
              <div>
                <h4 className="studio-cap-title">Motorized 3-Axis Gimbal & Phone Filming</h4>
                <p className="studio-cap-desc">
                  We deploy robotic 3-axis motorized gimbal stabilizers paired with high-bitrate flagship mobile sensors for high-speed tracking, dynamic walking shots, and algorithm-favored vertical reels.
                </p>
              </div>
            </div>

            <div className="studio-capability-card">
              <div className="studio-cap-icon">
                <Camera size={22} color="var(--accent-orange)" />
              </div>
              <div>
                <h4 className="studio-cap-title">On-Location Cinema Cinematography</h4>
                <p className="studio-cap-desc">
                  We don't shoot shaky amateur phone clips. We deploy prime lenses, motorized sliders, Aputure softbox lighting, and wireless broadcast audio directly to your venue or facility.
                </p>
              </div>
            </div>

            <div className="studio-capability-card">
              <div className="studio-cap-icon">
                <Sliders size={22} color="var(--accent-orange)" />
              </div>
              <div>
                <h4 className="studio-cap-title">Precision Post-Production & Color</h4>
                <p className="studio-cap-desc">
                  Raw footage is polished in-house with dedicated color grading, rhythm-synced cut pacing, realistic ASMR sound design, and custom motion typography built for high social retention.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <a href="#contact" className="btn-primary" style={{ width: '100%' }}>
                <span>Plan Your Next Shoot</span>
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
