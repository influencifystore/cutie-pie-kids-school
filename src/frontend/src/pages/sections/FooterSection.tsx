import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { SiFacebook, SiInstagram } from "react-icons/si";

const QUICK_LINKS = [
  { label: "Home", id: "hero" },
  { label: "About Us", id: "about" },
  { label: "Our Programs", id: "programs" },
  { label: "Why Choose Us", id: "why-us" },
  { label: "Gallery", id: "gallery" },
  { label: "Testimonials", id: "testimonials" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "enroll" },
];

const PROGRAMS = [
  { label: "Playgroup", id: "programs" },
  { label: "Day Care", id: "programs" },
  { label: "Nursery", id: "programs" },
  { label: "Junior Kids", id: "programs" },
  { label: "Senior Kids", id: "programs" },
  { label: "After School Activities", id: "programs" },
];

const FLOAT_DECORATIONS = [
  { emoji: "⭐", left: "5%", top: "12%", delay: "0s" },
  { emoji: "🎈", left: "25%", top: "8%", delay: "1.2s" },
  { emoji: "🌸", left: "55%", top: "14%", delay: "2.4s" },
  { emoji: "🎓", left: "78%", top: "7%", delay: "0.8s" },
];

const SOCIAL_LINKS = [
  {
    icon: SiFacebook,
    label: "Facebook",
    href: "https://facebook.com",
    color: "#1877F2",
  },
  {
    icon: SiInstagram,
    label: "Instagram",
    href: "https://instagram.com",
    color: "#E1306C",
  },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function FooterSection() {
  const year = new Date().getFullYear();
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  return (
    <footer
      data-ocid="footer.section"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #1E0B3C 0%, #0D0B1E 60%, #1A0533 100%)",
      }}
    >
      {/* Floating decorative emojis near top */}
      <div
        className="absolute top-0 left-0 right-0 h-24 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {FLOAT_DECORATIONS.map((item) => (
          <div
            key={item.emoji}
            className="absolute text-xl opacity-30 float-slow"
            style={{
              left: item.left,
              top: item.top,
              animationDelay: item.delay,
            }}
          >
            {item.emoji}
          </div>
        ))}
      </div>

      {/* Subtle top arc */}
      <div className="absolute top-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          role="presentation"
        >
          <path
            d="M0,50 C480,100 960,0 1440,50 L1440,0 L0,0 Z"
            fill="white"
            fillOpacity="0.03"
          />
        </svg>
      </div>

      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-20 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{ background: "#7C3AED" }}
        />
        <div
          className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full blur-3xl opacity-10"
          style={{ background: "#EC4899" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 relative z-10">
        {/* Main grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Column 1 — Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #F97316, #EC4899)",
                }}
              >
                🧁
              </div>
              <div>
                <div
                  className="font-display text-xl"
                  style={{
                    background: "linear-gradient(135deg, #A78BFA, #F97316)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Cutie Pie Kids
                </div>
                <div className="font-body text-white/50 text-xs">
                  Pre School
                </div>
              </div>
            </div>

            <p className="font-body text-white/50 text-sm leading-relaxed mb-2 italic">
              "Where Learning Meets Play"
            </p>
            <p className="font-body text-white/45 text-sm leading-relaxed mb-6">
              Award-winning preschool in Newmarket, ON. Nurturing curious minds
              since 2019.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2.5">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-ocid={`footer.social.${label.toLowerCase()}`}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-smooth hover:scale-110"
                  style={{
                    background: `${color}33`,
                    border: `1px solid ${color}44`,
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color }} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 — Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-display text-white text-lg mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    data-ocid={`footer.nav.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
                    className="font-body text-white/55 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span
                      className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: "#A78BFA" }}
                    >
                      ›
                    </span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 — Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-display text-white text-lg mb-5">
              Our Programs
            </h4>
            <ul className="space-y-2.5">
              {PROGRAMS.map((prog) => (
                <li key={prog.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(prog.id)}
                    data-ocid={`footer.program.${prog.label.toLowerCase().replace(/\s+/g, "_")}`}
                    className="font-body text-white/55 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span
                      className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: "#F97316" }}
                    >
                      ›
                    </span>
                    {prog.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 — Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-display text-white text-lg mb-5">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(124,58,237,0.3)" }}
                >
                  <MapPin
                    className="w-3.5 h-3.5"
                    style={{ color: "#A78BFA" }}
                  />
                </div>
                <p className="font-body text-white/55 text-sm leading-snug">
                  199 Matthew Boyd Crescent,
                  <br />
                  Newmarket, ON L3X 3C7
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(236,72,153,0.3)" }}
                >
                  <Phone className="w-3.5 h-3.5" style={{ color: "#F9A8D4" }} />
                </div>
                <a
                  href="tel:+19052358877"
                  className="font-body text-white/55 hover:text-white text-sm transition-colors"
                >
                  (905) 235-8877
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(249,115,22,0.3)" }}
                >
                  <Mail className="w-3.5 h-3.5" style={{ color: "#FDBA74" }} />
                </div>
                <a
                  href="mailto:enroll@cutiepieplayschool.com"
                  className="font-body text-white/55 hover:text-white text-sm transition-colors break-all"
                >
                  enroll@cutiepieplayschool.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(13,148,136,0.3)" }}
                >
                  <Clock className="w-3.5 h-3.5" style={{ color: "#5EEAD4" }} />
                </div>
                <p className="font-body text-white/55 text-sm">
                  Mon–Sat · 8:00 AM – 3:00 PM
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-body text-white/40 text-sm text-center">
            © {year} Cutie Pie Kids Pre School. All Rights Reserved.
            {" · "}Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/55 hover:text-white transition-colors underline-offset-2 hover:underline"
            >
              caffeine.ai
            </a>
          </div>

          <div className="flex items-center gap-4">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-ocid={`footer.legal.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
                className="font-body text-white/35 hover:text-white/70 text-xs transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
