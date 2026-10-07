import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import LegalModal from './components/LegalModal';
import ScrollToTop from './components/ScrollToTop';
import RouteMetadataManager from './components/RouteMetadataManager';
import PageLoader from './components/PageLoader';

// Code-Split Page Imports
const HomePage = lazy(() => import('./pages/HomePage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

import './App.css';

export default function App() {
  const [legalModalType, setLegalModalType] = useState(null); // 'privacy' | 'terms' | null

  return (
    <div className="site-wrapper">
      {/* Accessible skip link for keyboard & screen reader navigation */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Dynamic SEO metadata & canonical manager */}
      <RouteMetadataManager />

      {/* Route-change scroll restoration & hash anchor handler */}
      <ScrollToTop />

      {/* Global Single-Page Navigation Header with ScrollSpy */}
      <Navbar />

      {/* Single-Page Web Content Flow */}
      <main id="main-content" tabIndex={-1}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Primary Single-Page Experience */}
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<HomePage />} />
            <Route path="/services" element={<HomePage />} />
            <Route path="/about" element={<HomePage />} />
            <Route path="/contact" element={<HomePage />} />
            <Route path="/insights" element={<HomePage />} />
            
            {/* Deep-dive detail blueprint for specific service capabilities */}
            <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />

            {/* 404 Recovery route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      {/* Global Footer */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Quick WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Legal & Privacy Policy Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
