import { STATS } from "@/types/school";
import { motion } from "motion/react";
import { useCallback } from "react";

/* ─────────────────────────────── Data ───────────────────────────────── */

const FLOATING_ELEMENTS = [
  {
    emoji: "🌟",
    size: 52,
    top: "8%",
    left: "3%",
    delay: 0,
    dur: 6,
    driftX: 18,
    driftY: -22,
    rot: 20,
  },
  {
    emoji: "📚",
    size: 46,
    top: "14%",
    left: "28%",
    delay: 0.5,
    dur: 8,
    driftX: -12,
    driftY: -18,
    rot: -15,
  },
  {
    emoji: "✏️",
    size: 38,
    top: "72%",
    left: "7%",
    delay: 1.2,
    dur: 5.5,
    driftX: 14,
    driftY: -16,
    rot: 25,
  },
  {
    emoji: "🎨",
    size: 48,
    top: "58%",
    left: "2%",
    delay: 2,
    dur: 7,
    driftX: 10,
    driftY: -20,
    rot: -10,
  },
  {
    emoji: "🎯",
    size: 40,
    top: "22%",
    left: "88%",
    delay: 0.3,
    dur: 6.5,
    driftX: -16,
    driftY: -14,
    rot: 18,
  },
  {
    emoji: "🦋",
    size: 44,
    top: "42%",
    left: "92%",
    delay: 1.8,
    dur: 7.5,
    driftX: -10,
    driftY: -24,
    rot: -20,
  },
  {
    emoji: "🎈",
    size: 56,
    top: "68%",
    left: "91%",
    delay: 3,
    dur: 6,
    driftX: -14,
    driftY: -28,
    rot: 12,
  },
  {
    emoji: "🌈",
    size: 60,
    top: "38%",
    left: "87%",
    delay: 2.5,
    dur: 8.5,
    driftX: -8,
    driftY: -18,
    rot: -8,
  },
  {
    emoji: "⭐",
    size: 34,
    top: "78%",
    left: "42%",
    delay: 1,
    dur: 5,
    driftX: 8,
    driftY: -14,
    rot: 30,
  },
  {
    emoji: "🔤",
    size: 42,
    top: "85%",
    left: "18%",
    delay: 3.5,
    dur: 7,
    driftX: 12,
    driftY: -10,
    rot: -22,
  },
  {
    emoji: "🎵",
    size: 36,
    top: "52%",
    left: "95%",
    delay: 4,
    dur: 6,
    driftX: -18,
    driftY: -16,
    rot: 15,
  },
  {
    emoji: "🌸",
    size: 44,
    top: "10%",
    left: "68%",
    delay: 0.8,
    dur: 7.5,
    driftX: 6,
    driftY: -20,
    rot: -25,
  },
  {
    emoji: "🦄",
    size: 50,
    top: "30%",
    left: "6%",
    delay: 1.5,
    dur: 6.5,
    driftX: 16,
    driftY: -22,
    rot: 10,
  },
  {
    emoji: "🎪",
    size: 38,
    top: "90%",
    left: "75%",
    delay: 2.2,
    dur: 5.5,
    driftX: -6,
    driftY: -12,
    rot: -18,
  },
];

const PROGRAM_CARDS = [
  {
    emoji: "🚀",
    title: "Little Explorers",
    ages: "Ages 2–3",
    colorFrom: "#7C3AED",
    colorTo: "#EC4899",
  },
  {
    emoji: "🎨",
    title: "Creative Minds",
    ages: "Ages 3–4",
    colorFrom: "#0D9488",
    colorTo: "#EAB308",
  },
  {
    emoji: "🎓",
    title: "Early Scholars",
    ages: "Ages 4–5",
    colorFrom: "#F97316",
    colorTo: "#EC4899",
  },
];

/* ─────────────────────── Animated BG gradient ───────────────────────── */
// Injected once via a style tag so we don't pollute the global CSS file.
const BG_KEYFRAMES = `
@keyframes heroBgCycle {
  0%   { background-position: 0% 50%;   }
  25%  { background-position: 50% 0%;   }
  50%  { background-position: 100% 50%; }
  75%  { background-position: 50% 100%; }
  100% { background-position: 0% 50%;   }
}
@keyframes floatEmoji {
  0%   { transform: translate(0,0)       rotate(0deg);   opacity: 0.9; }
  30%  { transform: translate(var(--ex), calc(var(--ey) * 0.5)) rotate(calc(var(--er) * 0.5)); opacity: 1;   }
  60%  { transform: translate(calc(var(--ex) * -0.6), var(--ey)) rotate(var(--er)); opacity: 0.85; }
  100% { transform: translate(0,0)       rotate(0deg);   opacity: 0.9; }
}
@keyframes scrollBounce {
  0%, 100% { transform: translateY(0);   opacity: 1;   }
  50%       { transform: translateY(8px); opacity: 0.5; }
}
@keyframes badgePop {
  0%   { transform: scale(0.8) rotate(-4deg); opacity: 0; }
  60%  { transform: scale(1.08) rotate(2deg); opacity: 1; }
  100% { transform: scale(1) rotate(0deg);    opacity: 1; }
}
@keyframes shimmerBadge {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center;  }
}
`;

