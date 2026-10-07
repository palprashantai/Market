import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { 
  InstagramIcon, 
  LinkedinIcon, 
  YoutubeIcon, 
  WhatsAppIcon 
} from './SocialIcons';
import { brandInfo } from '../data/agencyData';
import UpswingLogo from './UpswingLogo';

export default function Footer({ onOpenLegal }) {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info & Mission */}
          <div>
            <a href="#hero" className="brand-logo" style={{ marginBottom: '0.85rem' }}>
              <UpswingLogo size="lg" />
            </a>
            <p className="footer-brand-desc">
              We help ambitious brands grow through strategy, performance marketing, powerful content, and high-impact visual storytelling.
            </p>

            {/* Social Links */}
            <div className="footer-social-row">
              <a
                href={brandInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="footer-social-btn"
                title="Instagram"
              >
                <InstagramIcon size={17} />
              </a>

              <a
                href={brandInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="footer-social-btn"
                title="LinkedIn"
              >
                <LinkedinIcon size={17} />
              </a>

              <a
                href={brandInfo.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube channel"
                className="footer-social-btn"
                title="YouTube"
              >
                <YoutubeIcon size={17} />
              </a>

              <a
                href={brandInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp direct messaging"
                className="footer-social-btn"
                title="WhatsApp"
              >
                <WhatsAppIcon size={17} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="footer-col-title">Navigation</h3>
            <ul className="footer-links-list">
              <li>
                <a href="#hero" className="footer-link">Home</a>
              </li>
              <li>
                <a href="#services" className="footer-link">Capabilities</a>
              </li>
              <li>
                <a href="#video-studio" className="footer-link">Video Studio</a>
              </li>
              <li>
                <a href="#why-us" className="footer-link">Why Upswing</a>
              </li>
              <li>
                <a href="#capabilities-hub" className="footer-link">Paid Ads & IT</a>
              </li>
              <li>
                <a href="#process" className="footer-link">Our Process</a>
              </li>
              <li>
                <a href="#about" className="footer-link">About Agency</a>
              </li>
              <li>
                <a href="#contact" className="footer-link">Start a Project</a>
              </li>
            </ul>
          </div>

          {/* Core Services Links */}
          <div>
            <h3 className="footer-col-title">Core Services</h3>
            <ul className="footer-links-list">
              <li>
                <a href="#services" className="footer-link">
                  Meta & Google Ads
                </a>
              </li>
              <li>
                <a href="#services" className="footer-link">
                  Custom Web & IT Solutions
                </a>
              </li>
              <li>
                <a href="#video-studio" className="footer-link">
                  In-House 4K Video Production
                </a>
              </li>
              <li>
                <a href="#services" className="footer-link">
                  Search Engine Optimization (SEO)
                </a>
              </li>
              <li>
                <a href="#services" className="footer-link">
                  Brand Identity & Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Operational Presence in India */}
          <div>
            <h3 className="footer-col-title">India Studio</h3>
            <ul className="footer-links-list">
              <li className="footer-contact-item">
                <MapPin size={16} color="var(--accent-orange)" />
                <span>Noida & Delhi NCR, Uttar Pradesh</span>
              </li>
              <li className="footer-contact-item">
                <Mail size={16} color="var(--accent-orange)" />
                <a href={`mailto:${brandInfo.email}`} className="footer-contact-link">
                  {brandInfo.email}
                </a>
              </li>
              <li className="footer-contact-item">
                <Phone size={16} color="var(--accent-orange)" />
                <a href={`tel:${brandInfo.phone.replace(/[\s-]/g, '')}`} className="footer-contact-link">
                  {brandInfo.phone}
                </a>
              </li>
            </ul>
            <div style={{ marginTop: '1.25rem' }}>
              <div className="footer-coverage-badge">
                <span className="footer-coverage-dot" aria-hidden="true" />
                <span>Serving Brands Across India & Globally</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2026 Upswing Agency. All rights reserved. Registered Indian Digital Agency.</p>
          <div className="footer-legal-links">
            <button
              type="button"
              className="footer-legal-btn"
              onClick={() => onOpenLegal('privacy')}
            >
              Privacy Policy
            </button>
            <button
              type="button"
              className="footer-legal-btn"
              onClick={() => onOpenLegal('terms')}
            >
              Terms of Engagement
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
