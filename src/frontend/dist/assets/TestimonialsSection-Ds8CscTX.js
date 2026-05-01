import { c as createLucideIcon, j as jsxRuntimeExports, S as Slot, a as cn, b as cva, r as reactExports } from "./index-r30eH0tm.js";
import { C as ChevronLeft, S as Skeleton } from "./skeleton-kB1k_gi6.js";
import { T as TESTIMONIALS } from "./school-DD2wU6QB.js";
import { m as motion } from "./proxy-Bnxysp8x.js";
import { A as AnimatePresence, C as ChevronRight } from "./index-BqJXeTkb.js";
import { S as Star } from "./star-Bufw91aF.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode);
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-destructive-foreground [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}
const PROGRAM_LABELS = {
  t1: "Early Scholars",
  t2: "Little Explorers",
  t3: "Creative Minds",
  t4: "Language Stars",
  t5: "Nature Buddies",
  t6: "Early Scholars"
};
const ACCENT_COLORS = [
  "#7C3AED",
  "#EC4899",
  "#0D9488",
  "#F97316",
  "#EAB308",
  "#7C3AED"
];
function StarRating({ count }) {
  const starKeys = ["s1", "s2", "s3", "s4", "s5"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", "aria-label": `${count} out of 5 stars`, children: starKeys.map((key, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    Star,
    {
      className: "w-4 h-4",
      fill: i < count ? "#EAB308" : "none",
      stroke: i < count ? "#EAB308" : "#d1d5db"
    },
    key
  )) });
}
function TestimonialCard({
  item,
  index,
  isActive
}) {
  const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];
  const program = PROGRAM_LABELS[item.id] ?? "Program";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative flex flex-col h-full rounded-2xl overflow-hidden",
      style: {
        background: "rgba(255, 255, 255, 0.18)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.35)",
        boxShadow: isActive ? `0 16px 48px rgba(0,0,0,0.15), 0 0 0 1px ${accent}30` : "0 8px 32px rgba(0,0,0,0.08)",
        borderLeft: `4px solid ${accent}`
      },
      "data-ocid": `testimonials.card.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-4 right-4 opacity-20",
            style: { color: accent },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "w-8 h-8", fill: "currentColor" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col flex-1 p-6 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { count: item.rating }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "text-sm leading-relaxed flex-1",
              style: {
                color: "rgba(30, 20, 60, 0.85)",
                fontFamily: "var(--font-body)"
              },
              children: [
                "“",
                item.message,
                "”"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-3 pt-2",
              style: { borderTop: "1px solid rgba(255,255,255,0.3)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0",
                    style: {
                      background: item.avatarColor,
                      fontFamily: "var(--font-display)"
                    },
                    children: item.initials
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-bold text-sm truncate",
                      style: {
                        color: "rgba(20, 10, 50, 0.9)",
                        fontFamily: "var(--font-body)"
                      },
                      children: item.name
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs truncate",
                      style: { color: "rgba(20, 10, 50, 0.6)" },
                      children: item.childName
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: "ml-auto text-white text-xs flex-shrink-0 border-0",
                    style: { background: accent, fontFamily: "var(--font-body)" },
                    children: program
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
function LoadingSkeleton() {
  const skeletonKeys = ["sk-a", "sk-b", "sk-c"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: skeletonKeys.map((key) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-2xl p-6 flex flex-col gap-4",
      style: {
        background: "rgba(255,255,255,0.18)",
        border: "1px solid rgba(255,255,255,0.3)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-10 rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-32" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-24" })
          ] })
        ] })
      ]
    },
    key
  )) });
}
function TestimonialsSection() {
  const [testimonials] = reactExports.useState(TESTIMONIALS);
  const [loading] = reactExports.useState(false);
  const [current, setCurrent] = reactExports.useState(0);
  const [cardsPerView, setCardsPerView] = reactExports.useState(3);
  const [direction, setDirection] = reactExports.useState("next");
  const autoRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    function updateCards() {
      const w = window.innerWidth;
      if (w < 768) setCardsPerView(1);
      else if (w < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    }
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);
  const total = testimonials.length;
  const maxIndex = Math.max(0, total - cardsPerView);
  const goNext = reactExports.useCallback(() => {
    setDirection("next");
    setCurrent((c) => c >= maxIndex ? 0 : c + 1);
  }, [maxIndex]);
  const goPrev = reactExports.useCallback(() => {
    setDirection("prev");
    setCurrent((c) => c <= 0 ? maxIndex : c - 1);
  }, [maxIndex]);
  reactExports.useEffect(() => {
    autoRef.current = setInterval(goNext, 4e3);
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [goNext]);
  const resetAuto = reactExports.useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(goNext, 4e3);
  }, [goNext]);
  const handleNext = () => {
    goNext();
    resetAuto();
  };
  const handlePrev = () => {
    goPrev();
    resetAuto();
  };
  const handleDot = (i) => {
    setDirection(i > current ? "next" : "prev");
    setCurrent(i);
    resetAuto();
  };
  const visibleCards = testimonials.slice(current, current + cardsPerView);
  const fillerCount = cardsPerView - visibleCards.length;
  const dotCount = maxIndex + 1;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "testimonials",
      className: "relative py-20 overflow-hidden",
      style: {
        background: "linear-gradient(135deg, #0d9488 0%, #7C3AED 50%, #EC4899 100%)"
      },
      "data-ocid": "testimonials.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 left-0 w-80 h-80 rounded-full opacity-20 pointer-events-none",
            style: {
              background: "radial-gradient(circle, #EAB308, transparent)",
              transform: "translate(-40%, -40%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-20 pointer-events-none",
            style: {
              background: "radial-gradient(circle, #EC4899, transparent)",
              transform: "translate(40%, 40%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              className: "text-center mb-14",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "inline-flex items-center gap-2 text-white/80 text-sm font-semibold tracking-wider uppercase mb-3",
                    style: { fontFamily: "var(--font-body)" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⭐" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Parent Reviews" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⭐" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "text-4xl md:text-5xl text-white mb-4",
                    style: { fontFamily: "var(--font-display)" },
                    children: "What Parents Say ⭐"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-white/80 text-lg max-w-2xl mx-auto",
                    style: { fontFamily: "var(--font-body)" },
                    children: "Real stories from the families who trust us with their most precious little ones every day."
                  }
                )
              ]
            }
          ),
          loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSkeleton, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", "data-ocid": "testimonials.carousel", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handlePrev,
                  className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                  style: {
                    background: "rgba(255,255,255,0.25)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.4)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.15)"
                  },
                  "aria-label": "Previous testimonial",
                  "data-ocid": "testimonials.pagination_prev",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5 text-white" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "overflow-hidden mx-6",
                  style: { minHeight: "340px" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, x: direction === "next" ? 80 : -80 },
                      animate: { opacity: 1, x: 0 },
                      exit: { opacity: 0, x: direction === "next" ? -80 : 80 },
                      transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
                      className: "grid gap-6",
                      style: {
                        gridTemplateColumns: `repeat(${cardsPerView}, minmax(0, 1fr))`
                      },
                      children: [
                        visibleCards.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          TestimonialCard,
                          {
                            item,
                            index: current + idx,
                            isActive: idx === 0
                          },
                          item.id
                        )),
                        fillerCount > 0 && ["fa", "fb", "fc"].slice(0, fillerCount).map((fk) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "invisible" }, fk))
                      ]
                    },
                    current
                  ) })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleNext,
                  className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                  style: {
                    background: "rgba(255,255,255,0.25)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.4)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.15)"
                  },
                  "aria-label": "Next testimonial",
                  "data-ocid": "testimonials.pagination_next",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5 text-white" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex items-center justify-center gap-2 mt-8",
                role: "tablist",
                "aria-label": "Testimonial pages",
                children: testimonials.slice(0, dotCount).map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    role: "tab",
                    "aria-selected": i === current,
                    "aria-label": `Go to slide ${i + 1}`,
                    onClick: () => handleDot(i),
                    className: "transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                    style: {
                      width: i === current ? "28px" : "10px",
                      height: "10px",
                      background: i === current ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.4)"
                    },
                    "data-ocid": `testimonials.dot.${i + 1}`
                  },
                  t.id
                ))
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  TestimonialsSection
};
