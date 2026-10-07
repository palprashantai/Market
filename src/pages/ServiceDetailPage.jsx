import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  AlertCircle, 
  Sparkles, 
  HelpCircle 
} from 'lucide-react';
import { detailedServices, brandInfo } from '../data/agencyData';
import FinalCta from '../components/FinalCta';

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const service = detailedServices.find((s) => s.slug === serviceSlug);

  if (!service) {
    return (
      <div className="page-view" style={{ padding: '8rem 1rem', textAlign: 'center' }}>
        <div className="container">
          <AlertCircle size={48} color="var(--accent-orange)" style={{ margin: '0 auto 1.5rem' }} />
          <h1 className="page-header-title">Service Not Found</h1>
          <p className="page-header-desc" style={{ marginBottom: '2rem' }}>
            The requested service blueprint could not be found or may have moved.
          </p>
          <Link to="/services" className="btn-primary">
            <ArrowLeft size={16} />
            <span>Return to Services Overview</span>
          </Link>
        </div>
      </div>
    );
  }

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="page-view">
      {/* Service Breadcrumb & Hero */}
      <section className="page-header-section service-hero-section">
        <div className="container">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="breadcrumb-nav">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/services" className="breadcrumb-link">Services</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">{service.title}</span>
          </nav>

          <div className="section-pill" style={{ marginTop: '1.25rem' }}>
            <Sparkles size={14} />
            <span>{service.category}</span>
          </div>

          <h1 className="page-header-title service-hero-title">
            {service.title}
          </h1>

          <p className="page-header-desc service-hero-desc">
            {service.heroDesc}
          </p>

          <div className="service-hero-actions">
            <Link to="/contact" className="btn-primary">
              <span>Discuss Your Goals</span>
              <ArrowUpRight size={17} />
            </Link>
            <a
              href={`${brandInfo.whatsappUrl}&text=Hi%20Upswing,%20I'd%20like%20to%20discuss%20${encodeURIComponent(service.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <span>Instant WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4-Part Service Clarity Framework */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-pill">Core Service Blueprint</span>
            <h2 className="section-title">Clarity, Execution & Outcomes</h2>
            <p className="section-subtitle">
              We eliminate ambiguity so you know exactly what we build and what commercial results to expect.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
            marginTop: '2.5rem'
          }}>
            {/* 1. What is it? */}
            <div className="challenge-col-box" style={{ background: 'var(--navy-900)' }}>
              <div className="col-box-header">
                <span className="spec-badge" style={{ color: 'var(--accent-orange)' }}>01</span>
                <h3 className="col-box-title" style={{ fontSize: '1.15rem' }}>What Is It?</h3>
              </div>
              <p className="col-box-desc">{service.whatIsIt || service.heroDesc}</p>
            </div>

            {/* 2. What problem does it solve? */}
            <div className="challenge-col-box" style={{ background: 'var(--navy-900)' }}>
              <div className="col-box-header">
                <span className="spec-badge" style={{ color: '#EF4444' }}>02</span>
                <h3 className="col-box-title" style={{ fontSize: '1.15rem' }}>The Problem It Solves</h3>
              </div>
              <p className="col-box-desc">{service.problem}</p>
            </div>

            {/* 3. What does Upswing actually do? */}
            <div className="approach-col-box" style={{ background: 'var(--navy-900)' }}>
              <div className="col-box-header">
                <span className="spec-badge" style={{ color: 'var(--accent-orange)' }}>03</span>
                <h3 className="col-box-title" style={{ fontSize: '1.15rem' }}>What Upswing Actually Does</h3>
              </div>
              <p className="col-box-desc">{service.approach}</p>
            </div>

            {/* 4. Expected Outcome */}
            <div className="approach-col-box" style={{ background: 'var(--navy-900)', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
              <div className="col-box-header">
                <span className="spec-badge" style={{ color: '#10B981' }}>04</span>
                <h3 className="col-box-title" style={{ fontSize: '1.15rem' }}>Expected Business Outcome</h3>
              </div>
              <p className="col-box-desc">{service.expectedOutcome || 'Measurable customer acquisition, elevated market positioning, and transparent reporting with complete asset ownership.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="section-padding" style={{ background: 'var(--navy-900)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header-centered">
            <span className="section-pill">Scope & Tangibles</span>
            <h2 className="section-title">What We Deliver</h2>
            <p className="section-subtitle">
              Clear, transparent deliverables built to move your business forward.
            </p>
          </div>

          <div className="service-deliverables-grid">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="service-deliverable-card">
                <div className="del-card-index">0{idx + 1}</div>
                <div className="del-card-content">
                  <p>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section (if available) */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="section-padding">
          <div className="container">
            <div className="section-header-centered">
              <span className="section-pill">Commercial Value</span>
              <h2 className="section-title">Why This Matters For Your Brand</h2>
              <p className="section-subtitle">
                Measurable business advantages from disciplined creative and marketing execution.
              </p>
            </div>

            <div className="benefits-grid">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="benefit-card">
                  <div className="benefit-icon-wrapper">
                    <Check size={18} color="var(--accent-orange)" />
                  </div>
                  <p className="benefit-text">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5-Step Process (if available) */}
      {service.process && service.process.length > 0 && (
        <section className="section-padding" style={{ background: 'var(--navy-950)', borderTop: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <div className="section-header-centered">
              <span className="section-pill">Execution Framework</span>
              <h2 className="section-title">Step-by-Step Delivery</h2>
              <p className="section-subtitle">
                A structured execution flow designed to eliminate bottlenecks and guarantee delivery.
              </p>
            </div>

            <div className="service-process-timeline">
              {service.process.map((step, idx) => (
                <div key={idx} className="service-timeline-item">
                  <div className="timeline-node">
                    <span>{idx + 1}</span>
                  </div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{step}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="section-padding">
          <div className="container" style={{ maxWidth: '840px' }}>
            <div className="section-header-centered">
              <div className="section-pill">
                <HelpCircle size={14} />
                <span>Transparent Answers</span>
              </div>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Everything you need to know about working with us on {service.title}.
              </p>
            </div>

            <div className="faq-accordion-list">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className={`faq-accordion-item ${isOpen ? 'open' : ''}`}>
                    <button
                      type="button"
                      className="faq-accordion-trigger"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-question-text">{faq.q}</span>
                      <span className="faq-icon-holder">
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="faq-accordion-body">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Final Conversion CTA */}
      <FinalCta />
    </div>
  );
}
