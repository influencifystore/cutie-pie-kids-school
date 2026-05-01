import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface TherapyService {
  key: string;
  emoji: string;
  title: string;
  tagline: string;
  description: string;
  accent: string;
  glow: string;
  gradient: string;
  features: string[];
}

const THERAPY_SERVICES: TherapyService[] = [
  {
    key: "speech",
    emoji: "🗣️",
    title: "Speech Therapy",
    tagline: "Find Your Voice",
    description:
      "Expert speech-language therapy to help children communicate with confidence, clarity, and joy.",
    accent: "#7C3AED",
    glow: "rgba(124, 58, 237, 0.45)",
    gradient: "linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)",
    features: [
      "Articulation therapy",
      "Language development",
      "Social communication",
      "AAC support",
    ],
  },
  {
    key: "occupational",
    emoji: "🤲",
    title: "Occupational Therapy",
    tagline: "Build Every Skill",
    description:
      "Developing fine motor skills and independence through targeted, play-based activities tailored to each child.",
    accent: "#0D9488",
    glow: "rgba(13, 148, 136, 0.45)",
    gradient: "linear-gradient(135deg, #0D9488 0%, #EAB308 100%)",
    features: [
      "Fine motor skills",
      "Sensory integration",
      "Self-care skills",
      "Handwriting readiness",
    ],
  },
  {
    key: "counseling",
    emoji: "💬",
    title: "Professional Counseling",
    tagline: "Grow Emotionally",
    description:
      "Emotional wellbeing and anger management support for children's mental health and social flourishing.",
    accent: "#EC4899",
    glow: "rgba(236, 72, 153, 0.45)",
    gradient: "linear-gradient(135deg, #EC4899 0%, #F97316 100%)",
    features: [
      "Emotional regulation",
      "Anxiety support",
      "Social skills groups",
      "Parent coaching",
    ],
  },
];

export function ServicesSection() {
  const ref = useRef<HTMLElement | null>(null);
  const isVisible = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #1e1b4b 0%, #312e81 40%, #4c1d95 70%, #1e1b4b 100%)",
      }}
    >
      {/* Atmospheric blobs */}
      <div
        className="absolute top-1/4 left-[-100px] w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "rgba(124,58,237,0.15)", filter: "blur(90px)" }}
      />
      <div
        className="absolute bottom-1/4 right-[-80px] w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "rgba(236,72,153,0.12)", filter: "blur(80px)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "rgba(13,148,136,0.06)", filter: "blur(100px)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-4"
            style={{
              background: "rgba(124,58,237,0.25)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(124,58,237,0.45)",
              color: "#c4b5fd",
              letterSpacing: "0.08em",
            }}
          >
            🌟 Specialist Support
          </span>
          <h2
            className="font-display text-5xl md:text-6xl font-bold mb-4"
            style={{
              background: "linear-gradient(135deg, #e0e7ff, #c4b5fd, #f9a8d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            data-ocid="services.section"
          >
            Specialized Support Services
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Every child deserves the right support to reach their full
            potential. Our dedicated specialists are here to help.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {THERAPY_SERVICES.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              data-ocid={`services.item.${index + 1}`}
              className="group relative rounded-3xl overflow-hidden cursor-default"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: `1.5px solid ${service.accent}44`,
                boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
              }}
            >
              {/* Gradient header band */}
              <div
                className="relative h-44 flex items-center justify-center overflow-hidden"
                style={{ background: service.gradient }}
              >
                <div
                  className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full"
                  style={{ background: "rgba(255,255,255,0.10)" }}
                />
                <div
                  className="absolute -top-6 -left-6 w-24 h-24 rounded-full"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                />
                <div className="relative z-10 text-6xl drop-shadow-xl group-hover:scale-110 transition-transform duration-300">
                  {service.emoji}
                </div>
              </div>

              {/* Card body */}
              <div className="p-7">
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                  style={{
                    background: `${service.accent}22`,
                    color: service.accent,
                    border: `1px solid ${service.accent}44`,
                    letterSpacing: "0.06em",
                  }}
                >
                  {service.tagline}
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed mb-5 font-body">
                  {service.description}
                </p>

                {/* Feature bullets */}
                <ul className="space-y-2 mb-7">
                  {service.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-2 text-white/75 text-sm font-body"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-none"
                        style={{ background: service.accent }}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  type="button"
                  data-ocid={`services.learn_more.${index + 1}`}
                  className="w-full py-3 rounded-xl font-semibold text-sm tracking-wide text-white transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
                  style={{
                    background: service.gradient,
                    boxShadow: `0 4px 20px ${service.glow}`,
                  }}
                  onClick={() => {
                    const el = document.getElementById("enroll");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-16 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-1">
              Ready to get started?
            </h3>
            <p className="text-white/60 text-sm font-body">
              Schedule a free consultation with our specialist team today.
            </p>
          </div>
          <button
            type="button"
            data-ocid="services.cta_button"
            className="flex-none px-8 py-3.5 rounded-xl font-bold text-white text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #EC4899)",
              boxShadow: "0 4px 24px rgba(124,58,237,0.45)",
            }}
            onClick={() => {
              const el = document.getElementById("enroll");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book a Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
