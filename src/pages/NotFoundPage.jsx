import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, HelpCircle } from 'lucide-react';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = '404: Page Not Found | Upswing Agency';
  }, []);

  return (
    <div className="page-view not-found-page">
      <section className="page-header-section" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <div className="section-pill" style={{ borderColor: 'rgba(239, 68, 68, 0.3)', color: '#EF4444' }}>
            <HelpCircle size={14} />
            <span>Error 404 • Missing Blueprint</span>
          </div>

          <h1 className="page-header-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', margin: '1rem 0' }}>
            Page Not Found
          </h1>

          <p className="page-header-desc" style={{ marginBottom: '2.5rem' }}>
            The page or service blueprint you are looking for doesn’t exist, has been relocated, or is no longer available.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn-primary">
              <ArrowLeft size={16} />
              <span>Return to Homepage</span>
            </Link>

            <Link to="/services" className="btn-secondary">
              <span>Explore Capabilities</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            <Link to="/work" style={{ color: 'var(--text-light)', transition: 'color 0.15s' }}>
              Selected Work
            </Link>
            <span>•</span>
            <Link to="/about" style={{ color: 'var(--text-light)', transition: 'color 0.15s' }}>
              About Studio
            </Link>
            <span>•</span>
            <Link to="/contact" style={{ color: 'var(--text-light)', transition: 'color 0.15s' }}>
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
