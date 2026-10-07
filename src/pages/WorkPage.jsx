import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, X, CheckCircle2, Clapperboard, Filter } from 'lucide-react';
import { caseStudies } from '../data/agencyData';
import FinalCta from '../components/FinalCta';

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeModalCase, setActiveModalCase] = useState(null);

  // Keyboard navigation & Escape key support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeModalCase) {
        setActiveModalCase(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalCase]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (activeModalCase) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModalCase]);

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'video', label: 'Video & Films' },
    { key: 'ads', label: 'Paid Media & Ads' },
    { key: 'brand', label: 'Branding & Identity' }
  ];

  const filteredCases = caseStudies.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'video') return item.tags.some(t => t.toLowerCase().includes('film') || t.toLowerCase().includes('video') || t.toLowerCase().includes('reels'));
    if (activeFilter === 'ads') return item.tags.some(t => t.toLowerCase().includes('ads') || t.toLowerCase().includes('lead'));
    if (activeFilter === 'brand') return item.tags.some(t => t.toLowerCase().includes('brand') || t.toLowerCase().includes('identity'));
    return true;
  });

  return (
    <div className="page-view">
      {/* Work Page Header */}
      <section className="page-header-section">
        <div className="container">
          <div className="section-pill">
            <Clapperboard size={14} />
            <span>Portfolio & Evidence</span>
          </div>
          <h1 className="page-header-title">
            Real Work. Real Strategy. Zero Exaggeration.
          </h1>
          <p className="page-header-desc">
            Explore how we pair strategic positioning with on-location cinematography, brand systems, and disciplined media buying to solve concrete growth challenges.
          </p>

          {/* Filter Pills */}
          <div className="work-filter-bar">
            <div className="work-filter-label">
              <Filter size={15} />
              <span>Filter by Capability:</span>
            </div>
            <div className="work-filter-options">
              {filters.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setActiveFilter(f.key)}
                  className={`work-filter-btn ${activeFilter === f.key ? 'active' : ''}`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="case-studies-grid">
            {filteredCases.map((cs) => (
              <div 
                key={cs.id} 
                className="case-study-card"
                onClick={() => setActiveModalCase(cs)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') setActiveModalCase(cs); }}
              >
                <div className="case-study-img-wrapper">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    loading="lazy"
                    className="case-study-img"
                  />
                  <div className="case-study-tag-overlay">
                    <span className="case-industry-badge">{cs.industry}</span>
                  </div>
                </div>

                <div className="case-study-body">
                  <div className="case-tags-row">
                    {cs.tags.map((t) => (
                      <span key={t} className="case-mini-tag">{t}</span>
                    ))}
                  </div>

                  <h2 className="case-study-card-title">{cs.title}</h2>
                  <p className="case-study-client"><strong>Client:</strong> {cs.client}</p>
                  
                  <div className="case-challenge-snippet">
                    <p><strong>Challenge:</strong> {cs.challenge}</p>
                  </div>

                  <div className="case-card-action">
                    <span>View Full Case Breakdown</span>
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCases.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--text-muted)' }}>
              <p>No projects found matching this filter category.</p>
              <button 
                type="button" 
                onClick={() => setActiveFilter('all')}
                className="btn-secondary" 
                style={{ marginTop: '1rem' }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Detailed Modal */}
      {activeModalCase && (
        <div 
          className="modal-overlay" 
          onClick={() => setActiveModalCase(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="modal-container modal-large" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <span className="spec-badge" style={{ marginBottom: '0.4rem', display: 'inline-block' }}>
                  {activeModalCase.industry}
                </span>
                <h3 className="modal-title">{activeModalCase.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.2rem' }}>
                  Client: {activeModalCase.client}
                </p>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setActiveModalCase(null)}
                aria-label="Close Case Study Details"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-content case-modal-body">
              <div className="case-modal-media">
                <img 
                  src={activeModalCase.image} 
                  alt={activeModalCase.title} 
                  style={{ width: '100%', height: '340px', objectFit: 'cover', borderRadius: '12px' }}
                />
              </div>

              <div className="case-framework-breakdown">
                <div className="case-framework-item">
                  <h4>
                    <span className="framework-badge">01</span>
                    The Challenge
                  </h4>
                  <p>{activeModalCase.challenge}</p>
                </div>

                <div className="case-framework-item">
                  <h4>
                    <span className="framework-badge">02</span>
                    The Strategy
                  </h4>
                  <p>{activeModalCase.strategy}</p>
                </div>

                <div className="case-framework-item">
                  <h4>
                    <span className="framework-badge">03</span>
                    The Execution
                  </h4>
                  <p>{activeModalCase.execution}</p>
                </div>

                <div className="case-framework-item result-highlight">
                  <h4>
                    <CheckCircle2 size={18} color="var(--accent-orange)" />
                    The Outcome
                  </h4>
                  <p>{activeModalCase.result}</p>
                </div>
              </div>

              <div className="case-modal-actions">
                <Link
                  to="/contact"
                  className="btn-primary"
                  onClick={() => setActiveModalCase(null)}
                >
                  <span>Discuss Your Project</span>
                  <ArrowUpRight size={17} />
                </Link>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setActiveModalCase(null)}
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Final Conversion CTA */}
      <FinalCta />
    </div>
  );
}
