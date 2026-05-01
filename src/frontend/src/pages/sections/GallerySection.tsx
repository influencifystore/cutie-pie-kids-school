import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

interface GalleryItem {
  id: string;
  emoji: string;
  caption: string;
  gradient: string;
  accentColor: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    emoji: "📖",
    caption: "Storytime Adventures",
    gradient: "linear-gradient(135deg, #7C3AED 0%, #9B59B6 50%, #6A0DAD 100%)",
    accentColor: "#7C3AED",
  },
  {
    id: "g2",
    emoji: "☀️",
    caption: "Outdoor Play Time",
    gradient: "linear-gradient(135deg, #0D9488 0%, #10B981 50%, #14B8A6 100%)",
    accentColor: "#0D9488",
  },
  {
    id: "g3",
    emoji: "🎨",
    caption: "Arts & Crafts Fun",
    gradient: "linear-gradient(135deg, #EC4899 0%, #F97316 50%, #FF6B9D 100%)",
    accentColor: "#EC4899",
  },
  {
    id: "g4",
    emoji: "⭐",
    caption: "Circle Time Learning",
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #A855F7 100%)",
    accentColor: "#8B5CF6",
  },
  {
    id: "g5",
    emoji: "🌳",
    caption: "Nature Exploration",
    gradient: "linear-gradient(135deg, #16A34A 0%, #0D9488 50%, #22C55E 100%)",
    accentColor: "#16A34A",
  },
  {
    id: "g6",
    emoji: "🎵",
    caption: "Music & Movement",
    gradient: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #6366F1 100%)",
    accentColor: "#3B82F6",
  },
  {
    id: "g7",
    emoji: "🔬",
    caption: "Science Discovery",
    gradient: "linear-gradient(135deg, #0D9488 0%, #0EA5E9 50%, #06B6D4 100%)",
    accentColor: "#0D9488",
  },
  {
    id: "g8",
    emoji: "🧱",
    caption: "Building & Creating",
    gradient: "linear-gradient(135deg, #F97316 0%, #EAB308 50%, #FB923C 100%)",
    accentColor: "#F97316",
  },
  {
    id: "g9",
    emoji: "⚽",
    caption: "Sports & Physical Play",
    gradient: "linear-gradient(135deg, #EF4444 0%, #F97316 50%, #EC4899 100%)",
    accentColor: "#EF4444",
  },
];

