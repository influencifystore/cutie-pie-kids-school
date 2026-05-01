import { j as jsxRuntimeExports } from "./index-r30eH0tm.js";
import { S as SiFacebook, b as SiInstagram, M as MapPin, P as Phone, a as Mail, C as Clock } from "./index-CBa1Jxvb.js";
import { m as motion } from "./proxy-Bnxysp8x.js";
const QUICK_LINKS = [
  { label: "Home", id: "hero" },
  { label: "About Us", id: "about" },
  { label: "Our Programs", id: "programs" },
  { label: "Why Choose Us", id: "why-us" },
  { label: "Gallery", id: "gallery" },
  { label: "Testimonials", id: "testimonials" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "enroll" }
];
const PROGRAMS = [
  { label: "Playgroup", id: "programs" },
  { label: "Day Care", id: "programs" },
  { label: "Nursery", id: "programs" },
  { label: "Junior Kids", id: "programs" },
  { label: "Senior Kids", id: "programs" },
  { label: "After School Activities", id: "programs" }
];
const FLOAT_DECORATIONS = [
  { emoji: "⭐", left: "5%", top: "12%", delay: "0s" },
  { emoji: "🎈", left: "25%", top: "8%", delay: "1.2s" },
  { emoji: "🌸", left: "55%", top: "14%", delay: "2.4s" },
  { emoji: "🎓", left: "78%", top: "7%", delay: "0.8s" }
];
const SOCIAL_LINKS = [
  {
    icon: SiFacebook,
    label: "Facebook",
    href: "https://facebook.com",
    color: "#1877F2"
  },
  {
    icon: SiInstagram,
    label: "Instagram",
    href: "https://instagram.com",
    color: "#E1306C"
  }
];
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
function FooterSection() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "footer",
    {
      "data-ocid": "footer.section",
      className: "relative overflow-hidden",
      style: {
        background: "linear-gradient(160deg, #1E0B3C 0%, #0D0B1E 60%, #1A0533 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 left-0 right-0 h-24 overflow-hidden pointer-events-none",
            "aria-hidden": "true",
            children: FLOAT_DECORATIONS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute text-xl opacity-30 float-slow",
                style: {
                  left: item.left,
                  top: item.top,
                  animationDelay: item.delay
                },
                children: item.emoji
              },
              item.emoji
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "svg",
          {
            viewBox: "0 0 1440 90",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "w-full",
            role: "presentation",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                d: "M0,50 C480,100 960,0 1440,50 L1440,0 L0,0 Z",
                fill: "white",
                fillOpacity: "0.03"
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-20 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-10",
              style: { background: "#7C3AED" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-20 right-1/4 w-48 h-48 rounded-full blur-3xl opacity-10",
              style: { background: "#EC4899" }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0",
                        style: {
                          background: "linear-gradient(135deg, #F97316, #EC4899)"
                        },
                        children: "🧁"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "font-display text-xl",
                          style: {
                            background: "linear-gradient(135deg, #A78BFA, #F97316)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text"
                          },
                          children: "Cutie Pie Kids"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-white/50 text-xs", children: "Pre School" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-white/50 text-sm leading-relaxed mb-2 italic", children: '"Where Learning Meets Play"' }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-white/45 text-sm leading-relaxed mb-6", children: "Award-winning preschool in Newmarket, ON. Nurturing curious minds since 2019." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2.5", children: SOCIAL_LINKS.map(({ icon: Icon, label, href, color }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": label,
                      "data-ocid": `footer.social.${label.toLowerCase()}`,
                      className: "w-9 h-9 rounded-full flex items-center justify-center transition-smooth hover:scale-110",
                      style: {
                        background: `${color}33`,
                        border: `1px solid ${color}44`
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4", style: { color } })
                    },
                    label
                  )) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: 0.1 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-white text-lg mb-5", children: "Quick Links" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: QUICK_LINKS.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => scrollTo(link.id),
                      "data-ocid": `footer.nav.${link.label.toLowerCase().replace(/\s+/g, "_")}`,
                      className: "font-body text-white/55 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "inline-block transition-transform duration-200 group-hover:translate-x-1",
                            style: { color: "#A78BFA" },
                            children: "›"
                          }
                        ),
                        link.label
                      ]
                    }
                  ) }, link.label)) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: 0.2 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-white text-lg mb-5", children: "Our Programs" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: PROGRAMS.map((prog) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => scrollTo(prog.id),
                      "data-ocid": `footer.program.${prog.label.toLowerCase().replace(/\s+/g, "_")}`,
                      className: "font-body text-white/55 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "inline-block transition-transform duration-200 group-hover:translate-x-1",
                            style: { color: "#F97316" },
                            children: "›"
                          }
                        ),
                        prog.label
                      ]
                    }
                  ) }, prog.label)) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: 0.3 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-white text-lg mb-5", children: "Contact Us" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                          style: { background: "rgba(124,58,237,0.3)" },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            MapPin,
                            {
                              className: "w-3.5 h-3.5",
                              style: { color: "#A78BFA" }
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-white/55 text-sm leading-snug", children: [
                        "199 Matthew Boyd Crescent,",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                        "Newmarket, ON L3X 3C7"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                          style: { background: "rgba(236,72,153,0.3)" },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3.5 h-3.5", style: { color: "#F9A8D4" } })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "a",
                        {
                          href: "tel:+19052358877",
                          className: "font-body text-white/55 hover:text-white text-sm transition-colors",
                          children: "(905) 235-8877"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                          style: { background: "rgba(249,115,22,0.3)" },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3.5 h-3.5", style: { color: "#FDBA74" } })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "a",
                        {
                          href: "mailto:enroll@cutiepieplayschool.com",
                          className: "font-body text-white/55 hover:text-white text-sm transition-colors break-all",
                          children: "enroll@cutiepieplayschool.com"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                          style: { background: "rgba(13,148,136,0.3)" },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5", style: { color: "#5EEAD4" } })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-white/55 text-sm", children: "Mon–Sat · 8:00 AM – 3:00 PM" })
                    ] })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-white/10 pt-7 flex flex-col md:flex-row items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-body text-white/40 text-sm text-center", children: [
              "© ",
              year,
              " Cutie Pie Kids Pre School. All Rights Reserved.",
              " · ",
              "Built with love using",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: caffeineUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-white/55 hover:text-white transition-colors underline-offset-2 hover:underline",
                  children: "caffeine.ai"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4", children: [
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" }
            ].map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: link.href,
                "data-ocid": `footer.legal.${link.label.toLowerCase().replace(/\s+/g, "_")}`,
                className: "font-body text-white/35 hover:text-white/70 text-xs transition-colors",
                children: link.label
              },
              link.label
            )) })
          ] })
        ] })
      ]
    }
  );
}
export {
  FooterSection
};
