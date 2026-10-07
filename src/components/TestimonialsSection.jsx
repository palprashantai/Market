import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/agencyData';

export default function TestimonialsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow-tag orange">Verified Feedback</span>
          <h2 className="section-headline">Direct Words From Client Partners.</h2>
          <p className="section-subtext">
            We value long-term partnerships built on candor, reliable production delivery, and transparent media reporting.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              className="testimonial-card"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
            >
              <div className="testimonial-quote-icon">
                <Quote size={20} color="var(--accent-orange)" />
              </div>
              <p className="testimonial-quote-text">"{item.quote}"</p>

              <div className="testimonial-author-box">
                <div className="author-avatar-initials">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <div className="author-name">{item.author}</div>
                  <div className="author-role-company">
                    {item.role} • <span>{item.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
