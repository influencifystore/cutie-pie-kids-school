import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const SECTION_IDS = [
  "hero",
  "about",
  "programs",
  "why-us",
  "approaches",
  "services",
  "gallery",
  "testimonials",
  "faq",
  "enroll",
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (!el) continue;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4, rootMargin: "-60px 0px 0px 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    }

    return () => {
      for (const o of observers) o.disconnect();
    };
  }, []);

  const scrollTo = useCallback((href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <nav
      data-ocid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : "shadow-md"
      }`}
      style={{
        background: scrolled
          ? "linear-gradient(90deg, rgba(124,58,237,0.97) 0%, rgba(13,148,136,0.97) 50%, rgba(236,72,153,0.97) 100%)"
          : "linear-gradient(90deg, #7C3AED 0%, #0D9488 50%, #EC4899 100%)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            data-ocid="navbar.logo"
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-3 group"
            aria-label="Go to home"
          >
            <div
              className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xl md:text-2xl shadow-glow"
              style={{
                background: "linear-gradient(135deg, #EAB308, #F97316)",
              }}
            >
              🧁
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-white text-lg md:text-xl leading-none tracking-wide">
                Cutie Pie Kids
              </span>
              <span className="text-white/80 text-xs font-body font-semibold">
                Pre School
              </span>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  type="button"
                  key={link.href}
                  data-ocid={`navbar.${sectionId}.link`}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-4 py-2 font-body font-semibold text-sm transition-all duration-200 rounded-full ${
                    isActive
                      ? "text-white bg-white/20"
                      : "text-white/85 hover:text-white hover:bg-white/15"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-school-yellow" />
                  )}
                </button>
              );
            })}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Button
              type="button"
              data-ocid="navbar.enroll_button"
              onClick={() => scrollTo("#enroll")}
              className="hidden md:flex font-body font-bold text-sm px-6 py-2 rounded-full text-white border-2 border-white/30 transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #F97316, #EC4899)",
              }}
            >
              Enroll Now ✨
            </Button>

            <button
              type="button"
              data-ocid="navbar.hamburger"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/20 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        data-ocid="navbar.mobile_menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(135deg, rgba(124,58,237,0.98), rgba(13,148,136,0.98))",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <button
                type="button"
                key={link.href}
                data-ocid={`navbar.mobile.${sectionId}.link`}
                onClick={() => scrollTo(link.href)}
                className={`text-left px-4 py-3 rounded-xl font-body font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-white/25 text-white"
                    : "text-white/85 hover:bg-white/15 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <button
            type="button"
            data-ocid="navbar.mobile.enroll_button"
            onClick={() => scrollTo("#enroll")}
            className="mt-2 mx-4 px-6 py-3 rounded-full font-body font-bold text-white text-center transition-all duration-200 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #F97316, #EC4899)" }}
          >
            Enroll Now ✨
          </button>
        </div>
      </div>
    </nav>
  );
}
