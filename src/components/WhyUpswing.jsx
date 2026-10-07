import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Layers, ShieldCheck } from 'lucide-react';
import { whyUpswingPillars, brandInfo } from '../data/agencyData';

export default function WhyUpswing() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="why-us" className="section why-upswing-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow-tag orange">Integrated Agency Model</span>
          <h2 className="section-headline">
            Paid Ads + IT Solutions + Video Production
          </h2>
          <p className="section-subtext">
            {brandInfo.coreDifferentiator}
          </p>
        </div>

        {/* The Cohesive Model Callout Box */}
        <div style={{
          background: 'var(--navy-900)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '16px',
          padding: '2.5rem 2rem',
          marginBottom: '3.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-orange)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
              <Layers size={16} />
              <span>The Problem With Fragmented Agencies</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.75rem' }}>
              Stop Juggling Disconnected Freelancers & Agencies
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
              Most businesses lose momentum coordinating between a web developer who doesn't understand ads, a freelance video crew who doesn't track conversions, and an ad buyer blaming your creative. Misalignment wastes time and capital.
            </p>
          </div>

          <div style={{ background: 'var(--navy-950)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '1.75rem' }}>
            <div style={{ color: '#10B981', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={16} />
              <span>The Upswing Advantage</span>
            </div>
            <p style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 600, lineHeight: 1.5, marginBottom: '0.75rem' }}>
              Paid advertising, custom IT web engineering, and commercial 4K content — under one unified team.
            </p>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>
              We build your high-speed web application or corporate portal, produce commercial 4K video assets with our in-house crew, and manage high-ROI Meta & Google Ads campaigns directly.
            </p>
          </div>
        </div>

        {/* 5 Operating Pillars Grid */}
        <div className="why-pillars-grid">
          {whyUpswingPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.num}
              className="why-pillar-card"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
              <div className="pillar-num-header">
                <span className="pillar-number">{pillar.num}</span>
                <div className="pillar-hairline"></div>
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
