import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { detailedServices } from '../data/agencyData';

const routeTitles = {
  '/': 'Upswing Agency | Growth, Digital Marketing & Creative Production Agency',
  '/work': 'Selected Work & Case Studies | Upswing Agency',
  '/services': 'Agency Capabilities & Growth Solutions | Upswing Agency',
  '/about': 'About Agency & Core Belief | Upswing Agency',
  '/insights': 'Agency Insights & Growth Blueprints | Upswing Agency',
  '/contact': 'Start a Project • Contact Studio | Upswing Agency'
};

const routeDescriptions = {
  '/': 'Upswing is a growth and creative agency helping ambitious businesses turn attention into measurable growth through digital marketing, performance campaigns, branding and professional content production.',
  '/work': 'Explore verified commercial case studies across in-house cinematography, Meta and Google Ads, and brand identity systems.',
  '/services': 'Full-funnel growth services: brand strategy, performance marketing, in-house cinema video production, and conversion systems.',
  '/about': 'Good marketing should do more than look good. Learn about our in-house production crew, strategic principles, and India studio.',
  '/insights': 'Pragmatic breakdowns on video production, search architecture, and direct ad spend written by our practitioners.',
  '/contact': 'Start a commercial conversation with Upswing Agency. Direct studio discovery, transparent pricing, and zero markups on ad spend.'
};

export default function RouteMetadataManager() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    let title = routeTitles[pathname];
    let description = routeDescriptions[pathname];

    // Handle dynamic service deep dive routes
    if (!title && pathname.startsWith('/services/')) {
      const slug = pathname.replace('/services/', '');
      const srv = detailedServices.find((s) => s.slug === slug);
      if (srv) {
        title = `${srv.title} | Upswing Agency`;
        description = srv.heroDesc;
      }
    }

    if (!title) {
      title = 'Upswing Agency | Growth, Digital Marketing & Creative Production';
      description = routeDescriptions['/'];
    }

    document.title = title;

    // Update meta description tag dynamically
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    if (description) {
      metaDesc.setAttribute('content', description);
    }

    // Update canonical URL dynamically
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://upswingagency.com${pathname === '/' ? '' : pathname}`);
  }, [location.pathname]);

  return null;
}
