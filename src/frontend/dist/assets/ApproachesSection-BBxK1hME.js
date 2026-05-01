import { r as reactExports, j as jsxRuntimeExports } from "./index-r30eH0tm.js";
import { u as useInView } from "./use-in-view-Cl52uBts.js";
import { m as motion } from "./proxy-Bnxysp8x.js";
const APPROACHES = [
  {
    key: "montessori",
    emoji: "🏺",
    name: "Montessori",
    description: "Child-led exploration with curated materials fostering independence and a love of learning at each child's own pace.",
    accent: "#7C3AED",
    glow: "rgba(124, 58, 237, 0.4)",
    bgFrom: "#7C3AED",
    bgTo: "#EC4899"
  },
  {
    key: "reggio",
    emoji: "🎨",
    name: "Reggio Emilia",
    description: "Project-based inquiry where the child's curiosity drives discovery and the environment becomes the third teacher.",
    accent: "#EC4899",
    glow: "rgba(236, 72, 153, 0.4)",
    bgFrom: "#EC4899",
    bgTo: "#F97316"
  },
  {
    key: "play-based",
    emoji: "🎲",
    name: "Play-Based Learning",
    description: "Scientifically proven methods that harness children's natural joy of play to build cognitive and social skills.",
    accent: "#F97316",
    glow: "rgba(249, 115, 22, 0.4)",
    bgFrom: "#F97316",
    bgTo: "#EAB308"
  },
  {
    key: "waldorf",
    emoji: "🌿",
    name: "Waldorf",
    description: "Rhythmic routines, nature immersion, and imaginative arts nurturing the whole child — head, heart, and hands.",
    accent: "#0D9488",
    glow: "rgba(13, 148, 136, 0.4)",
    bgFrom: "#0D9488",
    bgTo: "#7C3AED"
  },
  {
    key: "project-based",
    emoji: "📐",
    name: "Project-Based Learning",
    description: "Real-world challenges and collaborative projects that build critical thinking, creativity, and communication.",
    accent: "#EAB308",
    glow: "rgba(234, 179, 8, 0.4)",
    bgFrom: "#EAB308",
    bgTo: "#0D9488"
  }
];
function ApproachesSection() {
  const ref = reactExports.useRef(null);
  const isVisible = useInView(ref, { once: true, margin: "-50px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "approaches",
      ref,
      className: "relative py-24 overflow-hidden",
      style: {
        background: "linear-gradient(160deg, #0f0c29 0%, #302b63 50%, #24243e 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none",
            style: { background: "rgba(124,58,237,0.12)", filter: "blur(80px)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-0 right-1/3 w-80 h-80 rounded-full pointer-events-none",
            style: { background: "rgba(236,72,153,0.10)", filter: "blur(70px)" }
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
                      background: "rgba(124,58,237,0.25)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(124,58,237,0.4)",
                      color: "#c4b5fd",
                      letterSpacing: "0.08em"
                    },
                    children: "📚 Pedagogical Philosophy"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "font-display text-5xl md:text-6xl font-bold mb-4",
                    style: {
                      background: "linear-gradient(135deg, #c4b5fd, #f9a8d4, #fed7aa)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    },
                    "data-ocid": "approaches.section",
                    children: "Our Teaching Methods"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-lg max-w-2xl mx-auto leading-relaxed font-body", children: "We blend the world's most respected early childhood frameworks to create a truly exceptional learning experience." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex gap-5 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-5 snap-x snap-mandatory md:overflow-visible",
              style: { scrollbarWidth: "none" },
              children: APPROACHES.map((approach, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 24, scale: 0.97 },
                  animate: isVisible ? { opacity: 1, y: 0, scale: 1 } : {},
                  transition: { duration: 0.5, delay: index * 0.1 },
                  whileHover: { y: -8, scale: 1.03 },
                  "data-ocid": `approaches.item.${index + 1}`,
                  className: "group relative flex-none w-64 md:w-auto snap-center rounded-2xl p-6 cursor-default",
                  style: {
                    background: "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: `1.5px solid ${approach.accent}55`,
                    boxShadow: "0 4px 24px rgba(0,0,0,0.25)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "absolute top-0 left-0 right-0 h-1 rounded-t-2xl",
                        style: {
                          background: `linear-gradient(90deg, ${approach.bgFrom}, ${approach.bgTo})`
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-4",
                        style: {
                          background: `linear-gradient(135deg, ${approach.bgFrom}33, ${approach.bgTo}22)`,
                          border: `1px solid ${approach.accent}44`
                        },
                        children: approach.emoji
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "h3",
                      {
                        className: "font-display text-lg font-bold mb-2",
                        style: { color: approach.accent },
                        children: approach.name
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs leading-relaxed font-body", children: approach.description })
                  ]
                },
                approach.key
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-2 mt-6 md:hidden", children: APPROACHES.map((approach, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-2 h-2 rounded-full transition-all duration-300",
              style: {
                background: index === 0 ? approach.accent : "rgba(255,255,255,0.25)"
              }
            },
            approach.key
          )) })
        ] })
      ]
    }
  );
}
export {
  ApproachesSection
};
