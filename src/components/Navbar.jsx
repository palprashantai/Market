import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon, LinkedinIcon } from './SocialIcons';
import { brandInfo } from '../data/agencyData';
import UpswingLogo from './UpswingLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // ScrollSpy: detect which section is in view
      const sectionIds = ['hero', 'services', 'capabilities-hub', 'video-studio', 'why-us', 'process', 'industries', 'testimonials', 'about', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation & Escape key handling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    closeMobileMenu();
    const el = document.getElementById(targetId);
    if (el) {
      const navEl = document.querySelector('.navbar');
      const headerHeight = navEl ? navEl.offsetHeight : 76;
      const extraOffset = 24;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - (headerHeight + extraOffset);

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'Paid Ads & IT', id: 'capabilities-hub' },
    { label: 'Video Studio', id: 'video-studio' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Industries', id: 'industries' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a 
          href="#hero" 
          className="brand-logo" 
          aria-label="Upswing Agency Home" 
          onClick={(e) => scrollToSection(e, 'hero')}
        >
          <UpswingLogo size="md" />
        </a>

        {/* Desktop Single-Page Navigation */}
        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side actions */}
        <div className="nav-actions">
          <a 
            href="#contact" 
            className="btn-primary nav-cta-btn"
            onClick={(e) => scrollToSection(e, 'contact')}
          >
            <span>Start a Project</span>
            <ArrowUpRight size={17} />
          </a>

          <button
            type="button"
            className="mobile-menu-btn"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation-drawer"
          className="mobile-drawer" 
          role="dialog" 
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
        >
          <a 
            href="#hero" 
            className={`mobile-drawer-link ${activeSection === 'hero' ? 'active' : ''}`} 
            onClick={(e) => scrollToSection(e, 'hero')}
          >
            Home
          </a>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`mobile-drawer-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={(e) => scrollToSection(e, link.id)}
            >
              {link.label}
            </a>
          ))}

          <div style={{ display: 'flex', gap: '1rem', padding: '0.75rem 0.5rem', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Connect:</span>
            <a href={brandInfo.socials.instagram} target="_blank" rel="noopener noreferrer" style={{ color: '#F8FAFC' }} aria-label="Instagram">
              <InstagramIcon size={18} />
            </a>
            <a href={brandInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#F8FAFC' }} aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href={brandInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366' }} aria-label="WhatsApp">
              <WhatsAppIcon size={18} />
            </a>
          </div>

          <a
            href="#contact"
            className="btn-primary"
            style={{ width: '100%', marginTop: '0.5rem' }}
            onClick={(e) => scrollToSection(e, 'contact')}
          >
            <span>Start a Project</span>
            <ArrowUpRight size={17} />
          </a>
        </div>
      )}
    </header>
  );
}
