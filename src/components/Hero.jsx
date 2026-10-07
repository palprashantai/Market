import React, { useState, useRef, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Film, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  Volume2, 
  VolumeX, 
  Crosshair, 
  BarChart3, 
  Search, 
  Wifi, 
  Battery, 
  Signal, 
  Heart, 
  MessageCircle, 
  Send, 
  Bookmark, 
  MoreHorizontal, 
  Music,
  Share2,
  Check
} from 'lucide-react';
import { brandInfo } from '../data/agencyData';
import { use3DTilt } from '../hooks/use3DTilt';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const slides = [
    { id: 'bts', title: 'Reel Shoot', icon: Film, live: true },
    { id: 'meta', title: 'Meta Ads', icon: BarChart3, live: true },
    { id: 'google', title: 'Google Ads', icon: Search, live: false }
  ];

  const [activeSlide, setActiveSlide] = useState(0); // 0 = BTS Shoot first, then Meta Ads, then Google Ads
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [timecode, setTimecode] = useState('00:04:18');
  const videoRef = useRef(null);

  const { tiltProps, glareStyle } = use3DTilt(6, shouldReduceMotion);

  // Auto-switch between the 3 modes every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4.5 * 1000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  // Keep video playing when on BTS slide
  useEffect(() => {
    if (slides[activeSlide]?.id === 'bts' && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [activeSlide]);

  // Dynamic timecode simulation for camera HUD feel
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const mins = String(now.getMinutes()).padStart(2, '0');
      const secs = String(now.getSeconds()).padStart(2, '0');
      setTimecode(`00:${mins}:${secs}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-grid" aria-hidden="true"></div>
      <div className="hero-subtle-glow" aria-hidden="true"></div>

      <div className="container">
        <div className="hero-layout">
          {/* Left Column: Authoritative Editorial Copy & CTAs */}
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="eyebrow-tag orange">
              <Sparkles size={14} />
              <span>Meta & Google Ads • IT Solutions • 4K Video Production</span>
            </div>

            <h1 className="hero-main-title">
              Scale With Ads. <br className="hero-br" />
              Build With Tech. <br className="hero-br" />
              <span style={{ color: 'var(--accent-orange)' }}>Move Up.</span>
            </h1>

            <p className="hero-main-subtitle">
              {brandInfo.subheading}
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                <span>Start a Project</span>
                <ArrowUpRight size={17} />
              </a>

              <a href="#services" className="btn-secondary">
                <span>Explore Services & Production</span>
              </a>
            </div>

            {/* Quick credibility bullet points */}
            <div className="hero-trust-bullets">
              <div className="hero-bullet-item">
                <CheckCircle2 size={15} color="var(--accent-orange)" />
                <span>Meta & Google Ads (Search, Reels & PMax • 0% Markup)</span>
              </div>
              <div className="hero-bullet-item">
                <CheckCircle2 size={15} color="var(--accent-orange)" />
                <span>Custom Websites, Web Apps & IT Solutions</span>
              </div>
              <div className="hero-bullet-item">
                <CheckCircle2 size={15} color="var(--accent-orange)" />
                <span>In-House 4K Video Production & Motorized Gimbal Reels</span>
              </div>
              <div className="hero-bullet-item">
                <CheckCircle2 size={15} color="var(--accent-orange)" />
                <span>Engineered for All Business Types & Industries</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Real Smartphone Mockup with Auto-Switch */}
          <motion.div
            className="hero-visual-wrapper"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div 
              className="hero-phone-stage"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Auto-Switch Mode Switcher Tabs above phone */}
              <div className="hero-phone-switcher">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    className={`phone-switch-tab ${activeSlide === idx ? 'active' : ''}`}
                    onClick={() => setActiveSlide(idx)}
                    aria-label={`Switch to ${s.title}`}
                  >
                    <div className="switch-tab-header">
                      <s.icon size={13} />
                      <span>{s.title}</span>
                      {s.live && <span className="tab-live-dot" aria-hidden="true" />}
                    </div>
                    <div className="tab-progress-track">
                      {activeSlide === idx && (
                        <div 
                          className="tab-progress-fill"
                          key={`prog-${idx}-${isPaused}`}
                          style={{
                            animationPlayState: isPaused ? 'paused' : 'running'
                          }}
                        />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Real Smartphone Mockup with 4 Floating Icons Behind Phone */}
              <div className="hero-phone-outer">
                {/* 1. Meta Floating Icon (Behind Upper-Left) */}
                <div className="phone-back-floater floater-meta" aria-hidden="true">
                  <div className="floater-icon-inner">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="#0081FB">
                      <path d="M12.001 7.424c-2.454 0-4.475 1.76-5.178 4.154-.421 1.436-.312 2.793.307 3.824.588.98 1.57 1.474 2.766 1.474 2.052 0 3.784-1.398 4.305-3.486.082-.329.135-.668.16-1.01.025.342.078.681.16 1.01.521 2.088 2.253 3.486 4.305 3.486 1.196 0 2.178-.494 2.766-1.474.619-1.031.728-2.388.307-3.824-.703-2.394-2.724-4.154-5.178-4.154-1.644 0-3.136.79-4.08 2.046-.944-1.256-2.436-2.046-4.08-2.046zm-2.105 7.683c-.702 0-1.218-.28-1.533-.805-.332-.553-.385-1.378-.147-2.19.431-1.468 1.696-2.535 3.199-2.535 1.341 0 2.454.858 2.85 2.155-.544 1.954-2.198 3.375-4.369 3.375zm8.579 0c-2.171 0-3.825-1.421-4.369-3.375.396-1.297 1.509-2.155 2.85-2.155 1.503 0 2.768 1.067 3.199 2.535.238.812.185 1.637-.147 2.19-.315.525-.831.805-1.533.805z" />
                    </svg>
                  </div>
                  <span className="floater-label">Meta</span>
                </div>

                {/* 2. Google Floating Icon (Behind Upper-Right) */}
                <div className="phone-back-floater floater-google" aria-hidden="true">
                  <div className="floater-icon-inner">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    </svg>
                  </div>
                  <span className="floater-label">Google</span>
                </div>

                {/* 3. Reel Floating Icon (Behind Lower-Left) */}
                <div className="phone-back-floater floater-reel" aria-hidden="true">
                  <div className="floater-icon-inner">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#EC4899" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </div>
                  <span className="floater-label">Reels</span>
                </div>

                {/* 4. Growth Floating Icon (Behind Lower-Right) */}
                <div className="phone-back-floater floater-growth" aria-hidden="true">
                  <div className="floater-icon-inner">
                    <TrendingUp size={16} color="#10B981" strokeWidth={2.6} />
                  </div>
                  <span className="floater-label">Growth</span>
                </div>

                {/* The Phone Chassis Frame with 3D Tilt */}
                <div 
                  className="hero-phone-wrapper"
                  {...tiltProps}
                >
                  <div className="phone-screen">
                    {/* Gloss / Glare Reflection */}
                    <div className="phone-glass-glare" style={glareStyle} />

                    {/* Dynamic Island */}
                    <div className="phone-dynamic-island" aria-hidden="true">
                      <span className="island-camera-lens" />
                      <span className="island-mic-dot" />
                    </div>

                    {/* Top Status Bar */}
                    <div className="phone-status-bar" aria-hidden="true">
                      <span>9:41</span>
                      <div className="status-bar-icons">
                        <Signal size={11} />
                        <Wifi size={11} />
                        <Battery size={13} />
                      </div>
                    </div>

                    {/* Phone Screen Viewport */}
                    <div className="phone-screen-viewport">
                      {/* SCREEN: BTS OF BRAND REEL SHOOT (LOADS FIRST) */}
                      {slides[activeSlide]?.id === 'bts' && (
                        <div className="phone-bts-screen">
                          <video
                            ref={videoRef}
                            src="/videos/hero_showcase.mp4"
                            poster="/images/gimbal_phone_videographer.jpg"
                            autoPlay
                            loop
                            muted={isMuted}
                            playsInline
                            className="phone-bts-video"
                          />

                          <div className="phone-bts-hud">
                            <div className="bts-top-strip">
                              <div className="bts-rec-indicator">
                                <span className="bts-rec-dot" />
                                <span>REC {timecode}</span>
                              </div>
                              <div className="bts-specs-pill">
                                4K 60FPS • PRORES
                              </div>
                            </div>

                            <div className="bts-center-reticle">
                              <Crosshair size={24} strokeWidth={1.5} />
                              <span className="bts-reticle-tag">3-AXIS GIMBAL BALANCED</span>
                            </div>

                            <div className="bts-reels-actions-stack">
                              <button type="button" className="bts-action-btn" aria-label="Like reel">
                                <Heart size={20} fill="#FFFFFF" />
                                <span>42.8K</span>
                              </button>
                              <button type="button" className="bts-action-btn" aria-label="Comment on reel">
                                <MessageCircle size={20} fill="#FFFFFF" />
                                <span>1,420</span>
                              </button>
                              <button type="button" className="bts-action-btn" aria-label="Share reel">
                                <Share2 size={20} />
                                <span>6.8K</span>
                              </button>
                              <div className="bts-spinning-audio">
                                <Music size={11} color="#FFFFFF" />
                              </div>
                            </div>

                            <div className="bts-bottom-strip">
                              <div className="bts-meta-caption">
                                <strong>@upswingagency</strong>
                                On-location commercial brand shoot with 3-axis motorized gimbal stabilizer.
                              </div>

                              <button
                                type="button"
                                className="bts-audio-btn"
                                onClick={toggleMute}
                                aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                              >
                                {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* SCREEN: META ADS (INSTAGRAM SPONSORED AD) */}
                      {slides[activeSlide]?.id === 'meta' && (
                        <div className="phone-meta-screen">
                          <div className="meta-ig-top-bar">
                            <span className="meta-ig-logo-text">Instagram</span>
                            <div className="meta-ig-header-icons">
                              <Heart size={16} />
                              <Send size={15} />
                            </div>
                          </div>

                          <div className="meta-author-row">
                            <div className="meta-author-info">
                              <div className="meta-story-ring">
                                <div className="meta-avatar-img">
                                  <TrendingUp size={14} strokeWidth={2.8} />
                                </div>
                              </div>
                              <div>
                                <div className="meta-author-name">upswingagency</div>
                                <div className="meta-sponsored-tag">Sponsored • Meta Advantage+</div>
                              </div>
                            </div>
                            <MoreHorizontal size={15} color="#94A3B8" />
                          </div>

                          <div className="meta-ad-media-frame">
                            <img
                              src="/images/meta_ads_display_campaign.jpg"
                              alt="Meta Sponsored Ad Campaign in action"
                              className="meta-ad-img"
                              loading="eager"
                            />
                            <div className="meta-roas-badge">
                              <Sparkles size={11} color="var(--accent-orange)" />
                              <span>5.4x Verified ROAS</span>
                            </div>
                          </div>

                          <a href="#contact" className="meta-cta-bar">
                            <span>Book Free Growth Audit</span>
                            <ArrowUpRight size={14} />
                          </a>

                          <div className="meta-post-actions">
                            <div className="meta-action-icons-left">
                              <Heart size={17} fill="#EF4444" color="#EF4444" />
                              <MessageCircle size={16} />
                              <Send size={15} />
                            </div>
                            <Bookmark size={16} />
                          </div>

                          <div className="meta-likes-text">14,820 likes</div>

                          <div className="meta-caption-box">
                            <strong>upswingagency</strong> Turn ad spend into predictable revenue. 0% markup, direct client ad account billing.
                            <div style={{ color: '#38BDF8', marginTop: '0.2rem', fontSize: '0.66rem' }}>
                              #PerformanceMarketing #MetaAds #Growth
                            </div>
                          </div>
                        </div>
                      )}

                      {/* SCREEN: GOOGLE ADS (SEARCH & PERFORMANCE MAX) */}
                      {slides[activeSlide]?.id === 'google' && (
                        <div className="phone-google-screen">
                          <div className="google-mobile-search-bar">
                            <span className="google-g-logo">G</span>
                            <span className="google-search-query-text">Best Growth Marketing Agency Delhi NCR</span>
                            <Search size={13} color="#94A3B8" />
                          </div>

                          <div className="google-filters-strip">
                            <span className="google-filter-item active">All</span>
                            <span className="google-filter-item">Images</span>
                            <span className="google-filter-item">Maps</span>
                            <span className="google-filter-item">News</span>
                          </div>

                          <div className="google-ad-result-card">
                            <div className="google-sponsored-badge">
                              <span className="google-sponsored-tag">Sponsored</span>
                              <span>•</span>
                              <span className="google-domain-url">upswingagency.com</span>
                            </div>

                            <h3 className="google-ad-headline">
                              Upswing Agency | #1 Meta & Google Ads + IT Web Solutions
                            </h3>

                            <p className="google-ad-snippet">
                              High-converting Search, YouTube & PMax campaigns with 0% spend markup. Direct client ad account billing & verified ROAS.
                            </p>

                            <div className="google-sitelinks-grid">
                              <a href="#video-studio" className="google-sitelink-chip">
                                4K Video Production
                                <span>Cinema camera & reels</span>
                              </a>
                              <a href="#capabilities-hub" className="google-sitelink-chip">
                                Custom Web & IT Apps
                                <span>React & cloud portals</span>
                              </a>
                              <a href="#about" className="google-sitelink-chip">
                                Verified 5.2x ROAS
                                <span>Zero vanity metrics</span>
                              </a>
                              <a href="#contact" className="google-sitelink-chip">
                                Free Strategy Call
                                <span>Direct founder consult</span>
                              </a>
                            </div>

                            <div className="google-performance-metric-pill">
                              <Check size={12} />
                              <span>Google Partner • 99.4% Optimization Score</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom iOS Home Indicator */}
                    <div className="phone-home-indicator" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