function GalleryCardSkeleton({ featured }: { featured?: boolean }) {
  return (
    <div
      className={`rounded-3xl overflow-hidden ${featured ? "md:col-span-2 md:row-span-2" : ""}`}
      style={{
        aspectRatio: featured ? "auto" : "4/3",
        minHeight: featured ? "360px" : undefined,
      }}
    >
      <Skeleton className="w-full h-full min-h-[200px]" />
    </div>
  );
}

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const item = items[currentIndex];

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      data-ocid="gallery.dialog"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      style={{ background: "rgba(0,0,0,0.88)" }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        type="button"
        data-ocid="gallery.close_button"
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white transition-smooth hover:scale-110"
        style={{
          background: "rgba(255,255,255,0.15)",
          border: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        <X size={20} />
      </button>

      {/* Prev */}
      <button
        type="button"
        data-ocid="gallery.pagination_prev"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
        className="absolute left-4 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white transition-smooth hover:scale-110"
        style={{
          background: "rgba(255,255,255,0.15)",
          border: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next */}
      <button
        type="button"
        data-ocid="gallery.pagination_next"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        className="absolute right-4 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white transition-smooth hover:scale-110"
        style={{
          background: "rgba(255,255,255,0.15)",
          border: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        <ChevronRight size={24} />
      </button>

      {/* Image container */}
      <motion.div
        key={item.id}
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.88 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl"
        style={{ aspectRatio: "4/3" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="absolute inset-0"
          style={{ background: item.gradient }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-9xl mb-4 select-none">{item.emoji}</span>
        </div>
        {/* Caption bar */}
        <div
          className="absolute bottom-0 left-0 right-0 px-6 py-4"
          style={{
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(8px)",
          }}
        >
          <p className="font-display text-white text-xl text-center">
            {item.caption}
          </p>
          <p className="font-body text-white/70 text-sm text-center mt-0.5">
            {currentIndex + 1} / {items.length}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface GalleryCardProps {
  item: GalleryItem;
  index: number;
  isVisible: boolean;
  onOpen: (index: number) => void;
}

function GalleryCard({ item, index, isVisible, onOpen }: GalleryCardProps) {
  const isFeatured = index === 0;

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.08 * index }}
      data-ocid={`gallery.item.${index + 1}`}
      className={`group relative rounded-3xl overflow-hidden cursor-pointer text-left ${
        isFeatured ? "md:col-span-2 md:row-span-2" : ""
      }`}
      style={{
        aspectRatio: isFeatured ? "auto" : "4/3",
        minHeight: isFeatured ? "360px" : undefined,
      }}
      onClick={() => onOpen(index)}
      aria-label={`Open ${item.caption}`}
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
        style={{ background: item.gradient }}
      />

      {/* Shimmer overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "rgba(255,255,255,0.08)" }}
      />

      {/* Emoji */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`select-none transition-transform duration-300 group-hover:scale-110 ${
            isFeatured ? "text-8xl" : "text-5xl"
          }`}
        >
          {item.emoji}
        </span>
      </div>

      {/* Caption overlay — slides up on hover */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
        }}
      >
        <p
          className={`font-display text-white leading-tight ${isFeatured ? "text-2xl" : "text-base sm:text-lg"}`}
        >
          {item.caption}
        </p>
        <p className="font-body text-white/75 text-xs sm:text-sm mt-0.5">
          Click to view full size
        </p>
      </div>

      {/* Always-visible small label at bottom */}
      <div className="absolute bottom-3 left-4 right-4 group-hover:opacity-0 transition-opacity duration-300">
        <p
          className={`font-display text-white drop-shadow-md ${isFeatured ? "text-xl" : "text-sm sm:text-base"}`}
        >
          {item.caption}
        </p>
      </div>

      {/* Corner accent dot */}
      <div
        className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full ring-2 ring-white/40"
        style={{ background: item.accentColor }}
      />
    </motion.button>
  );
}

export function GallerySection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref as React.RefObject<Element>, {
    once: true,
    margin: "-50px",
  });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate brief loading state (backend/object-storage may not have images yet)
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  const openLightbox = useCallback(
    (index: number) => setLightboxIndex(index),
    [],
  );
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length,
    );
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % GALLERY_ITEMS.length,
    );
  }, []);

  return (
    <section
      id="gallery"
      data-ocid="gallery.section"
      ref={ref}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #F8F7FF 0%, #FFF5FB 50%, #F0FFFE 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-10 left-10 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }}
      />
      <div
        className="absolute bottom-16 right-8 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #EC4899, transparent)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #0D9488, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-body font-bold mb-5 text-white shadow-md"
            style={{ background: "linear-gradient(135deg, #EC4899, #7C3AED)" }}
          >
            📸 School Life
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            <span style={{ color: "#7C3AED" }}>Our </span>
            <span
              style={{
                background: "linear-gradient(135deg, #EC4899, #F97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              School Life
            </span>
          </h2>
          <p className="font-body text-foreground/60 text-lg max-w-xl mx-auto">
            Moments of joy, growth, and discovery — captured every day at Cutie
            Pie Kids.
          </p>
        </motion.div>

        {/* Decorative wave */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div
            className="h-1 w-24 rounded-full"
            style={{
              background: "linear-gradient(90deg, #7C3AED, #EC4899, #F97316)",
            }}
          />
        </motion.div>

        {/* Gallery grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {[
              { key: "sk-0", featured: true },
              { key: "sk-1", featured: false },
              { key: "sk-2", featured: false },
              { key: "sk-3", featured: false },
              { key: "sk-4", featured: false },
              { key: "sk-5", featured: false },
              { key: "sk-6", featured: false },
              { key: "sk-7", featured: false },
            ].map((s) => (
              <GalleryCardSkeleton key={s.key} featured={s.featured} />
            ))}
          </div>
        ) : (
          <div
            data-ocid="gallery.list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
            style={{ gridAutoRows: "220px" }}
          >
            {GALLERY_ITEMS.map((item, i) => (
              <GalleryCard
                key={item.id}
                item={item}
                index={i}
                isVisible={isVisible}
                onOpen={openLightbox}
              />
            ))}
          </div>
        )}

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center mt-10"
        >
          <p className="font-body text-foreground/55 text-sm">
            📸 Follow us on Instagram{" "}
            <a
              href="https://instagram.com/cutiepiekidspreschool"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold transition-colors duration-200 hover:opacity-80"
              style={{ color: "#EC4899" }}
            >
              @cutiepiekidspreschool
            </a>{" "}
            for daily updates!
          </p>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={GALLERY_ITEMS}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
