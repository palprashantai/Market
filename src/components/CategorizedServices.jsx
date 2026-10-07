import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  TrendingUp,
  Code2,
  Film,
  Palette
} from 'lucide-react';
import { serviceCategories } from '../data/agencyData';

const categoryIcons = {
  ads: TrendingUp,
  'it-solutions': Code2,
  production: Film,
  'brand-growth': Palette
};

const categoryImages = {
  ads: '/images/meta_ads_display_campaign.jpg',
  'it-solutions': '/images/it_solutions_web_dev.jpg',
  production: '/images/gimbal_phone_videographer.jpg',
  'brand-growth': '/images/instagram_profile_phone.jpg'
};

const categoryCaptions = {
  ads: { title: 'Meta Ads Manager & Live Sponsored Feed', tag: 'Verified Performance Tracking' },
  'it-solutions': { title: 'Custom Web Apps, Portals & IT Solutions', tag: 'Modern Full-Stack Engineering' },
  production: { title: 'Handheld 3-Axis Gimbal & Studio Filming', tag: 'In-House Production Studio' },
  'brand-growth': { title: 'Instagram Brand Architecture & Organic SEO', tag: 'Distinctive Visual Identity' }
};

export default function CategorizedServices() {
  const [activeTab, setActiveTab] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const currentCategory = serviceCategories[activeTab] || serviceCategories[0];
  const CurrentIcon = categoryIcons[currentCategory.id] || TrendingUp;
  const currentImage = categoryImages[currentCategory.id] || '/images/meta_ads_display_campaign.jpg';

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow-tag orange">Core Capabilities</span>
          <h2 className="section-headline">
            Paid Ads, IT Solutions & Creative Video Production.
          </h2>
          <p className="section-subtext">
            Everything your business needs to scale. We unite targeted Meta & Google Ads, bespoke websites & software development, and cinematic in-house video production into one integrated engine.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="services-category-tabs" role="tablist">
          {serviceCategories.map((cat, idx) => {
            const Icon = categoryIcons[cat.id] || Compass;
            const isActive = activeTab === idx;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`services-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                <Icon size={18} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Category Showcase */}
        <div className="services-showcase-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory.id}
              className="services-panel-grid"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -15 }}
              transition={{ duration: 0.35 }}
            >
              {/* Left Column: Scope & Deliverables */}
              <div className="services-panel-content">
                <div className="service-category-badge">
                  <CurrentIcon size={16} />
                  <span>{currentCategory.badge}</span>
                </div>

                <h3 className="services-panel-title">{currentCategory.title}</h3>
                <p className="services-panel-desc">{currentCategory.description}</p>

                <div className="deliverables-heading">Key Deliverables:</div>
                <ul className="deliverables-list">
                  {currentCategory.deliverables.map((item, i) => (
                    <li key={i} className="deliverable-item">
                      <div className="deliverable-check-icon" aria-hidden="true">
                        <Check size={14} strokeWidth={2.8} />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="services-panel-actions">
                  <a
                    href="#contact"
                    className="btn-primary"
                  >
                    <span>{currentCategory.ctaText}</span>
                    <ArrowUpRight size={17} />
                  </a>

                  <a href="#contact" className="btn-light-outline">
                    <span>Discuss Your Goals</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual System & Media Preview */}
              <div className="services-panel-visual">
                <div className="service-visual-frame">
                  <img
                    src={currentImage}
                    alt={`${currentCategory.title} production and creative execution`}
                    className="service-visual-img"
                    loading="lazy"
                  />
                  <div className="service-visual-overlay"></div>
                  <div className="service-visual-caption">
                    <span className="visual-caption-title">{categoryCaptions[currentCategory.id]?.title || `${currentCategory.title} Execution`}</span>
                    <span className="visual-caption-tag">{categoryCaptions[currentCategory.id]?.tag || 'Upswing In-House Studio'}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
