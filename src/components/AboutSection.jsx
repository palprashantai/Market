import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Camera,
  Film,
  BarChart3,
  Layers,
  ShieldCheck,
  Check,
  Award,
  MapPin,
  Sparkles,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2
} from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';
import { brandInfo } from '../data/agencyData';

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const units = [
    {
      icon: Camera,
      title: 'Cinematography & Lighting',
      desc: 'Professional cinematographers skilled in directional softbox lighting, motorized gimbal motion, macro details, and architectural composition.',
      tags: ['Cinema 4K Cameras', 'Motorized Gimbals', 'Studio Softboxes']
    },
    {
      icon: Film,
      title: 'Editorial & Color Grading',
      desc: 'Full-time post-production editors crafting 9:16 vertical hooks, sound design with ASMR effects, beat-synced pacing, and custom color grading.',
      tags: ['DaVinci Resolve', 'Premiere Pro', 'Sound FX & Foley']
    },
    {
      icon: BarChart3,
      title: 'Performance Media Buying',
      desc: 'Certified Google Ads and Meta Ads media buyers configuring pixel triggers, search hygiene, and retargeting pools with zero ad spend markup.',
      tags: ['Google Search & PMax', 'Meta Advantage+', 'Tag Manager Tracking']
    },
    {
      icon: Layers,
      title: 'Brand & Graphic Design',
      desc: 'Brand designers developing vector logo marks, cohesive typography scales, commercial packaging layouts, and high-converting carousel assets.',
      tags: ['Brand Systems', 'Social Carousels', 'Vector Identity']
    }
  ];

  return (
    <section id="about" className="section section-dark about-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow-tag orange">
            <Sparkles size={14} />
            <span>Studio Identity & Philosophy</span>
          </span>
          <h2 className="section-headline">
            Good Marketing Should Do More Than Look Good.
          </h2>
          <p className="section-subtext">
            We believe marketing should move a business forward. Upswing brings strategy, creative cinematography, custom IT solutions, and disciplined ad distribution under one roof to help brands earn attention, trust, and growth.
          </p>
        </div>

        {/* Founder & Leadership Spotlight */}
        <motion.div
          className="founder-spotlight-card"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="founder-grid">
            <div className="founder-media-col">
              <div className="founder-image-wrapper">
                <img
                  src={brandInfo.founder.image}
                  alt={brandInfo.founder.name}
                  className="founder-portrait-img"
                  loading="lazy"
                />
                <div className="founder-verified-badge">
                  <BadgeCheck size={16} />
                  <span>Founder & Lead Strategist</span>
                </div>
              </div>
              <div className="founder-social-bar">
                <a
                  href={brandInfo.founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="founder-linkedin-link"
                  aria-label="Prashant Pal on LinkedIn"
                >
                  <LinkedinIcon size={18} color="#0A66C2" />
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <div className="founder-info-col">
              <div className="founder-badge-row">
                <span className="eyebrow-tag orange">
                  <Sparkles size={13} />
                  <span>Leadership & Agency Vision</span>
                </span>
                <span className="founder-experience-chip">Delhi NCR • Serving Globally</span>
              </div>

              <h3 className="founder-headline">
                "We built Upswing to give ambitious brands what fractured agencies never could: true end-to-end accountability."
              </h3>

              <div className="founder-body-copy">
                <p>
                  Most businesses find themselves trapped having to coordinate between three separate vendors: a video production crew that doesn't understand ad conversions, a media buyer who runs generic static banners, and a development team disconnected from commercial revenue.
                </p>
                <p>
                  At Upswing, we unified all three disciplines. We run performance Meta & Google Ads with 100% direct-account billing and zero markup, build custom high-speed web infrastructure, and bring professional cinema production directly to your premises.
                </p>
              </div>

              <div className="founder-credentials-grid">
                <div className="founder-credential-pill">
                  <CheckCircle2 size={15} color="var(--accent-orange)" />
                  <span>Paid Ads & ROAS Optimization</span>
                </div>
                <div className="founder-credential-pill">
                  <CheckCircle2 size={15} color="var(--accent-orange)" />
                  <span>Custom IT & Web Architecture</span>
                </div>
                <div className="founder-credential-pill">
                  <CheckCircle2 size={15} color="var(--accent-orange)" />
                  <span>Cinematic Commercial Production</span>
                </div>
                <div className="founder-credential-pill">
                  <CheckCircle2 size={15} color="var(--accent-orange)" />
                  <span>Direct Executive Ownership</span>
                </div>
              </div>

              <div className="founder-signature-row">
                <div>
                  <h4 className="founder-name">{brandInfo.founder.name}</h4>
                  <p className="founder-title">{brandInfo.founder.role}, Upswing Agency</p>
                </div>
                <a href="#contact" className="btn-primary founder-cta-btn">
                  <span>Discuss Your Project</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dedicated Team Units */}
        <div className="team-units-grid">
          {units.map((unit, idx) => {
            const Icon = unit.icon;
            return (
              <motion.div
                key={unit.title}
                className="team-unit-card"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <div className="team-unit-icon" aria-hidden="true">
                  <Icon size={24} color="var(--accent-orange)" />
                </div>
                <h3 className="team-unit-title">{unit.title}</h3>
                <p className="team-unit-desc">{unit.desc}</p>
                <ul className="team-unit-tags">
                  {unit.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Studio Location & Delhi NCR Presence Box */}
        <div className="about-partnership-box" style={{ marginTop: '3.5rem' }}>
          <div className="partnership-header">
            <div className="section-pill">
              <MapPin size={14} />
              <span>Studio Location & Presence</span>
            </div>
            <h3 className="section-title" style={{ fontSize: '1.75rem', marginTop: '0.75rem' }}>
              Rooted in Delhi NCR, Serving Forward-Thinking Brands
            </h3>
            <p className="section-subtitle" style={{ margin: '0 0 2rem 0', textAlign: 'left' }}>
              Based in {brandInfo.location}, our production crew travels on-location across North India and major business hubs, while our digital performance and strategy teams serve clients globally.
            </p>
          </div>

          <div className="partnership-points-grid">
            <div className="partnership-point">
              <ShieldCheck size={22} color="var(--accent-orange)" style={{ flexShrink: 0 }} />
              <div>
                <h4>Transparent Commercial Terms</h4>
                <p>Clear statement-of-work documentation, defined revision windows, direct ad billing, and zero surprise fees.</p>
              </div>
            </div>

            <div className="partnership-point">
              <Check size={22} color="var(--accent-orange)" style={{ flexShrink: 0 }} />
              <div>
                <h4>Direct WhatsApp & Call Desk</h4>
                <p>Fast, direct communication with your dedicated account strategist and production crew without layers of bureaucracy.</p>
              </div>
            </div>

            <div className="partnership-point">
              <Award size={22} color="var(--accent-orange)" style={{ flexShrink: 0 }} />
              <div>
                <h4>Disciplined Reporting Cadence</h4>
                <p>Unfiltered updates showing real platform metrics, inquiry volumes, and verified commercial progression.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
