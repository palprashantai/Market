import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { InstagramIcon, LinkedinIcon, YoutubeIcon, WhatsAppIcon } from '../components/SocialIcons';
import { brandInfo } from '../data/agencyData';
import LeadGenSection from '../components/LeadGenSection';

export default function ContactPage() {
  return (
    <div className="page-view">
      {/* Contact Header */}
      <section className="page-header-section" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <div className="section-pill">
            <MessageSquare size={14} />
            <span>Direct Discovery & Consultation</span>
          </div>
          <h1 className="page-header-title">
            Let’s Build Something That Moves Your Brand Up.
          </h1>
          <p className="page-header-desc">
            Tell us where your business is today. Whether you need an on-location cinematic video shoot, an integrated Meta & Google Ads system, or a complete brand overhaul, we’re ready to assist.
          </p>
        </div>
      </section>

      {/* Studio Contact Info Strip */}
      <section className="section-padding" style={{ paddingTop: '1rem', paddingBottom: '2rem' }}>
        <div className="container">
          <div className="contact-studio-cards-grid">
            <div className="studio-card">
              <div className="studio-card-icon">
                <MapPin size={22} color="var(--accent-orange)" />
              </div>
              <h3>Production Studio</h3>
              <p>Noida & Delhi NCR, Uttar Pradesh, India</p>
              <span className="studio-subtext">On-location shoots across North India & Pan-India</span>
            </div>

            <div className="studio-card">
              <div className="studio-card-icon">
                <Mail size={22} color="var(--accent-orange)" />
              </div>
              <h3>Direct Inquiries</h3>
              <p>{brandInfo.email}</p>
              <span className="studio-subtext">Mon–Sat • Responses within 24 hours</span>
            </div>

            <div className="studio-card">
              <div className="studio-card-icon">
                <Phone size={22} color="var(--accent-orange)" />
              </div>
              <h3>Phone & WhatsApp</h3>
              <p>{brandInfo.phone}</p>
              <div style={{ marginTop: '0.5rem' }}>
                <a
                  href={brandInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-contact-link"
                >
                  <WhatsAppIcon size={16} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="studio-card">
              <div className="studio-card-icon">
                <Sparkles size={22} color="var(--accent-orange)" />
              </div>
              <h3>Connect Socially</h3>
              <div className="studio-social-row">
                <a href={brandInfo.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramIcon size={20} />
                </a>
                <a href={brandInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LinkedinIcon size={20} />
                </a>
                <a href={brandInfo.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <YoutubeIcon size={20} />
                </a>
              </div>
              <span className="studio-subtext">Verified agency profiles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Component */}
      <LeadGenSection />

      {/* What Happens Next Section */}
      <section className="section-padding" style={{ background: 'var(--navy-900)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header-centered">
            <span className="section-pill">Our Commitment</span>
            <h2 className="section-title">What Happens After You Reach Out?</h2>
            <p className="section-subtitle">
              We respect your time. Zero aggressive sales pitches, spam calls, or generic templates.
            </p>
          </div>

          <div className="next-steps-grid">
            <div className="next-step-card">
              <div className="next-step-num">01</div>
              <h3>Initial Business Audit</h3>
              <p>
                Within 24 hours, our team conducts a preliminary review of your website, current social channels, and competitive category.
              </p>
            </div>

            <div className="next-step-card">
              <div className="next-step-num">02</div>
              <h3>20-Minute Strategy Call</h3>
              <p>
                We host a focused, no-pressure discovery session with a senior strategist (not a junior sales rep) to define exact project requirements.
              </p>
            </div>

            <div className="next-step-card">
              <div className="next-step-num">03</div>
              <h3>Clear Milestone Proposal</h3>
              <p>
                You receive a concrete scope breakdown detailing production dates, deliverables, media architecture, and transparent pricing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
