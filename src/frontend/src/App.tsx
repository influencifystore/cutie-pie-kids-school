import { Navbar } from "@/components/Navbar";
import { Suspense, lazy } from "react";

// Lazy load non-hero sections for performance
const HeroSection = lazy(() =>
  import("@/pages/sections/HeroSection").then((m) => ({
    default: m.HeroSection,
  })),
);
const AboutSection = lazy(() =>
  import("@/pages/sections/AboutSection").then((m) => ({
    default: m.AboutSection,
  })),
);
const ProgramsSection = lazy(() =>
  import("@/pages/sections/ProgramsSection").then((m) => ({
    default: m.ProgramsSection,
  })),
);
const WhyUsSection = lazy(() =>
  import("@/pages/sections/WhyUsSection").then((m) => ({
    default: m.WhyUsSection,
  })),
);
const ApproachesSection = lazy(() =>
  import("@/pages/sections/ApproachesSection").then((m) => ({
    default: m.ApproachesSection,
  })),
);
const ServicesSection = lazy(() =>
  import("@/pages/sections/ServicesSection").then((m) => ({
    default: m.ServicesSection,
  })),
);
const GallerySection = lazy(() =>
  import("@/pages/sections/GallerySection").then((m) => ({
    default: m.GallerySection,
  })),
);
const TestimonialsSection = lazy(() =>
  import("@/pages/sections/TestimonialsSection").then((m) => ({
    default: m.TestimonialsSection,
  })),
);
const FAQSection = lazy(() =>
  import("@/pages/sections/FAQSection").then((m) => ({
    default: m.FAQSection,
  })),
);
const EnrollSection = lazy(() =>
  import("@/pages/sections/EnrollSection").then((m) => ({
    default: m.EnrollSection,
  })),
);
const FooterSection = lazy(() =>
  import("@/pages/sections/FooterSection").then((m) => ({
    default: m.FooterSection,
  })),
);

function SectionFallback({ minHeight = "400px" }: { minHeight?: string }) {
  return (
    <div style={{ minHeight }} className="flex items-center justify-center">
      <div className="flex gap-2">
        <div
          className="w-3 h-3 rounded-full bg-purple-500 animate-bounce"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="w-3 h-3 rounded-full bg-pink-500 animate-bounce"
          style={{ animationDelay: "0.2s" }}
        />
        <div
          className="w-3 h-3 rounded-full bg-orange-400 animate-bounce"
          style={{ animationDelay: "0.4s" }}
        />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-body overflow-x-hidden">
      <Navbar />

      <main>
        <Suspense fallback={<SectionFallback minHeight="100vh" />}>
          <HeroSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ProgramsSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <WhyUsSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ApproachesSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ServicesSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <GallerySection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <TestimonialsSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <FAQSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <EnrollSection />
        </Suspense>
      </main>

      <Suspense fallback={<div className="h-40" />}>
        <FooterSection />
      </Suspense>
    </div>
  );
}
