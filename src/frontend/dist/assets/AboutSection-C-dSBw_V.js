import { r as reactExports, j as jsxRuntimeExports } from "./index-r30eH0tm.js";
import { u as useInView } from "./use-in-view-Cl52uBts.js";
import { m as motion } from "./proxy-Bnxysp8x.js";
const ABOUT_STATS = [
  {
    id: "s1",
    number: 500,
    suffix: "+",
    label: "Happy Kids",
    icon: "😊",
    color: "#7C3AED"
  },
  {
    id: "s2",
    number: 50,
    suffix: "+",
    label: "Expert Teachers",
    icon: "👩‍🏫",
    color: "#EC4899"
  },
  {
    id: "s3",
    number: 10,
    suffix: "+",
    label: "Years of Excellence",
    icon: "🏆",
    color: "#0D9488"
  },
  {
    id: "s4",
    number: 20,
    suffix: "+",
    label: "Awards Won",
    icon: "🥇",
    color: "#EAB308"
  }
];
function AnimatedCounter({
  target,
  suffix,
  color,
  triggered
}) {
  const [count, setCount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const duration = 2e3;
    const startTime = performance.now();
    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      start = Math.round(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [triggered, target]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-4xl md:text-5xl", style: { color }, children: [
    count,
    suffix
  ] });
}
function AboutSection() {
  const sectionRef = reactExports.useRef(null);
  const statsRef = reactExports.useRef(null);
  const isSectionVisible = useInView(sectionRef, {
    once: true,
    margin: "-50px"
  });
  const isStatsVisible = useInView(statsRef, { once: true, margin: "-50px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "about",
      "data-ocid": "about.section",
      ref: sectionRef,
      className: "relative py-24 md:py-32 overflow-hidden",
      style: {
        background: "linear-gradient(160deg, #f3e8ff 0%, #ede9fe 30%, #fce7f3 60%, #e0f2fe 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none -translate-x-1/2 -translate-y-1/2 blur-3xl",
            style: { background: "radial-gradient(circle, #7C3AED, transparent)" },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none translate-x-1/3 translate-y-1/3 blur-3xl",
            style: { background: "radial-gradient(circle, #EC4899, transparent)" },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none -translate-x-1/2 -translate-y-1/2 blur-2xl",
            style: { background: "radial-gradient(circle, #0D9488, transparent)" },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 40 },
              animate: isSectionVisible ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.7 },
              className: "text-center mb-16 md:mb-20",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "inline-block px-5 py-2 rounded-full text-sm font-body font-bold mb-5 text-white shadow-lg",
                    style: { background: "linear-gradient(135deg, #7C3AED, #EC4899)" },
                    children: "🏫 Our Story"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h2",
                  {
                    className: "font-display text-5xl md:text-6xl lg:text-7xl mb-4",
                    style: { color: "#4C1D95" },
                    children: [
                      "About",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          style: {
                            background: "linear-gradient(135deg, #7C3AED, #EC4899, #F97316)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text"
                          },
                          children: "Us"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-2 mb-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "h-1.5 w-10 rounded-full",
                      style: { background: "#7C3AED" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "h-1.5 w-6 rounded-full",
                      style: { background: "#EC4899" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "h-1.5 w-14 rounded-full",
                      style: { background: "#F97316" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "h-1.5 w-6 rounded-full",
                      style: { background: "#0D9488" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "h-1.5 w-10 rounded-full",
                      style: { background: "#EAB308" }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-purple-900/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed", children: "Building futures, one little learner at a time" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -50 },
                animate: isSectionVisible ? { opacity: 1, x: 0 } : {},
                transition: { duration: 0.8, delay: 0.2 },
                className: "space-y-6",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-purple-900/80 text-lg leading-relaxed", children: "Cutie Pie Kids Pre School was established in 2019 with a vision to create a safe, caring, and inspiring environment for young learners. We believe the early years are the foundation for lifelong learning, nurturing curiosity, creativity, and confidence in every child." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      "data-ocid": "about.info_badge",
                      className: "glass-card px-5 py-3 flex flex-wrap gap-4 text-sm font-body font-semibold",
                      style: {
                        background: "rgba(255,255,255,0.5)",
                        border: "1.5px solid rgba(124,58,237,0.25)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-purple-800", children: [
                          "📍 ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Newmarket, Ontario" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-300", children: "|" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-pink-700", children: [
                          "👶 ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Ages 18 months – 6 years" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-purple-300", children: "|" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-teal-700", children: [
                          "⏰ ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Mon–Sat 8AM–3PM" })
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: isSectionVisible ? { opacity: 1, y: 0 } : {},
                      transition: { duration: 0.6, delay: 0.4 },
                      "data-ocid": "about.mission_card",
                      className: "glass-card p-6 card-3d",
                      style: {
                        background: "rgba(255,255,255,0.55)",
                        border: "1.5px solid rgba(124,58,237,0.3)",
                        boxShadow: "0 8px 32px rgba(124,58,237,0.12)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h4",
                          {
                            className: "font-display text-xl mb-2",
                            style: { color: "#7C3AED" },
                            children: "🎯 Our Mission"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-purple-900/70 text-sm leading-relaxed", children: "To cultivate a love for learning in every child by providing a nurturing and stimulating environment that encourages exploration and creativity." })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: isSectionVisible ? { opacity: 1, y: 0 } : {},
                      transition: { duration: 0.6, delay: 0.55 },
                      "data-ocid": "about.vision_card",
                      className: "glass-card p-6 card-3d",
                      style: {
                        background: "rgba(255,255,255,0.55)",
                        border: "1.5px solid rgba(236,72,153,0.3)",
                        boxShadow: "0 8px 32px rgba(236,72,153,0.12)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h4",
                          {
                            className: "font-display text-xl mb-2",
                            style: { color: "#EC4899" },
                            children: "🌟 Our Vision"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-purple-900/70 text-sm leading-relaxed", children: "A community where every child has access to quality early childhood education and the opportunity to develop their full potential in a safe, inclusive environment." })
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 50 },
                animate: isSectionVisible ? { opacity: 1, x: 0 } : {},
                transition: { duration: 0.8, delay: 0.3 },
                className: "relative",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute -inset-6 rounded-3xl opacity-40 blur-3xl pointer-events-none",
                      style: {
                        background: "linear-gradient(135deg, #7C3AED44, #EC489944, #F9731644)"
                      },
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: "/assets/generated/about-classroom.dim_800x600.jpg",
                      alt: "Happy kids learning at Cutie Pie Kids Pre School",
                      className: "relative rounded-3xl w-full object-cover shadow-2xl",
                      style: { maxHeight: "460px" },
                      onError: (e) => {
                        e.target.src = "/assets/images/placeholder.svg";
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      animate: { y: [0, -8, 0] },
                      transition: {
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 3,
                        ease: "easeInOut"
                      },
                      className: "absolute -bottom-5 -right-5 rounded-2xl p-4 shadow-xl text-center min-w-[90px]",
                      style: {
                        background: "linear-gradient(135deg, #7C3AED, #EC4899)",
                        border: "2px solid rgba(255,255,255,0.4)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-white text-2xl leading-tight", children: "10+" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-white/80 text-xs", children: "Years of" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-white font-bold text-xs", children: "Excellence" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      animate: { rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] },
                      transition: {
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 4,
                        ease: "easeInOut"
                      },
                      className: "absolute -top-4 -left-4 rounded-2xl p-3 shadow-lg",
                      style: {
                        background: "linear-gradient(135deg, #EAB308, #F97316)",
                        border: "2px solid rgba(255,255,255,0.4)"
                      },
                      "aria-hidden": "true",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "⭐" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute -top-3 right-8 rounded-full px-3 py-1.5 text-xs font-body font-bold text-white shadow-md",
                      style: {
                        background: "linear-gradient(135deg, #0D9488, #7C3AED)"
                      },
                      children: "✓ NAEYC Accredited"
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              ref: statsRef,
              initial: { opacity: 0, y: 40 },
              animate: isSectionVisible ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.7, delay: 0.5 },
              "data-ocid": "about.stats_row",
              className: "grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6",
              children: ABOUT_STATS.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, scale: 0.85 },
                  animate: isSectionVisible ? { opacity: 1, scale: 1 } : {},
                  transition: { duration: 0.5, delay: 0.6 + i * 0.1 },
                  "data-ocid": `about.stat.${i + 1}`,
                  className: "glass-card p-6 text-center flex flex-col items-center gap-2 hover:-translate-y-2 transition-transform duration-300",
                  style: {
                    background: "rgba(255,255,255,0.6)",
                    border: `1.5px solid ${stat.color}33`,
                    boxShadow: `0 8px 32px ${stat.color}1A`
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-4xl float-animation",
                        style: { animationDelay: `${i * 0.5}s` },
                        children: stat.icon
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      AnimatedCounter,
                      {
                        target: stat.number,
                        suffix: stat.suffix,
                        color: stat.color,
                        triggered: isStatsVisible
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-purple-900/70 text-sm font-semibold leading-tight text-center", children: stat.label })
                  ]
                },
                stat.id
              ))
            }
          )
        ] })
      ]
    }
  );
}
export {
  AboutSection
};
