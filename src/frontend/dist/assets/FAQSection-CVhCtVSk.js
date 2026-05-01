import { r as reactExports, j as jsxRuntimeExports } from "./index-r30eH0tm.js";
import { F as FAQ_ITEMS } from "./school-DD2wU6QB.js";
import { m as motion } from "./proxy-Bnxysp8x.js";
import { C as ChevronRight, A as AnimatePresence } from "./index-BqJXeTkb.js";
const BORDER_COLORS = [
  "#7C3AED",
  "#EC4899",
  "#0D9488",
  "#F97316",
  "#EAB308",
  "#7C3AED",
  "#EC4899",
  "#0D9488",
  "#F97316",
  "#EAB308"
];
const CATEGORY_BADGE = {
  enrollment: { bg: "#7C3AED20", text: "#7C3AED" },
  general: { bg: "#0D948820", text: "#0D9488" },
  programs: { bg: "#EC489920", text: "#EC4899" },
  safety: { bg: "#F9731620", text: "#F97316" },
  staff: { bg: "#EAB30820", text: "#b45309" }
};
function FAQAccordionItem({
  item,
  index,
  isOpen,
  onToggle
}) {
  const accent = BORDER_COLORS[index % BORDER_COLORS.length];
  const badge = CATEGORY_BADGE[item.category] ?? {
    bg: "#7C3AED20",
    text: "#7C3AED"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      layout: true,
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.4, delay: index * 0.05 },
      className: "rounded-2xl overflow-hidden",
      style: {
        background: isOpen ? `linear-gradient(135deg, ${accent}08 0%, rgba(255,255,255,0.97) 100%)` : "rgba(255, 255, 255, 0.87)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        border: `1px solid ${isOpen ? `${accent}40` : "rgba(200,185,240,0.3)"}`,
        borderLeft: `4px solid ${accent}`,
        boxShadow: isOpen ? `0 12px 40px ${accent}22, 0 2px 8px rgba(0,0,0,0.06)` : "0 2px 12px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.3s ease, background 0.3s ease"
      },
      "data-ocid": `faq.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: onToggle,
            className: "w-full flex items-center gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-purple-400",
            "aria-expanded": isOpen,
            "data-ocid": `faq.toggle.${index + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold",
                  style: { background: accent, fontFamily: "var(--font-body)" },
                  children: index + 1
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "flex-1 text-base min-w-0",
                  style: {
                    color: isOpen ? accent : "rgba(25, 15, 50, 0.85)",
                    fontFamily: "var(--font-body)",
                    fontWeight: 700
                  },
                  children: item.question
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "hidden sm:inline-flex flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full capitalize",
                  style: {
                    background: badge.bg,
                    color: badge.text,
                    fontFamily: "var(--font-body)"
                  },
                  children: item.category
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  animate: { rotate: isOpen ? 90 : 0 },
                  transition: { duration: 0.25, ease: "easeInOut" },
                  className: "flex-shrink-0 ml-1",
                  style: { color: accent },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            transition: { duration: 0.32, ease: [0.4, 0, 0.2, 1] },
            style: { overflow: "hidden" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "mx-6 mb-5 px-5 py-4 rounded-xl text-sm leading-relaxed",
                style: {
                  background: "rgba(248, 245, 255, 0.9)",
                  color: "rgba(40, 25, 80, 0.8)",
                  fontFamily: "var(--font-body)",
                  borderTop: `1px solid ${accent}20`
                },
                children: item.answer
              }
            )
          },
          "answer"
        ) })
      ]
    }
  );
}
function FAQSection() {
  const [openId, setOpenId] = reactExports.useState("faq1");
  const handleToggle = (id) => {
    setOpenId((prev) => prev === id ? null : id);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "faq",
      className: "relative py-20 overflow-hidden",
      style: {
        background: "linear-gradient(160deg, #f3f0ff 0%, #fdf4ff 40%, #f0fffe 100%)"
      },
      "data-ocid": "faq.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 right-0 w-72 h-72 rounded-full opacity-30 pointer-events-none",
            style: {
              background: "radial-gradient(circle, #7C3AED40, transparent 70%)",
              transform: "translate(30%, -30%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-30 pointer-events-none",
            style: {
              background: "radial-gradient(circle, #0D948840, transparent 70%)",
              transform: "translate(-30%, 30%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-1/2 right-10 opacity-10 pointer-events-none select-none",
            style: { fontSize: "200px", transform: "translateY(-50%)" },
            children: "❓"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
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
                    className: "inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase mb-3 px-4 py-2 rounded-full",
                    style: {
                      background: "rgba(124, 58, 237, 0.1)",
                      color: "#7C3AED",
                      fontFamily: "var(--font-body)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "❓" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Got Questions?" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "text-4xl md:text-5xl mb-4",
                    style: {
                      fontFamily: "var(--font-display)",
                      background: "linear-gradient(135deg, #7C3AED, #EC4899, #F97316)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    },
                    children: "Frequently Asked Questions ❓"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-lg max-w-2xl mx-auto",
                    style: {
                      color: "rgba(40, 25, 80, 0.65)",
                      fontFamily: "var(--font-body)"
                    },
                    children: "Everything you need to know about Cutie Pie Kids. Can’t find the answer? Reach out to us directly!"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-4", "data-ocid": "faq.list", children: FAQ_ITEMS.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            FAQAccordionItem,
            {
              item,
              index,
              isOpen: openId === item.id,
              onToggle: () => handleToggle(item.id)
            },
            item.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: 0.2 },
              className: "mt-14 text-center rounded-3xl p-8",
              style: {
                background: "linear-gradient(135deg, rgba(124,58,237,0.08), rgba(236,72,153,0.08))",
                border: "1px solid rgba(124,58,237,0.15)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-3", children: "💬" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "text-2xl mb-2",
                    style: { fontFamily: "var(--font-display)", color: "#7C3AED" },
                    children: "Still Have Questions?"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "mb-6 text-base",
                    style: {
                      color: "rgba(40, 25, 80, 0.65)",
                      fontFamily: "var(--font-body)"
                    },
                    children: "Our team is always happy to help! We’ll get back to you within 24 hours."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      var _a;
                      return (_a = document.getElementById("enroll")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                    },
                    className: "inline-flex items-center gap-2 text-white font-bold px-8 py-3.5 rounded-full transition-smooth hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400",
                    style: {
                      background: "linear-gradient(135deg, #7C3AED, #EC4899)",
                      boxShadow: "0 8px 24px rgba(124, 58, 237, 0.35)",
                      fontFamily: "var(--font-body)"
                    },
                    "data-ocid": "faq.contact_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "💬" }),
                      "Contact Us Today"
                    ]
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
  FAQSection
};
