import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Smartphone, 
  Sparkles, 
  Crosshair, 
  ArrowUpRight, 
  Zap, 
  Radio, 
  Layers,
  Flame
} from 'lucide-react';
import { use3DTilt } from '../hooks/use3DTilt';

export default function GimbalShowcase() {
  const shouldReduceMotion = useReducedMotion();
  const [activeView, setActiveView] = useState('tracking'); // 'tracking' | 'studio'
  const [activeHotspot, setActiveHotspot] = useState(null);

  const { tiltProps, glareStyle } = use3DTilt(7, shouldReduceMotion);

  const hotspots = [
    {
      id: 1,
      x: '38%',
      y: '32%',
      title: 'Flagship Mobile 4K 60fps',
      desc: '10-bit ProRes HDR recording natively framed for 9:16 vertical social feeds.'
    },
    {
      id: 2,
      x: '46%',
      y: '58%',
      title: '3-Axis Brushless Motors',
      desc: 'Sub-millisecond gyro correction eliminates footsteps and micro-jitter.'
    },
    {
      id: 3,
      x: '75%',
      y: '22%',
      title: 'Studio Lighting Synchrony',
      desc: 'Balanced color temperature matching background softboxes and neon rim lights.'
    }
  ];

  const specs = [
    {
      icon: Zap,
      label: 'Ultra-Smooth Tracking',
      desc: 'Buttery pan, tilt and roll motions for fast-paced retail, restaurant, fitness and brand walk-throughs.'
    },
    {
      icon: Flame,
      label: 'Engineered for Retention',
      desc: 'Dynamic motion captures user attention within the first 1.2 seconds, boosting Instagram Reel completion rates.'
    },
    {
      icon: Radio,
      label: 'Wireless 24-bit Audio',
      desc: 'Directional wireless microphones capture crisp dialogue, ambient ASMR and authentic sound bites.'
    },
    {
      icon: Layers,
      label: 'Turnkey Post-Production',
      desc: 'Rhythm cuts, sound effects, bespoke typography hooks and color grading optimized for OLED smartphone screens.'
    }
  ];

  return (
    <section id="gimbal-studio" className="section section-dark gimbal-showcase-section">
      <div className="container">
        <div className="section-header-row">
          <div className="section-header" style={{ marginBottom: 0 }}>
            <span className="eyebrow-tag orange">
              <Sparkles size={14} />
              <span>Mobile Gimbal & 4K Reel Production</span>
            </span>
            <h2 className="section-headline">
              Engineered for Motion. <br />
              Stabilized for Scale.
            </h2>
            <p className="section-subtext">
              We bring motorized 3-axis gimbal stabilizers and flagship cinema phones directly to your business to produce scroll-stopping, broadcast-quality reels that turn views into customers.
            </p>
          </div>

          <a href="#contact" className="btn-primary">
            <span>Book a Reel Shoot</span>
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* Main Interactive 3D Showcase Stage */}
        <div className="gimbal-stage-layout">
          {/* Left Column: 3D Perspective Interactive Rig Stage */}
          <motion.div
            className="gimbal-stage-media-wrap"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            {/* View Switcher Pills */}
            <div className="gimbal-view-switchers">
              <button
                type="button"
                className={`gimbal-switch-pill ${activeView === 'tracking' ? 'active' : ''}`}
                onClick={() => setActiveView('tracking')}
              >
                <Crosshair size={14} />
                <span>Dynamic Action Shoot (3-Axis Gimbal)</span>
              </button>
              <button
                type="button"
                className={`gimbal-switch-pill ${activeView === 'studio' ? 'active' : ''}`}
                onClick={() => setActiveView('studio')}
              >
                <Smartphone size={14} />
                <span>Commercial Set Production</span>
              </button>
            </div>

            {/* 3D Tilt Card Frame */}
            <div 
              className="gimbal-3d-display-card"
              {...tiltProps}
            >
              <div style={glareStyle} />

              <div className="gimbal-image-viewport">
                <img
                  src={activeView === 'tracking' 
                    ? '/images/gimbal_smooth_motion_capture.jpg' 
                    : '/images/gimbal_phone_videographer.jpg'}
                  alt="Videographer shooting high-energy brand content with motorized 3-axis smartphone gimbal stabilizer"
                  className="gimbal-display-img"
                  loading="lazy"
                />

                <div className="gimbal-vignette-overlay"></div>

                {/* Hotspot Interactive Markers */}
                {hotspots.map((h) => (
                  <div
                    key={h.id}
                    className={`gimbal-hotspot-marker ${activeHotspot === h.id ? 'active' : ''}`}
                    style={{ left: h.x, top: h.y }}
                    onMouseEnter={() => setActiveHotspot(h.id)}
                    onMouseLeave={() => setActiveHotspot(null)}
                    onClick={() => setActiveHotspot(activeHotspot === h.id ? null : h.id)}
                  >
                    <span className="hotspot-pulse"></span>
                    <span className="hotspot-dot">{h.id}</span>

                    {/* Popover Callout */}
                    <div className="hotspot-tooltip">
                      <div className="tooltip-title">{h.title}</div>
                      <div className="tooltip-desc">{h.desc}</div>
                    </div>
                  </div>
                ))}

                {/* HUD Tech Badges in 3D Space */}
                <div className="gimbal-float-hud top-left">
                  <span className="hud-mini-dot"></span>
                  <span>GYRO STABILIZATION: ACTIVE</span>
                </div>

                <div className="gimbal-float-hud bottom-right">
                  <span>9:16 SOCIAL REEL READY</span>
                </div>
              </div>

              {/* Bottom Equipment Telemetry */}
              <div className="gimbal-telemetry-bar">
                <div className="telemetry-cell">
                  <span className="t-label">STABILIZATION</span>
                  <span className="t-val">3-Axis Motorized Gyro</span>
                </div>
                <div className="telemetry-cell">
                  <span className="t-label">SENSOR PROFILE</span>
                  <span className="t-val">4K HDR • 60/120 FPS</span>
                </div>
                <div className="telemetry-cell">
                  <span className="t-label">DELIVERY SPEED</span>
                  <span className="t-val">24-48 Hours Ready</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Spec Cards & Proof Points */}
          <div className="gimbal-specs-column">
            <div className="gimbal-why-card-top">
              <h3 className="specs-main-heading">
                Why Phone + Gimbal Outperforms Heavy Rigs on Social Media
              </h3>
              <p className="specs-main-subtext">
                Heavy cinema cameras often look too corporate for social feeds. Our combination of motorized phone gimbals and high-CRI lighting delivers cinematic movement while retaining the authentic, relatable intimacy that algorithms prioritize.
              </p>
            </div>

            <div className="gimbal-specs-grid">
              {specs.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    className="gimbal-spec-item"
                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                  >
                    <div className="spec-icon-box">
                      <Icon size={18} color="var(--accent-orange)" />
                    </div>
                    <div>
                      <h4 className="spec-item-title">{item.label}</h4>
                      <p className="spec-item-desc">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Reel Booking Callout Box */}
            <div className="gimbal-cta-banner-box">
              <div className="cta-banner-info">
                <div className="cta-banner-heading">Need High-Impact Reels for Your Brand?</div>
                <div className="cta-banner-sub">We deploy our in-house videographer with full gimbal and lighting kit to Noida, Delhi NCR & surrounding regions.</div>
              </div>
              <a href="#contact" className="btn-secondary" style={{ whiteSpace: 'nowrap' }}>
                <span>Inquire About Shoot</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
