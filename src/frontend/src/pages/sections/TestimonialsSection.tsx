import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { TESTIMONIALS, type Testimonial } from "@/types/school";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

const PROGRAM_LABELS: Record<string, string> = {
  t1: "Early Scholars",
  t2: "Little Explorers",
  t3: "Creative Minds",
  t4: "Language Stars",
  t5: "Nature Buddies",
  t6: "Early Scholars",
};

const ACCENT_COLORS = [
  "#7C3AED",
  "#EC4899",
  "#0D9488",
  "#F97316",
  "#EAB308",
  "#7C3AED",
];

function StarRating({ count }: { count: number }) {
  const starKeys = ["s1", "s2", "s3", "s4", "s5"];
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {starKeys.map((key, i) => (
        <Star
          key={key}
          className="w-4 h-4"
          fill={i < count ? "#EAB308" : "none"}
          stroke={i < count ? "#EAB308" : "#d1d5db"}
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  item,
  index,
  isActive,
}: {
  item: Testimonial;
  index: number;
  isActive: boolean;
}) {
  const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];
  const program = PROGRAM_LABELS[item.id] ?? "Program";

  return (
    <div
      className="relative flex flex-col h-full rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255, 255, 255, 0.18)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.35)",
        boxShadow: isActive
          ? `0 16px 48px rgba(0,0,0,0.15), 0 0 0 1px ${accent}30`
          : "0 8px 32px rgba(0,0,0,0.08)",
        borderLeft: `4px solid ${accent}`,
      }}
      data-ocid={`testimonials.card.${index + 1}`}
    >
      {/* Quote icon */}
      <div
        className="absolute top-4 right-4 opacity-20"
        style={{ color: accent }}
      >
        <Quote className="w-8 h-8" fill="currentColor" />
      </div>

      <div className="flex flex-col flex-1 p-6 gap-4">
        <StarRating count={item.rating} />

        <p
          className="text-sm leading-relaxed flex-1"
          style={{
            color: "rgba(30, 20, 60, 0.85)",
            fontFamily: "var(--font-body)",
          }}
        >
          &ldquo;{item.message}&rdquo;
        </p>

        <div
          className="flex items-center gap-3 pt-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.3)" }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
            style={{
              background: item.avatarColor,
              fontFamily: "var(--font-display)",
            }}
          >
            {item.initials}
          </div>
          <div className="min-w-0">
            <p
              className="font-bold text-sm truncate"
              style={{
                color: "rgba(20, 10, 50, 0.9)",
                fontFamily: "var(--font-body)",
              }}
            >
              {item.name}
            </p>
            <p
              className="text-xs truncate"
              style={{ color: "rgba(20, 10, 50, 0.6)" }}
            >
              {item.childName}
            </p>
          </div>
          <Badge
            className="ml-auto text-white text-xs flex-shrink-0 border-0"
            style={{ background: accent, fontFamily: "var(--font-body)" }}
          >
            {program}
          </Badge>
        </div>
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  const skeletonKeys = ["sk-a", "sk-b", "sk-c"];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skeletonKeys.map((key) => (
        <div
          key={key}
          className="rounded-2xl p-6 flex flex-col gap-4"
          style={{
            background: "rgba(255,255,255,0.18)",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-20 w-full" />
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-3 w-32" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [testimonials] = useState<Testimonial[]>(TESTIMONIALS);
  const [loading] = useState(false);
  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
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

  const goNext = useCallback(() => {
    setDirection("next");
    setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setDirection("prev");
    setCurrent((c) => (c <= 0 ? maxIndex : c - 1));
  }, [maxIndex]);

  useEffect(() => {
    autoRef.current = setInterval(goNext, 4000);
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [goNext]);

  const resetAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(goNext, 4000);
  }, [goNext]);

  const handleNext = () => {
    goNext();
    resetAuto();
  };
  const handlePrev = () => {
    goPrev();
    resetAuto();
  };
  const handleDot = (i: number) => {
    setDirection(i > current ? "next" : "prev");
    setCurrent(i);
    resetAuto();
  };

  const visibleCards = testimonials.slice(current, current + cardsPerView);
  const fillerCount = cardsPerView - visibleCards.length;
  const dotCount = maxIndex + 1;

  return (
    <section
      id="testimonials"
      className="relative py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0d9488 0%, #7C3AED 50%, #EC4899 100%)",
      }}
      data-ocid="testimonials.section"
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #EAB308, transparent)",
          transform: "translate(-40%, -40%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #EC4899, transparent)",
          transform: "translate(40%, 40%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 text-white/80 text-sm font-semibold tracking-wider uppercase mb-3"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <span>⭐</span>
            <span>Parent Reviews</span>
            <span>⭐</span>
          </div>
          <h2
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What Parents Say ⭐
          </h2>
          <p
            className="text-white/80 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Real stories from the families who trust us with their most precious
            little ones every day.
          </p>
        </motion.div>

        {/* Carousel */}
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <>
            <div className="relative" data-ocid="testimonials.carousel">
              {/* Prev button */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                style={{
                  background: "rgba(255,255,255,0.25)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.4)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                }}
                aria-label="Previous testimonial"
                data-ocid="testimonials.pagination_prev"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>

              {/* Cards grid */}
              <div
                className="overflow-hidden mx-6"
                style={{ minHeight: "340px" }}
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, x: direction === "next" ? 80 : -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction === "next" ? -80 : 80 }}
                    transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                    className="grid gap-6"
                    style={{
                      gridTemplateColumns: `repeat(${cardsPerView}, minmax(0, 1fr))`,
                    }}
                  >
                    {visibleCards.map((item, idx) => (
                      <TestimonialCard
                        key={item.id}
                        item={item}
                        index={current + idx}
                        isActive={idx === 0}
                      />
                    ))}
                    {fillerCount > 0 &&
                      ["fa", "fb", "fc"]
                        .slice(0, fillerCount)
                        .map((fk) => <div key={fk} className="invisible" />)}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next button */}
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                style={{
                  background: "rgba(255,255,255,0.25)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.4)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                }}
                aria-label="Next testimonial"
                data-ocid="testimonials.pagination_next"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Dot indicators */}
            <div
              className="flex items-center justify-center gap-2 mt-8"
              role="tablist"
              aria-label="Testimonial pages"
            >
              {testimonials.slice(0, dotCount).map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => handleDot(i)}
                  className="transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  style={{
                    width: i === current ? "28px" : "10px",
                    height: "10px",
                    background:
                      i === current
                        ? "rgba(255,255,255,1)"
                        : "rgba(255,255,255,0.4)",
                  }}
                  data-ocid={`testimonials.dot.${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
