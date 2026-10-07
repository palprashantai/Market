import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { processSteps } from '../data/agencyData';

export default function ProcessSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="process" className="section section-dark process-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow-tag dark-orange">
            Structured Execution
          </span>
          <h2 className="section-headline">
            From First Call to Compounding Growth.
          </h2>
          <p className="section-subtext">
            A transparent, 5-stage framework designed to eliminate guesswork and keep every campaign, video shoot, and creative deliverable aligned.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="process-steps-row">
          {processSteps.map((item, idx) => (
            <motion.div
              key={item.step}
              className="process-step-node"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
              <div className="step-counter-badge">{item.step}</div>
              <div className="step-content-card">
                <span className="step-mini-name">{item.name}</span>
                <h3 className="step-card-title">{item.title}</h3>
                <p className="step-card-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
