import { r as reactExports, j as jsxRuntimeExports } from "./index-r30eH0tm.js";
import { u as useInView } from "./use-in-view-Cl52uBts.js";
import { m as motion } from "./proxy-Bnxysp8x.js";
const FEATURES = [
  {
    key: "award",
    emoji: "🏆",
    title: "Award-Winning Excellence",
    description: "Recognized for outstanding early childhood education standards",
    accent: "#EAB308",
    glow: "rgba(234, 179, 8, 0.35)"
  },
  {
    key: "educators",
    emoji: "👨‍🏫",
    title: "Expert Educators",
    description: "50+ passionate, qualified, and experienced teachers dedicated to your child",
    accent: "#7C3AED",
    glow: "rgba(124, 58, 237, 0.35)"
  },
  {
    key: "safe",
    emoji: "🛡️",
    title: "Safe & Secure Environment",
    description: "State-of-the-art security, CCTV, and child-safe facilities throughout",
    accent: "#0D9488",
    glow: "rgba(13, 148, 136, 0.35)"
  },
  {
    key: "play",
    emoji: "🎮",
    title: "Play-Based Learning",
    description: "Scientifically proven methods that make learning joyful and natural",
    accent: "#EC4899",
    glow: "rgba(236, 72, 153, 0.35)"
  },
  {
    key: "meals",
    emoji: "🍎",
    title: "Nutritious Meals",
    description: "Home-style breakfast, hot lunch, and healthy snacks prepared fresh daily",
    accent: "#F97316",
    glow: "rgba(249, 115, 22, 0.35)"
  },
  {
    key: "holistic",
    emoji: "🧠",
    title: "Holistic Development",
    description: "Cognitive, emotional, physical, and social growth programs that inspire",
    accent: "#7C3AED",
    glow: "rgba(124, 58, 237, 0.35)"
  }
];
function WhyUsSection() {
  const ref = reactExports.useRef(null);
  const isVisible = useInView(ref, { once: true, margin: "-50px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "why-us",
      ref,
      className: "relative py-24 overflow-hidden",
      style: {
        background: "linear-gradient(135deg, #F97316 0%, #EC4899 45%, #EAB308 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-[-80px] left-[-80px] w-80 h-80 rounded-full pointer-events-none",
            style: { background: "rgba(255,255,255,0.12)", filter: "blur(60px)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-[-60px] right-[-60px] w-64 h-64 rounded-full pointer-events-none",
            style: { background: "rgba(255,255,255,0.10)", filter: "blur(50px)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: isVisible ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.7 },
              className: "text-center mb-16",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "inline-block px-5 py-2 rounded-full text-sm font-semibold mb-4",
                    style: {
                      background: "rgba(255,255,255,0.2)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.4)",
                      color: "#fff",
                      letterSpacing: "0.08em"
                    },
                    children: "✨ Our Promise to You"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "font-display text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg",
                    "data-ocid": "why-us.section",
                    children: "Why Choose Us?"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/85 text-lg max-w-2xl mx-auto leading-relaxed font-body", children: "Discover what makes Cutie Pie Kids the most loved preschool in the city — where every child blooms." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: FEATURES.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: isVisible ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.5, delay: index * 0.1 },
              whileHover: { y: -6 },
              "data-ocid": `why-us.item.${index + 1}`,
              className: "group relative rounded-2xl p-7 cursor-default",
              style: {
                background: "rgba(255,255,255,0.18)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,0.35)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                transition: "box-shadow 0.3s ease, background 0.3s ease"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-4 right-4 w-3 h-3 rounded-full",
                    style: { background: feature.accent }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-5 shadow-md",
                    style: {
                      background: `${feature.accent}22`,
                      border: `1.5px solid ${feature.accent}44`
                    },
                    children: feature.emoji
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-white mb-2", children: feature.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-sm leading-relaxed font-body", children: feature.description })
              ]
            },
            feature.key
          )) })
        ] })
      ]
    }
  );
}
export {
  WhyUsSection
};
