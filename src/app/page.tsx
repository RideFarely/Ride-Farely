"use client";

import { useState } from 'react';
import WithPhoneMockup from '@/src/component/blocks/heros/with-phone-mockup';
import { LogoCloudMarquee } from '@/src/component/blocks/logos-clouds/logo-cloud-marquee';
import SimpleThreeColumnWithLargeIcons from '@/src/component/blocks/feature-sections/simple-three-column-with-large-icons';
import WithProductScreenshot from '@/src/component/blocks/feature-sections/with-product-screenshot';
import { TestimonialsGridWithCenteredCarousel } from '@/src/component/blocks/testimonals/testimonials-grid-with-centered-carousel';
import { FeaturesSectionBentoGrid } from '@/src/component/blocks/feature-sections/bento-grid';
import SimpleCenteredWithGradient from '@/src/component/blocks/ctas/simple-centered-with-gradient';
import { FooterWithGrid } from '@/src/component/blocks/footers/footer-with-grid';
import RideComparisonWidget from '@/src/component/blocks/custom/ride-comparison-widget';

export default function Home() {
  const [showRideWidget, setShowRideWidget] = useState(true); // Example state to control widget visibility

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <WithPhoneMockup />
      
      <div className="w-full flex justify-center py-10 px-4">
        {showRideWidget && <RideComparisonWidget />}
      </div>

      <LogoCloudMarquee />
      <SimpleThreeColumnWithLargeIcons />
      <WithProductScreenshot />
      <TestimonialsGridWithCenteredCarousel />
      <FeaturesSectionBentoGrid />
      <SimpleCenteredWithGradient />
      <FooterWithGrid />
    </div>
  );
}
