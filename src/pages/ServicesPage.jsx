import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Check, Film, Layers, Compass, BarChart3, ShieldCheck } from 'lucide-react';
import { serviceCategories, detailedServices } from '../data/agencyData';
import FinalCta from '../components/FinalCta';

export default function ServicesPage() {
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'strategy':
        return <Compass size={22} color="var(--accent-orange)" />;
      case 'digital-growth':
        return <BarChart3 size={22} color="var(--accent-orange)" />;
      case 'creative':
        return <Layers size={22} color="var(--accent-orange)" />;
      case 'production':
        return <Film size={22} color="var(--accent-orange)" />;
      default:
        return <Sparkles size={22} color="var(--accent-orange)" />;
    }
  };

  return (
    <div className="page-view">
      {/* Services Header */}
      <section className="page-header-section">
        <div className="container">
          <div className="section-pill">
            <Sparkles size={14} />
            <span>Capabilities & Solutions</span>
          </div>
          <h1 className="page-header-title">
            Integrated Growth. From Strategy to Cinema Execution.
          </h1>
          <p className="page-header-desc">
            We don’t offer bloated, disconnected retainers. We align brand positioning, disciplined ad buying, and high-impact visual storytelling into a unified commercial engine.
          </p>
        </div>
      </section>

      {/* 4 Core Pillars Overview */}
      <section className="section-padding">
        <div className="container">
          <div className="services-categories-stack">
            {serviceCategories.map((cat, idx) => (
              <div key={cat.id} className="service-category-block">
                <div className="service-category-header">
                  <div className="cat-icon-pill">
                    {getCategoryIcon(cat.id)}
                    <span className="cat-badge-tag">{cat.badge}</span>
                  </div>
                  <span className="cat-step-index">0{idx + 1}</span>
                </div>

                <div className="service-category-body-grid">
                  <div className="cat-info-col">
                    <h2 className="cat-title">{cat.title}</h2>
                    <p className="cat-desc">{cat.description}</p>
                    <Link to={`/services/${cat.serviceSlug}`} className="cat-cta-link">
                      <span>{cat.ctaText}</span>
                      <ArrowUpRight size={17} />
                    </Link>
                  </div>

                  <div className="cat-deliverables-col">
                    <h3 className="deliverables-heading">Key Deliverables & Scope</h3>
                    <ul className="deliverables-list">
                      {cat.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="deliverable-item">
                          <Check size={16} className="del-check-icon" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Deep-Dives Catalog */}
      <section className="section-padding" style={{ background: 'var(--navy-900)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header-centered">
            <span className="section-pill">Deep Dives</span>
            <h2 className="section-title">Explore Specialized Agency Services</h2>
            <p className="section-subtitle">
              Click through for in-depth technical blueprints, deliverables, processes, and FAQs.
            </p>
          </div>

          <div className="detailed-services-grid">
            {detailedServices.map((srv) => (
              <Link key={srv.slug} to={`/services/${srv.slug}`} className="detailed-service-card">
                <div className="srv-card-top">
                  <span className="spec-badge">{srv.category}</span>
                  <ArrowUpRight size={18} className="srv-card-arrow" />
                </div>
                <h3 className="srv-card-title">{srv.title}</h3>
                <p className="srv-card-desc">{srv.heroDesc}</p>
                <div className="srv-card-action">
                  <span>View Full Service Blueprint</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement & Transparency Policy */}
      <section className="section-padding">
        <div className="container">
          <div className="pricing-principles-box">
            <div className="pricing-principle-badge">
              <ShieldCheck size={20} color="var(--accent-orange)" />
              <span>Transparent Agency Operating Standards</span>
            </div>
            <h2 className="pricing-principles-title">
              How We Work With Ambitious Brands
            </h2>
            <div className="principles-grid">
              <div className="principle-card">
                <h3>100% Direct Media Billing</h3>
                <p>
                  You pay Meta and Google directly on your credit card. We charge a flat, transparent service retainer. Zero hidden ad-spend markups.
                </p>
              </div>
              <div className="principle-card">
                <h3>Full Creative & Asset Ownership</h3>
                <p>
                  All 4K video exports, Figma UI files, vector logos, and ad copies are 100% your property upon final milestone handover.
                </p>
              </div>
              <div className="principle-card">
                <h3>Flexible Video Production Models</h3>
                <p>
                  Choose between single on-location video shoot packages or predictable monthly retainer subscriptions (4 to 8 reels per month).
                </p>
              </div>
              <div className="principle-card">
                <h3>Zero Exaggerated Claims</h3>
                <p>
                  We report verified platform data from Google Tag Manager, Meta Pixel, and Search Console. No vanity metrics or empty promises.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <Link to="/contact" className="btn-primary" style={{ padding: '0.9rem 2.25rem' }}>
                <span>Discuss Your Goals</span>
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <FinalCta />
    </div>
  );
}
