import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Stats to display — override with custom label/icon per requirements
const ABOUT_STATS = [
  {
    id: "s1",
    number: 500,
    suffix: "+",
    label: "Happy Kids",
    icon: "😊",
    color: "#7C3AED",
  },
  {
    id: "s2",
    number: 50,
    suffix: "+",
    label: "Expert Teachers",
    icon: "👩‍🏫",
    color: "#EC4899",
  },
  {
    id: "s3",
    number: 10,
    suffix: "+",
    label: "Years of Excellence",
    icon: "🏆",
    color: "#0D9488",
  },
  {
    id: "s4",
    number: 20,
    suffix: "+",
    label: "Awards Won",
    icon: "🥇",
    color: "#EAB308",
  },
];

// Animated counter component
function AnimatedCounter({
  target,
  suffix,
  color,
  triggered,
}: {
  target: number;
  suffix: string;
  color: string;
  triggered: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out curve
      const eased = 1 - (1 - progress) ** 3;
      start = Math.round(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [triggered, target]);

  return (
    <span className="font-display text-4xl md:text-5xl" style={{ color }}>
      {count}
      {suffix}
    </span>
  );
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const isSectionVisible = useInView(sectionRef, {
    once: true,
    margin: "-50px",
  });
  const isStatsVisible = useInView(statsRef, { once: true, margin: "-50px" });

  return (
    <section
      id="about"
      data-ocid="about.section"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #f3e8ff 0%, #ede9fe 30%, #fce7f3 60%, #e0f2fe 100%)",
      }}
    >
      {/* Decorative background blobs */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none -translate-x-1/2 -translate-y-1/2 blur-3xl"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none translate-x-1/3 translate-y-1/3 blur-3xl"
        style={{ background: "radial-gradient(circle, #EC4899, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none -translate-x-1/2 -translate-y-1/2 blur-2xl"
        style={{ background: "radial-gradient(circle, #0D9488, transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── SECTION HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isSectionVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <span
            className="inline-block px-5 py-2 rounded-full text-sm font-body font-bold mb-5 text-white shadow-lg"
            style={{ background: "linear-gradient(135deg, #7C3AED, #EC4899)" }}
          >
            🏫 Our Story
          </span>
          <h2
            className="font-display text-5xl md:text-6xl lg:text-7xl mb-4"
            style={{ color: "#4C1D95" }}
          >
            About{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #7C3AED, #EC4899, #F97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Us
            </span>
          </h2>
          {/* Colorful underline decoration */}
          <div className="flex justify-center gap-2 mb-5">
            <div
              className="h-1.5 w-10 rounded-full"
              style={{ background: "#7C3AED" }}
            />
            <div
              className="h-1.5 w-6 rounded-full"
              style={{ background: "#EC4899" }}
            />
            <div
              className="h-1.5 w-14 rounded-full"
              style={{ background: "#F97316" }}
            />
            <div
              className="h-1.5 w-6 rounded-full"
              style={{ background: "#0D9488" }}
            />
            <div
              className="h-1.5 w-10 rounded-full"
              style={{ background: "#EAB308" }}
            />
          </div>
          <p className="font-body text-purple-900/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Building futures, one little learner at a time
          </p>
        </motion.div>

        {/* ── TWO-COLUMN LAYOUT ── */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* LEFT: Story text + mission + vision cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isSectionVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="font-body text-purple-900/80 text-lg leading-relaxed">
              Cutie Pie Kids Pre School was established in 2019 with a vision to
              create a safe, caring, and inspiring environment for young
              learners. We believe the early years are the foundation for
              lifelong learning, nurturing curiosity, creativity, and confidence
              in every child.
            </p>

            {/* School info badge */}
            <div
              data-ocid="about.info_badge"
              className="glass-card px-5 py-3 flex flex-wrap gap-4 text-sm font-body font-semibold"
              style={{
                background: "rgba(255,255,255,0.5)",
                border: "1.5px solid rgba(124,58,237,0.25)",
              }}
            >
              <span className="flex items-center gap-1.5 text-purple-800">
                📍 <span>Newmarket, Ontario</span>
              </span>
              <span className="text-purple-300">|</span>
              <span className="flex items-center gap-1.5 text-pink-700">
                👶 <span>Ages 18 months – 6 years</span>
              </span>
              <span className="text-purple-300">|</span>
              <span className="flex items-center gap-1.5 text-teal-700">
                ⏰ <span>Mon–Sat 8AM–3PM</span>
              </span>
            </div>

            {/* Mission card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isSectionVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              data-ocid="about.mission_card"
              className="glass-card p-6 card-3d"
              style={{
                background: "rgba(255,255,255,0.55)",
                border: "1.5px solid rgba(124,58,237,0.3)",
                boxShadow: "0 8px 32px rgba(124,58,237,0.12)",
              }}
            >
              <h4
                className="font-display text-xl mb-2"
                style={{ color: "#7C3AED" }}
              >
                🎯 Our Mission
              </h4>
              <p className="font-body text-purple-900/70 text-sm leading-relaxed">
                To cultivate a love for learning in every child by providing a
                nurturing and stimulating environment that encourages
                exploration and creativity.
              </p>
            </motion.div>

            {/* Vision card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isSectionVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              data-ocid="about.vision_card"
              className="glass-card p-6 card-3d"
              style={{
                background: "rgba(255,255,255,0.55)",
                border: "1.5px solid rgba(236,72,153,0.3)",
                boxShadow: "0 8px 32px rgba(236,72,153,0.12)",
              }}
            >
              <h4
                className="font-display text-xl mb-2"
                style={{ color: "#EC4899" }}
              >
                🌟 Our Vision
              </h4>
              <p className="font-body text-purple-900/70 text-sm leading-relaxed">
                A community where every child has access to quality early
                childhood education and the opportunity to develop their full
                potential in a safe, inclusive environment.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: Image with decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isSectionVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Glow behind image */}
            <div
              className="absolute -inset-6 rounded-3xl opacity-40 blur-3xl pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, #7C3AED44, #EC489944, #F9731644)",
              }}
              aria-hidden="true"
            />

            {/* School photo */}
            <img
              src="/assets/generated/about-classroom.dim_800x600.jpg"
              alt="Happy kids learning at Cutie Pie Kids Pre School"
              className="relative rounded-3xl w-full object-cover shadow-2xl"
              style={{ maxHeight: "460px" }}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/assets/images/placeholder.svg";
              }}
            />

            {/* Floating decorative badge — bottom right */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -right-5 rounded-2xl p-4 shadow-xl text-center min-w-[90px]"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #EC4899)",
                border: "2px solid rgba(255,255,255,0.4)",
              }}
            >
              <div className="font-display text-white text-2xl leading-tight">
                10+
              </div>
              <div className="font-body text-white/80 text-xs">Years of</div>
              <div className="font-body text-white font-bold text-xs">
                Excellence
              </div>
            </motion.div>

            {/* Floating decorative star — top left */}
            <motion.div
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 4,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -left-4 rounded-2xl p-3 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #EAB308, #F97316)",
                border: "2px solid rgba(255,255,255,0.4)",
              }}
              aria-hidden="true"
            >
              <span className="text-2xl">⭐</span>
            </motion.div>

            {/* Floating trust badge — top right */}
            <div
              className="absolute -top-3 right-8 rounded-full px-3 py-1.5 text-xs font-body font-bold text-white shadow-md"
              style={{
                background: "linear-gradient(135deg, #0D9488, #7C3AED)",
              }}
            >
              ✓ NAEYC Accredited
            </div>
          </motion.div>
        </div>

        {/* ── ANIMATED STATS COUNTER ROW ── */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isSectionVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          data-ocid="about.stats_row"
          className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6"
        >
          {ABOUT_STATS.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isSectionVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              data-ocid={`about.stat.${i + 1}`}
              className="glass-card p-6 text-center flex flex-col items-center gap-2 hover:-translate-y-2 transition-transform duration-300"
              style={{
                background: "rgba(255,255,255,0.6)",
                border: `1.5px solid ${stat.color}33`,
                boxShadow: `0 8px 32px ${stat.color}1A`,
              }}
            >
              <span
                className="text-4xl float-animation"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                {stat.icon}
              </span>
              <AnimatedCounter
                target={stat.number}
                suffix={stat.suffix}
                color={stat.color}
                triggered={isStatsVisible}
              />
              <span className="font-body text-purple-900/70 text-sm font-semibold leading-tight text-center">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
