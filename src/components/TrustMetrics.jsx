import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { trustMetrics } from '../data/agencyData';

export default function TrustMetrics() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="trust-metrics-section">
      <div className="container">
        <div className="trust-metrics-grid">
          {trustMetrics.map((item, index) => (
            <motion.div
              key={index}
              className="trust-metric-card"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="metric-large-number">{item.value}</div>
              <div className="metric-main-label">{item.label}</div>
              <div className="metric-sub-note">{item.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
