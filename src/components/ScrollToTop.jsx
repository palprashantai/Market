import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
      return;
    }

    // Auto-scroll to specific section if landing on legacy path
    if (pathname === '/services') {
      setTimeout(() => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return;
    }
    if (pathname === '/work') {
      setTimeout(() => {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return;
    }
    if (pathname === '/about') {
      setTimeout(() => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return;
    }
    if (pathname === '/contact') {
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
