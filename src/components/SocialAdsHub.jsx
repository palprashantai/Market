import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  TrendingUp, 
  ArrowUpRight, 
  CheckCircle2, 
  BarChart3, 
  Sparkles, 
  Code2,
  Film
} from 'lucide-react';
import { use3DTilt } from '../hooks/use3DTilt';

export default function SocialAdsHub() {
  const shouldReduceMotion = useReducedMotion();
  const tiltCard1 = use3DTilt(7, shouldReduceMotion);
  const tiltCard2 = use3DTilt(7, shouldReduceMotion);
  const tiltCard3 = use3DTilt(7, shouldReduceMotion);

  return (
    <section id="capabilities-hub" className="section section-dark social-ads-hub-section">
      <div className="container">
        <div className="section-header centered">
          <span className="eyebrow-tag orange">
            <Sparkles size={14} />
            <span>Integrated Growth & Technology Engine</span>
          </span>
          <h2 className="section-headline">
            Paid Ads. IT Solutions. 4K Video Production.
          </h2>
          <p className="section-subtext">
            We engineered Upswing to eliminate fragmented agency silos for all business types. Whether you need high-ROI Meta & Google Ads, custom web applications and IT infrastructure, or commercial 4K video shoots, we deliver all three under one unified roof.
          </p>
        </div>

        {/* 3-Pillar Equal Grid */}
        <div className="social-ads-triple-grid">
          {/* Card 1: Live Meta & Google Ads Command Center */}
          <motion.div
            className="social-ad-hub-card"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
          >
            {/* 3D Tilt Frame */}
            <div 
              className="hub-media-frame hub-3d-card"
              {...tiltCard1.tiltProps}
            >
              <div style={tiltCard1.glareStyle} />
              <img
                src="/images/meta_ads_display_campaign.jpg"
                alt="Meta Ads Manager and Google Ads live dashboard showing active campaigns and sponsored ad video on smartphone"
                className="hub-display-img"
                loading="lazy"
              />
              <div className="hub-media-overlay"></div>

              {/* Badges on image */}
              <div className="hub-floating-badge top-left">
                <span className="hub-live-dot"></span>
                <span>Meta & Google Ads Live</span>
              </div>

              <div className="hub-floating-badge bottom-right">
                <TrendingUp size={13} color="#10B981" />
                <span>ROAS 5.2x - 6.8x Active</span>
              </div>
            </div>

            {/* Content Details */}
            <div className="hub-card-content">
              <div className="hub-category-tag">
                <BarChart3 size={15} color="var(--accent-orange)" />
                <span>Pillar 01 • Paid Advertising</span>
              </div>
              <h3 className="hub-card-title">Meta & Google Ads Performance</h3>
              <p className="hub-card-desc">
                Disciplined paid media scaling across Meta Advantage+ (Instagram Sponsored Reels, Feeds) and Google Ads (Search, Performance Max, YouTube).
              </p>

              <div className="hub-feature-checklist">
                <div className="hub-check-item">
                  <CheckCircle2 size={16} color="var(--accent-orange)" />
                  <span>Direct client ad account billing (0% spend markup)</span>
                </div>
                <div className="hub-check-item">
                  <CheckCircle2 size={16} color="var(--accent-orange)" />
                  <span>Sponsored video ads tested with dynamic hooks</span>
                </div>
                <div className="hub-check-item">
                  <CheckCircle2 size={16} color="var(--accent-orange)" />
                  <span>Conversions API (CAPI) & Google Tag Manager</span>
                </div>
              </div>

              <div className="hub-action-row">
                <a href="#contact" className="btn-primary" style={{ width: '100%' }}>
                  <span>Launch Paid Ad Campaigns</span>
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 2: IT Solutions & Custom Web Development */}
          <motion.div
            className="social-ad-hub-card"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            {/* 3D Tilt Frame */}
            <div 
              className="hub-media-frame hub-3d-card"
              {...tiltCard2.tiltProps}
            >
              <div style={tiltCard2.glareStyle} />
              <img
                src="/images/it_solutions_web_dev.jpg"
                alt="Modern IT solutions, custom software engineering and responsive web development workstation"
                className="hub-display-img"
                loading="lazy"
              />
              <div className="hub-media-overlay"></div>

              {/* Badges on image */}
              <div className="hub-floating-badge top-left">
                <Code2 size={13} color="#38BDF8" />
                <span>Custom IT & Web Engineering</span>
              </div>

              <div className="hub-floating-badge bottom-right">
                <span className="hub-live-dot" style={{ background: '#38BDF8', boxShadow: '0 0 8px #38BDF8' }}></span>
                <span>99.9% Speed & Uptime</span>
              </div>
            </div>

            {/* Content Details */}
            <div className="hub-card-content">
              <div className="hub-category-tag" style={{ color: '#38BDF8' }}>
                <Code2 size={15} color="#38BDF8" />
                <span>Pillar 02 • IT & Web Solutions</span>
              </div>
              <h3 className="hub-card-title">Custom Websites & Web Applications</h3>
              <p className="hub-card-desc">
                High-speed business websites, custom customer portals, e-commerce storefronts, and cloud IT infrastructure engineered for reliability and conversion.
              </p>

              <div className="hub-feature-checklist">
                <div className="hub-check-item">
                  <CheckCircle2 size={16} color="#38BDF8" />
                  <span>Sub-1s load time with 95+ Google PageSpeed score</span>
                </div>
                <div className="hub-check-item">
                  <CheckCircle2 size={16} color="#38BDF8" />
                  <span>Custom web portals, CRMs & WhatsApp API routing</span>
                </div>
                <div className="hub-check-item">
                  <CheckCircle2 size={16} color="#38BDF8" />
                  <span>100% full ownership of source code, domain & hosting</span>
                </div>
              </div>

              <div className="hub-action-row">
                <a href="#contact" className="btn-light-outline" style={{ width: '100%' }}>
                  <span>Discuss Web & IT Project</span>
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 3: In-House 4K Video Production & Reels */}
          <motion.div
            className="social-ad-hub-card"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            {/* 3D Tilt Frame */}
            <div 
              className="hub-media-frame hub-3d-card"
              {...tiltCard3.tiltProps}
            >
              <div style={tiltCard3.glareStyle} />
              <img
                src="/images/gimbal_smooth_motion_capture.jpg"
                alt="Videographer shooting commercial dynamic video on 3-axis motorized smartphone gimbal stabilizer"
                className="hub-display-img"
                loading="lazy"
              />
              <div className="hub-media-overlay"></div>

              {/* Badges on image */}
              <div className="hub-floating-badge top-left">
                <Film size={13} color="var(--accent-orange)" />
                <span>In-House 4K Studio & Gimbal</span>
              </div>

              <div className="hub-floating-badge bottom-right">
                <span className="hub-live-dot" style={{ background: '#EF4444', boxShadow: '0 0 8px #EF4444' }}></span>
                <span>9:16 Social Reels Ready</span>
              </div>
            </div>

            {/* Content Details */}
            <div className="hub-card-content">
              <div className="hub-category-tag">
                <Film size={15} color="var(--accent-orange)" />
                <span>Pillar 03 • Creative Production</span>
              </div>
              <h3 className="hub-card-title">4K Commercial Video & Viral Reels</h3>
              <p className="hub-card-desc">
                On-location commercial shoots using motorized 3-axis gimbal stabilizers and studio lighting to produce scroll-stopping 9:16 reels and 16:9 brand films.
              </p>

              <div className="hub-feature-checklist">
                <div className="hub-check-item">
                  <CheckCircle2 size={16} color="var(--accent-orange)" />
                  <span>3-Axis motorized gimbal for buttery-smooth dynamic motion</span>
                </div>
                <div className="hub-check-item">
                  <CheckCircle2 size={16} color="var(--accent-orange)" />
                  <span>In-house color grading, beat-synced cuts & Foley ASMR sound</span>
                </div>
                <div className="hub-check-item">
                  <CheckCircle2 size={16} color="var(--accent-orange)" />
                  <span>Per-shoot and monthly content retainer packages</span>
                </div>
              </div>

              <div className="hub-action-row">
                <a href="#contact" className="btn-light-outline" style={{ width: '100%' }}>
                  <span>Plan Your Video Shoot</span>
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
