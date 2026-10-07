import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Phone, Mail, MapPin, Lock } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';
import { submitConsultationInquiry } from '../lib/supabase';
import { brandInfo } from '../data/agencyData';

export default function LeadGenSection({ defaultService = '' }) {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceRequired: defaultService || 'Performance Marketing',
    budgetRange: '',
    message: ''
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Please provide your name (minimum 2 characters).';
    }
    if (!formData.company.trim() || formData.company.trim().length < 2) {
      errors.company = 'Please enter your brand or company name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = 'Please provide a valid work email address.';
    }
    const phoneDigits = formData.phone.replace(/[^0-9]/g, '');
    if (!phoneDigits || phoneDigits.length < 8) {
      errors.phone = 'Please provide a valid phone or WhatsApp number.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please provide a brief summary of your project (min 10 characters).';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus({
        type: 'error',
        msg: 'Please correct the highlighted fields before submitting.'
      });
      return;
    }

    setSubmitting(true);
    setStatus(null);
    setFieldErrors({});

    try {
      const sanitizedPayload = {
        name: formData.name.trim(),
        company: formData.company.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        serviceRequired: formData.serviceRequired,
        budgetRange: formData.budgetRange || 'Unspecified',
        message: formData.message.trim(),
        submittedAt: new Date().toISOString()
      };

      const res = await submitConsultationInquiry(sanitizedPayload);

      if (res.success) {
        setStatus({
          type: 'success',
          msg: 'Thank you. Your project brief has been received. Our leadership team will review your requirements and respond within 1 business day.',
          refId: res.data?.reference_id
        });
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          serviceRequired: 'Performance Marketing',
          budgetRange: '',
          message: ''
        });
      } else {
        setStatus({
          type: 'error',
          msg: 'Transmission issue encountered. Please reach out directly on WhatsApp or email.'
        });
      }
    } catch (err) {
      console.error('Submission failure:', err);
      setStatus({
        type: 'error',
        msg: 'Unable to submit right now. Please message our WhatsApp desk directly.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section lead-gen-section">
      <div className="container">
        <div className="lead-gen-grid">
          {/* Left Column: Direct Agency Contact & Assurance */}
          <div className="lead-gen-info-col">
            <span className="eyebrow-tag orange">Start A Project</span>
            <h2 className="lead-gen-headline">
              Let's Discuss How To Grow Your Brand.
            </h2>
            <p className="lead-gen-subtext">
              Have a specific campaign, new brand launch, or video production brief? Tell us where you are today, and we'll outline a direct strategy with transparent costs.
            </p>

            <div className="lead-contact-items">
              <div className="lead-contact-item">
                <div className="contact-icon-bubble">
                  <Mail size={18} color="var(--accent-orange)" />
                </div>
                <div>
                  <div className="contact-item-label">Direct Desk</div>
                  <a href={`mailto:${brandInfo.email}`} className="contact-item-val">
                    {brandInfo.email}
                  </a>
                </div>
              </div>

              <div className="lead-contact-item">
                <div className="contact-icon-bubble">
                  <Phone size={18} color="var(--accent-orange)" />
                </div>
                <div>
                  <div className="contact-item-label">Phone Consultation</div>
                  <a href={`tel:${brandInfo.phone.replace(/[\s-]/g, '')}`} className="contact-item-val">
                    {brandInfo.phone}
                  </a>
                </div>
              </div>

              <div className="lead-contact-item">
                <div className="contact-icon-bubble">
                  <MapPin size={18} color="var(--accent-orange)" />
                </div>
                <div>
                  <div className="contact-item-label">Location</div>
                  <div className="contact-item-val">
                    {brandInfo.location}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <a
                href={brandInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-action-btn"
              >
                <WhatsAppIcon size={18} />
                <span>Quick Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Converting Lead Form */}
          <motion.div
            className="lead-form-card"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <form onSubmit={handleSubmit} noValidate>
              <div className="lead-form-grid">
                <div className="form-group-duo">
                  <div className="form-field">
                    <label htmlFor="lead-name" className="field-label">
                      Your Name <span className="req-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="lead-name"
                      name="name"
                      required
                      aria-required="true"
                      aria-invalid={!!fieldErrors.name}
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-text-input ${fieldErrors.name ? 'input-error' : ''}`}
                    />
                    {fieldErrors.name && (
                      <span className="field-error-msg">{fieldErrors.name}</span>
                    )}
                  </div>

                  <div className="form-field">
                    <label htmlFor="lead-company" className="field-label">
                      Company / Brand Name <span className="req-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="lead-company"
                      name="company"
                      required
                      aria-required="true"
                      aria-invalid={!!fieldErrors.company}
                      placeholder="e.g. Acme Brands Pvt Ltd"
                      value={formData.company}
                      onChange={handleChange}
                      className={`form-text-input ${fieldErrors.company ? 'input-error' : ''}`}
                    />
                    {fieldErrors.company && (
                      <span className="field-error-msg">{fieldErrors.company}</span>
                    )}
                  </div>
                </div>

                <div className="form-group-duo">
                  <div className="form-field">
                    <label htmlFor="lead-email" className="field-label">
                      Work Email <span className="req-star">*</span>
                    </label>
                    <input
                      type="email"
                      id="lead-email"
                      name="email"
                      required
                      aria-required="true"
                      aria-invalid={!!fieldErrors.email}
                      placeholder="rahul@acme.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-text-input ${fieldErrors.email ? 'input-error' : ''}`}
                    />
                    {fieldErrors.email && (
                      <span className="field-error-msg">{fieldErrors.email}</span>
                    )}
                  </div>

                  <div className="form-field">
                    <label htmlFor="lead-phone" className="field-label">
                      Phone / WhatsApp <span className="req-star">*</span>
                    </label>
                    <input
                      type="tel"
                      id="lead-phone"
                      name="phone"
                      required
                      aria-required="true"
                      aria-invalid={!!fieldErrors.phone}
                      placeholder="+91 98XXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`form-text-input ${fieldErrors.phone ? 'input-error' : ''}`}
                    />
                    {fieldErrors.phone && (
                      <span className="field-error-msg">{fieldErrors.phone}</span>
                    )}
                  </div>
                </div>

                <div className="form-group-duo">
                  <div className="form-field">
                    <label htmlFor="lead-service" className="field-label">
                      Service Required <span className="req-star">*</span>
                    </label>
                    <select
                      id="lead-service"
                      name="serviceRequired"
                      required
                      value={formData.serviceRequired}
                      onChange={handleChange}
                      className="form-select-input"
                    >
                      <option value="Performance Marketing">Meta & Google Ads (Performance Marketing)</option>
                      <option value="Custom Web Development & IT Solutions">Custom Web Development & IT Solutions</option>
                      <option value="In-House Video Production">In-House 4K Video Production & Reels</option>
                      <option value="Brand Identity & Design">Brand Identity & Design System</option>
                      <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                      <option value="Full Integrated Growth (Ads + IT + Video)">Full Integrated Engine (Ads + IT + Video)</option>
                      <option value="Other / Multi-Scope">Other / Custom Enterprise Scope</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="lead-budget" className="field-label">
                      Expected Monthly Budget <span style={{ opacity: 0.65, fontWeight: 400 }}>(Optional)</span>
                    </label>
                    <select
                      id="lead-budget"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="form-select-input"
                    >
                      <option value="">Select an approximate range...</option>
                      <option value="₹50k – ₹1.5L / month">₹50,000 – ₹1,50,000 / month</option>
                      <option value="₹1.5L – ₹3L / month">₹1,50,000 – ₹3,00,000 / month</option>
                      <option value="₹3L – ₹6L / month">₹3,00,000 – ₹6,00,000 / month</option>
                      <option value="₹6L+ / month">₹6,00,000+ / month</option>
                      <option value="One-Time Project Shoot">One-Time Project / Shoot</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="lead-message" className="field-label">
                    Project Details & Objectives <span className="req-star">*</span>
                  </label>
                  <textarea
                    id="lead-message"
                    name="message"
                    required
                    aria-required="true"
                    aria-invalid={!!fieldErrors.message}
                    rows={4}
                    placeholder="Tell us about your current marketing challenges, timeline, or what you want to achieve..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-textarea-input ${fieldErrors.message ? 'input-error' : ''}`}
                  ></textarea>
                  {fieldErrors.message && (
                    <span className="field-error-msg">{fieldErrors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  aria-busy={submitting}
                  className="lead-submit-btn"
                >
                  {submitting ? (
                    <span>Transmitting Project Brief...</span>
                  ) : (
                    <>
                      <span>Start a Project</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

                <div className="form-trust-note">
                  <Lock size={13} color="var(--accent-orange)" />
                  <span>Zero spam. We review your requirements and reply with a strategic proposal within 1 business day.</span>
                </div>
              </div>

              {status && (
                <div 
                  className={`lead-status-banner ${status.type}`} 
                  role="status" 
                  aria-live="polite"
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 size={19} className="flex-shrink-0" />
                  ) : (
                    <AlertCircle size={19} className="flex-shrink-0" />
                  )}
                  <div>
                    <p style={{ margin: 0 }}>{status.msg}</p>
                    {status.refId && (
                      <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.8rem', opacity: 0.9 }}>
                        Reference: <strong>{status.refId}</strong>
                      </p>
                    )}
                  </div>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
