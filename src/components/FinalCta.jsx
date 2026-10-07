import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function FinalCta() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="final-cta-section">
      <div className="container">
        <motion.div
          className="final-cta-box"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="final-cta-text-side">
            <span className="eyebrow-tag dark-orange" style={{ marginBottom: '0.75rem' }}>
              Take The Next Step
            </span>
            <h2 className="final-cta-title">
              Ready to Move Your Brand Up?
            </h2>
            <p className="final-cta-sub">
              Whether you need high-ROI Meta & Google Ads, custom websites & IT web applications, or commercial 4K video production, we'll engineer the exact roadmap your business needs to grow.
            </p>
          </div>

          <div className="final-cta-actions">
            <a href="#contact" className="btn-primary final-cta-primary-btn">
              <span>Start a Conversation</span>
              <ArrowUpRight size={17} />
            </a>

            <a href="#services" className="btn-secondary">
              <span>Explore Services</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
