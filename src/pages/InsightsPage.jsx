import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  BookOpen, 
  Clock, 
  User, 
  X
} from 'lucide-react';
import { insightsArticles } from '../data/agencyData';
import FinalCta from '../components/FinalCta';

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Keyboard navigation & Escape key support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedArticle) {
        setSelectedArticle(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedArticle]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedArticle]);

  const categories = [
    { key: 'all', label: 'All Insights' },
    { key: 'Video Marketing', label: 'Video Marketing' },
    { key: 'SEO', label: 'SEO & Search' },
    { key: 'Performance Ads', label: 'Performance Ads' },
    { key: 'Branding & Video', label: 'Branding & Video' }
  ];

  const filteredArticles = insightsArticles.filter((article) => {
    if (activeCategory === 'all') return true;
    return article.category === activeCategory;
  });

  return (
    <div className="page-view">
      {/* Insights Header */}
      <section className="page-header-section">
        <div className="container">
          <div className="section-pill">
            <BookOpen size={14} />
            <span>Growth Playbooks & Analysis</span>
          </div>
          <h1 className="page-header-title">
            Agency Insights & Strategic Blueprints
          </h1>
          <p className="page-header-desc">
            Pragmatic breakdowns on video production, modern search algorithms, direct media spend, and brand positioning written by our practitioners.
          </p>

          {/* Filter Bar */}
          <div className="work-filter-bar" style={{ marginTop: '2rem' }}>
            <div className="work-filter-options">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`work-filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding" style={{ paddingTop: '1.5rem' }}>
        <div className="container">
          <div className="insights-grid">
            {filteredArticles.map((article) => (
              <article 
                key={article.slug} 
                className="insight-card"
                onClick={() => setSelectedArticle(article)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') setSelectedArticle(article); }}
              >
                <div className="insight-card-meta">
                  <span className="spec-badge">{article.category}</span>
                  <div className="insight-meta-timing">
                    <Clock size={13} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h2 className="insight-card-title">{article.title}</h2>
                <p className="insight-card-summary">{article.summary}</p>

                <div className="insight-card-footer">
                  <div className="insight-author-info">
                    <User size={14} color="var(--accent-orange)" />
                    <span>Upswing Strategy Team</span>
                    <span className="meta-dot">•</span>
                    <span>{article.date}</span>
                  </div>
                  <div className="insight-read-link">
                    <span>Read Guide</span>
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div 
          className="modal-overlay" 
          onClick={() => setSelectedArticle(null)}
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
                  {selectedArticle.category}
                </span>
                <h3 className="modal-title" style={{ fontSize: '1.4rem', lineHeight: 1.3 }}>
                  {selectedArticle.title}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  <span>Published {selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                  <span>•</span>
                  <span>By Upswing Strategy Team</span>
                </div>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedArticle(null)}
                aria-label="Close Article"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-content" style={{ padding: '2rem 1.5rem' }}>
              <div className="article-body-text" style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-light)' }}>
                <p style={{ fontWeight: 500, fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>
                  {selectedArticle.summary}
                </p>

                <div style={{ background: 'var(--navy-900)', padding: '1.5rem', borderRadius: '12px', borderLeft: '3px solid var(--accent-orange)', marginBottom: '1.5rem' }}>
                  <p style={{ margin: 0, color: 'var(--text-light)' }}>
                    {selectedArticle.content}
                  </p>
                </div>

                <h4 style={{ color: '#FFFFFF', margin: '1.5rem 0 0.75rem', fontSize: '1.2rem' }}>
                  The Strategic Takeaway For Brand Leaders
                </h4>
                <p style={{ color: 'var(--text-muted)' }}>
                  Sustainable digital growth requires rejecting short-term gimmicks in favor of repeatable operational frameworks: exceptional visual assets that stop the scroll, aligned with rigorous paid distribution and transparent search hygiene.
                </p>

                <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                  <Link 
                    to="/contact" 
                    className="btn-primary"
                    onClick={() => setSelectedArticle(null)}
                  >
                    <span>Implement This With Upswing</span>
                    <ArrowUpRight size={16} />
                  </Link>

                  <button 
                    type="button" 
                    className="btn-secondary"
                    onClick={() => setSelectedArticle(null)}
                  >
                    Back to All Insights
                  </button>
                </div>
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
