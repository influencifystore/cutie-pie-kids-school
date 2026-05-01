import { r as reactExports, j as jsxRuntimeExports } from "./index-r30eH0tm.js";
import { u as useInView } from "./use-in-view-Cl52uBts.js";
import { m as motion } from "./proxy-Bnxysp8x.js";
const PROGRAM_CARDS = [
  {
    id: "playgroup",
    title: "Playgroup",
    ageRange: "Ages 18–30 months",
    tagline: "First steps in joyful learning",
    description: "A warm, nurturing environment where your little one takes their very first steps into social play, sensory discovery, and the magic of learning through joy.",
    icon: "🎠",
    features: [
      "Sensory play & exploration",
      "Guided social interaction",
      "Music & rhythm activities",
      "Parent bonding sessions"
    ],
    gradientFrom: "#7C3AED",
    gradientTo: "#A855F7",
    badgeBg: "rgba(255,255,255,0.22)"
  },
  {
    id: "daycare",
    title: "Day Care",
    ageRange: "All Ages",
    tagline: "Safe, caring home away from home",
    description: "Professional full-day care in a safe, stimulating space. Your child is loved, watched over, and engaged in enriching activities from morning to evening.",
    icon: "🏠",
    features: [
      "Full-day supervision",
      "Nutritious meals & snacks",
      "Structured play & rest",
      "Daily parent updates"
    ],
    gradientFrom: "#0EA5E9",
    gradientTo: "#0D9488",
    badgeBg: "rgba(255,255,255,0.22)"
  },
  {
    id: "nursery",
    title: "Nursery",
    ageRange: "Ages 2.5–3 years",
    tagline: "Growing minds and gentle hearts",
    description: "Gentle introduction to structured learning, creative expression, and friendship — building the social and emotional foundations every child needs.",
    icon: "🌱",
    features: [
      "Early language development",
      "Creative arts & crafts",
      "Outdoor nature play",
      "Emotional well-being focus"
    ],
    gradientFrom: "#10B981",
    gradientTo: "#0D9488",
    badgeBg: "rgba(255,255,255,0.22)"
  },
  {
    id: "junior-kids",
    title: "Junior Kids",
    ageRange: "Ages 3–4 years",
    tagline: "Building blocks for brilliance",
    description: "Hands-on learning that sparks curiosity. Through play, projects, and guided discovery, children build confidence and essential pre-school skills.",
    icon: "🎒",
    features: [
      "STEM starter projects",
      "Pre-writing & numeracy",
      "Drama & role play",
      "Group collaboration"
    ],
    gradientFrom: "#F97316",
    gradientTo: "#EF4444",
    badgeBg: "rgba(255,255,255,0.22)"
  },
  {
    id: "senior-kids",
    title: "Senior Kids",
    ageRange: "Ages 3.5–4 years",
    tagline: "Literacy, numeracy and beyond",
    description: "A step up in structured learning — reading readiness, number concepts, logical thinking, and advanced social skills to prepare for the next chapter.",
    icon: "📖",
    features: [
      "Phonics & early reading",
      "Number concepts & counting",
      "Critical thinking games",
      "Kindergarten readiness"
    ],
    gradientFrom: "#EC4899",
    gradientTo: "#BE185D",
    badgeBg: "rgba(255,255,255,0.22)"
  },
  {
    id: "after-school",
    title: "After School",
    ageRange: "Ages 4–12 years",
    tagline: "Creative afternoons of exploration",
    description: "Energising after-school sessions packed with art, music, coding, sports, and creative projects — the perfect balance of fun and focused enrichment.",
    icon: "🎨",
    features: [
      "Art, music & drama",
      "Homework support",
      "Sports & movement",
      "Coding & digital literacy"
    ],
    gradientFrom: "#EAB308",
    gradientTo: "#F97316",
    badgeBg: "rgba(255,255,255,0.22)"
  }
];
function FlipCard({
  card,
  index,
  isVisible
}) {
  const [flipped, setFlipped] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 50, scale: 0.9 },
      animate: isVisible ? { opacity: 1, y: 0, scale: 1 } : {},
      transition: { duration: 0.55, delay: index * 0.1, ease: "easeOut" },
      "data-ocid": `programs.item.${index + 1}`,
      className: "w-full",
      style: { perspective: "1000px", height: "380px" },
      onMouseEnter: () => setFlipped(true),
      onMouseLeave: () => setFlipped(false),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          style: {
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
            transition: "transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: {
                  position: "absolute",
                  inset: 0,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  background: `linear-gradient(145deg, ${card.gradientFrom}, ${card.gradientTo})`,
                  borderRadius: "24px",
                  overflow: "hidden"
                },
                className: "flex flex-col items-center justify-center p-6 shadow-xl",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute top-0 right-0 w-32 h-32 rounded-full opacity-20",
                      style: {
                        background: "rgba(255,255,255,0.4)",
                        transform: "translate(30%, -30%)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-15",
                      style: {
                        background: "rgba(255,255,255,0.3)",
                        transform: "translate(-30%, 30%)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col items-center gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-24 h-24 rounded-full flex items-center justify-center text-5xl",
                        style: { background: "rgba(255,255,255,0.2)" },
                        children: card.icon
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-white text-center leading-tight", children: card.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "px-4 py-1.5 rounded-full text-xs font-body font-bold text-white",
                        style: {
                          background: card.badgeBg,
                          border: "1px solid rgba(255,255,255,0.35)"
                        },
                        children: card.ageRange
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-white/80 text-center leading-relaxed max-w-[200px]", children: card.tagline }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-white/60 text-xs font-body flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Hover to discover" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "→" })
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                style: {
                  position: "absolute",
                  inset: 0,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.6)",
                  borderRadius: "24px",
                  overflow: "hidden"
                },
                className: "flex flex-col p-6 shadow-2xl",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl",
                      style: {
                        background: `linear-gradient(90deg, ${card.gradientFrom}, ${card.gradientTo})`
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3 mt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: card.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "h3",
                        {
                          className: "font-display text-xl leading-tight",
                          style: { color: card.gradientFrom },
                          children: card.title
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-body text-foreground/50", children: card.ageRange })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-foreground/70 leading-relaxed mb-4", children: card.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 mb-5 flex-1", children: card.features.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "flex items-center gap-2 font-body text-sm text-foreground/80",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0",
                            style: {
                              background: `linear-gradient(135deg, ${card.gradientFrom}, ${card.gradientTo})`
                            },
                            children: "✓"
                          }
                        ),
                        feature
                      ]
                    },
                    feature
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "data-ocid": `programs.enroll_button.${card.id}`,
                      onClick: () => {
                        var _a;
                        return (_a = document.getElementById("enroll")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                      },
                      className: "w-full py-2.5 rounded-xl font-body font-bold text-sm text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-lg",
                      style: {
                        background: `linear-gradient(135deg, ${card.gradientFrom}, ${card.gradientTo})`
                      },
                      children: "Enroll Now →"
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    }
  );
}
function ProgramsSection() {
  const ref = reactExports.useRef(null);
  const isVisible = useInView(ref, {
    once: true,
    margin: "-50px"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "programs",
      "data-ocid": "programs.section",
      ref,
      className: "relative py-20 md:py-28 overflow-hidden",
      style: {
        background: "linear-gradient(180deg, #f8f4ff 0%, #fff0f9 50%, #fff7ed 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            "aria-hidden": "true",
            style: {
              backgroundImage: "radial-gradient(circle at 10% 15%, #7C3AED18 0%, transparent 45%), radial-gradient(circle at 90% 85%, #EC489918 0%, transparent 45%), radial-gradient(circle at 50% 50%, #0D948812 0%, transparent 55%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-16 left-8 w-16 h-16 rounded-2xl opacity-20 float-slow",
            style: {
              background: "linear-gradient(135deg, #7C3AED, #EC4899)",
              transform: "rotate(15deg)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-24 right-10 w-12 h-12 rounded-full opacity-25 float-animation",
            style: { background: "linear-gradient(135deg, #EAB308, #F97316)" },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-1/3 right-16 w-8 h-8 rounded-full opacity-30 bounce-slow",
            style: { background: "#EC4899" },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: isVisible ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.65 },
              className: "text-center mb-16",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.span,
                  {
                    initial: { opacity: 0, scale: 0.85 },
                    animate: isVisible ? { opacity: 1, scale: 1 } : {},
                    transition: { duration: 0.5, delay: 0.1 },
                    className: "inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-body font-bold mb-5 text-white",
                    style: { background: "linear-gradient(135deg, #7C3AED, #EC4899)" },
                    children: [
                      "🎓 ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Our Programs" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    style: {
                      background: "linear-gradient(135deg, #7C3AED, #EC4899)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    },
                    children: "Our Programs ✨"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xl font-semibold mb-3",
                    style: {
                      background: "linear-gradient(135deg, #0D9488, #EAB308)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    },
                    children: "Tailored Learning for Every Stage"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-foreground/60 text-base max-w-2xl mx-auto leading-relaxed", children: "Six lovingly designed programs for children from 18 months to 12 years. Hover each card to discover what makes every program special." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-7", children: PROGRAM_CARDS.map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            FlipCard,
            {
              card,
              index: i,
              isVisible
            },
            card.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 28 },
              animate: isVisible ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.55, delay: 0.75 },
              className: "text-center mt-14 flex flex-col items-center gap-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl md:text-3xl text-foreground/80", children: "Ready to enroll your child? 🌟" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-foreground/55 text-sm max-w-sm", children: "Join 500+ happy families at Cutie Pie Kids Playschool — where every day is an adventure." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "programs.cta_enroll_button",
                    onClick: () => {
                      var _a;
                      return (_a = document.getElementById("enroll")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                    },
                    className: "mt-2 px-10 py-4 rounded-full font-body font-bold text-lg text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 glow-coral",
                    style: { background: "linear-gradient(135deg, #F97316, #EC4899)" },
                    children: "🎒 Enroll Your Child Today"
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  ProgramsSection
};
