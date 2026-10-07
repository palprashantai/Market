import React from 'react';
import Hero from '../components/Hero';
import TrustMetrics from '../components/TrustMetrics';
import CategorizedServices from '../components/CategorizedServices';
import SocialAdsHub from '../components/SocialAdsHub';
import VideoProductionFeature from '../components/VideoProductionFeature';
import GimbalShowcase from '../components/GimbalShowcase';
import WhyUpswing from '../components/WhyUpswing';
import ProcessSection from '../components/ProcessSection';
import IndustriesSection from '../components/IndustriesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutSection from '../components/AboutSection';
import LeadGenSection from '../components/LeadGenSection';
import FinalCta from '../components/FinalCta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMetrics />
      <CategorizedServices />
      <SocialAdsHub />
      <VideoProductionFeature />
      <GimbalShowcase />
      <WhyUpswing />
      <ProcessSection />
      <IndustriesSection />
      <TestimonialsSection />
      <AboutSection />
      <LeadGenSection />
      <FinalCta />
    </>
  );
}
