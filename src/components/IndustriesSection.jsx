import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  ShoppingBag, 
  Activity, 
  Utensils, 
  HeartPulse, 
  Home, 
  GraduationCap, 
  MapPin 
} from 'lucide-react';
import { industriesServed } from '../data/agencyData';

const iconMap = {
  Building2,
  ShoppingBag,
  Activity,
  Utensils,
  HeartPulse,
  Home,
  GraduationCap,
  MapPin
};

export default function IndustriesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="industries" className="section industries-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow-tag orange">Industry Verticals</span>
          <h2 className="section-headline">Engineered for All Business Types.</h2>
          <p className="section-subtext">
            Whether you need high-ROI Meta & Google Ads, custom web applications & IT infrastructure, or commercial 4K video shoots, we tailor our technology, creative pacing, and media spend to your specific sector dynamics.
          </p>
        </div>

        <div className="industries-grid">
          {industriesServed.map((item, idx) => {
            const Icon = iconMap[item.icon] || Building2;
            return (
              <motion.div
                key={item.name}
                className="industry-cell-card"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
              >
                <div className="industry-cell-icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={2.2} />
                </div>
                <h3 className="industry-cell-name">{item.name}</h3>
                <p className="industry-cell-desc">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