/* ─────────────────────────── Component ─────────────────────────────── */

export function HeroSection() {
  const scrollToEnroll = useCallback(() => {
    document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" });
  }, []);
  const scrollToPrograms = useCallback(() => {
    document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      {/* Inject keyframes once */}
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: CSS keyframes only — no user content */}
      <style dangerouslySetInnerHTML={{ __html: BG_KEYFRAMES }} />

      <section
        id="hero"
        data-ocid="hero.section"
        className="relative min-h-screen flex flex-col overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #7C3AED 0%, #A855F7 15%, #EC4899 35%, #F97316 55%, #0D9488 75%, #EAB308 90%, #7C3AED 100%)",
          backgroundSize: "400% 400%",
          animation: "heroBgCycle 20s ease infinite",
        }}
      >
        {/* ── Mesh overlay ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />

        {/* ── Soft radial highlight blobs ── */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div
            className="absolute rounded-full"
            style={{
              width: 520,
              height: 520,
              top: "-12%",
              left: "-8%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
              animation: "float 9s ease-in-out infinite",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 420,
              height: 420,
              bottom: "5%",
              right: "-6%",
              background:
                "radial-gradient(circle, rgba(234,179,8,0.18) 0%, transparent 70%)",
              animation: "float 11s ease-in-out infinite",
              animationDelay: "3s",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 340,
              height: 340,
              top: "38%",
              left: "45%",
              background:
                "radial-gradient(circle, rgba(13,148,136,0.16) 0%, transparent 70%)",
              animation: "float 7s ease-in-out infinite",
              animationDelay: "1.5s",
            }}
          />
        </div>

        {/* ── Floating emoji elements (CSS-only) ── */}
        <div
          className="absolute inset-0 pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          {FLOATING_ELEMENTS.map((el) => (
            <span
              key={`${el.emoji}-${el.top}-${el.left}`}
              className="absolute hidden md:block"
              style={{
                fontSize: el.size,
                top: el.top,
                left: el.left,
                // CSS custom props for drift values used in @keyframes
                ["--ex" as string]: `${el.driftX}px`,
                ["--ey" as string]: `${el.driftY}px`,
                ["--er" as string]: `${el.rot}deg`,
                animation: `floatEmoji ${el.dur}s ease-in-out ${el.delay}s infinite`,
                filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.2))",
                lineHeight: 1,
              }}
            >
              {el.emoji}
            </span>
          ))}
          {/* Mobile — fewer elements */}
          {FLOATING_ELEMENTS.slice(0, 4).map((el) => (
            <span
              key={`mob-${el.emoji}-${el.top}`}
              className="absolute block md:hidden"
              style={{
                fontSize: Math.round(el.size * 0.65),
                top: el.top,
                left: el.left,
                ["--ex" as string]: `${el.driftX}px`,
                ["--ey" as string]: `${el.driftY}px`,
                ["--er" as string]: `${el.rot}deg`,
                animation: `floatEmoji ${el.dur}s ease-in-out ${el.delay}s infinite`,
                opacity: 0.7,
                lineHeight: 1,
              }}
            >
              {el.emoji}
            </span>
          ))}
        </div>

        {/* ── Main content ── */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-28 pb-16 max-w-6xl mx-auto w-full">
          {/* Award badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            data-ocid="hero.award_badge"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-body font-bold text-sm mb-7 cursor-default"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.25), rgba(255,255,255,0.12), rgba(255,255,255,0.25))",
              backgroundSize: "200% auto",
              animation:
                "shimmerBadge 3s linear infinite, badgePop 0.7s ease forwards",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.4)",
              boxShadow:
                "0 4px 24px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.3)",
            }}
          >
            <span className="text-lg">⭐</span>
            <span>Award-Winning Preschool Since 2009</span>
            <span className="text-lg">⭐</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            data-ocid="hero.headline"
            className="font-display leading-tight mb-5"
            style={{
              fontSize: "clamp(2.4rem, 7vw, 6rem)",
              color: "#fff",
              textShadow:
                "0 2px 4px rgba(0,0,0,0.25), 0 0 60px rgba(255,255,255,0.15)",
            }}
          >
            Cutie Pie Kids
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #FDE68A, #FCD34D, #F97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "none",
                filter: "drop-shadow(0 2px 8px rgba(249,115,22,0.5))",
              }}
            >
              Pre School
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.5 }}
            data-ocid="hero.tagline"
            className="font-display text-white/95 mb-3"
            style={{
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              textShadow: "0 1px 4px rgba(0,0,0,0.2)",
            }}
          >
            Where Learning Meets Play
          </motion.p>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.58 }}
            data-ocid="hero.subtext"
            className="font-body text-white/80 text-sm sm:text-base md:text-lg max-w-xl mb-10 leading-relaxed"
          >
            Nurturing Curious Minds, Building Bright Futures
            <br className="hidden sm:block" />
            <span className="opacity-90">Ages 18 months to 6 years</span>
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <button
              type="button"
              data-ocid="hero.enroll_button"
              onClick={scrollToEnroll}
              className="px-9 py-4 rounded-full font-body font-extrabold text-lg text-white transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #F97316 0%, #EC4899 100%)",
                boxShadow:
                  "0 6px 28px rgba(249,115,22,0.5), 0 2px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 10px 40px rgba(249,115,22,0.7), 0 4px 16px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 6px 28px rgba(249,115,22,0.5), 0 2px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)";
              }}
            >
              🎓 Enroll Now
            </button>
            <button
              type="button"
              data-ocid="hero.tour_button"
              onClick={scrollToPrograms}
              className="px-9 py-4 rounded-full font-body font-extrabold text-lg text-white border-2 transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                borderColor: "rgba(255,255,255,0.55)",
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
                boxShadow:
                  "0 4px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(255,255,255,0.22)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(255,255,255,0.1)";
              }}
            >
              🏫 Take a Tour
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.85 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-2xl mb-12"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 + i * 0.08 }}
                data-ocid={`hero.stat.${i + 1}`}
                className="glass-effect rounded-2xl py-4 px-3 text-center"
                style={{
                  boxShadow:
                    "0 8px 24px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.3)",
                }}
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div
                  className="font-display text-2xl sm:text-3xl text-white font-bold"
                  style={{ textShadow: "0 1px 4px rgba(0,0,0,0.2)" }}
                >
                  {stat.value}
                </div>
                <div className="font-body text-white/80 text-xs sm:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Program preview cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl"
          >
            {PROGRAM_CARDS.map((card, i) => (
              <motion.button
                key={card.title}
                type="button"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
                whileHover={{ y: -8, scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                data-ocid={`hero.program_card.${i + 1}`}
                onClick={scrollToPrograms}
                className="glass-card p-5 text-center cursor-pointer w-full"
                style={{
                  boxShadow:
                    "0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.3)",
                }}
              >
                {/* Mini gradient header strip */}
                <div
                  className="w-full h-1.5 rounded-full mb-4 mx-auto"
                  style={{
                    background: `linear-gradient(90deg, ${card.colorFrom}, ${card.colorTo})`,
                    boxShadow: `0 0 10px ${card.colorFrom}80`,
                  }}
                />
                <div className="text-4xl mb-2">{card.emoji}</div>
                <div
                  className="font-display text-white text-lg mb-0.5"
                  style={{ textShadow: "0 1px 3px rgba(0,0,0,0.2)" }}
                >
                  {card.title}
                </div>
                <div className="font-body text-white/75 text-sm">
                  {card.ages}
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="relative z-10 flex flex-col items-center gap-1.5 pb-8 text-white/70"
          aria-label="Scroll down"
        >
          <span className="font-body text-xs tracking-widest uppercase">
            Discover More
          </span>
          <div
            style={{
              animation: "scrollBounce 1.5s ease-in-out infinite",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              role="presentation"
            >
              <title>Scroll down arrow</title>
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>

        {/* ── Wave bottom divider ── */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1440 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            role="presentation"
          >
            <title>Decorative wave</title>
            <path
              d="M0,45 C240,90 480,0 720,45 C960,90 1200,0 1440,45 L1440,90 L0,90 Z"
              fill="rgba(255,255,255,0.07)"
            />
            <path
              d="M0,65 C360,20 720,90 1080,55 C1260,35 1380,70 1440,65 L1440,90 L0,90 Z"
              fill="rgba(255,255,255,0.1)"
            />
          </svg>
        </div>
      </section>
    </>
  );
}
