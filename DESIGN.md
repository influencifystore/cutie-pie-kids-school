# Design Brief

## Direction

Cutie Pie Kids Pre School — Premium, playful 3D animated showcase for modern early childhood education with vibrant visual identity and glassmorphism aesthetic.

## Tone

Playful maximalism with premium polish: vibrant and joyful without cartoonish kitsch; confidence through bold color and smooth animation.

## Differentiation

Floating 3D animated shapes (stars, books, pencils, ABC letters) throughout hero; flip-card program selection with 3D perspective; animated statistics revealing enrollment and achievements on scroll.

## Color Palette

| Token      | OKLCH         | Role                                        |
|------------|---------------|---------------------------------------------|
| primary    | 0.60 0.28 290 | Rich purple — CTAs, highlights, badges     |
| secondary  | 0.72 0.25 25  | Warm coral/orange — accents, program cards |
| accent     | 0.50 0.32 35  | Hot pink — hover states, borders            |
| background | 0.98 0.01 0   | Clean off-white — main surface              |
| card       | 0.995 0.01 0  | Pure white — cards, modals, elevated zones  |
| muted      | 0.92 0.02 0   | Soft grey — dividers, disabled states       |
| foreground | 0.25 0.05 280 | Dark blue-grey — body text                  |

## Typography

- Display: Fredoka One — bold headings (h1, h2, program titles); playful, premium, highly legible
- Body: Nunito — paragraph text, descriptions, labels; friendly, spacious, professional
- Scale: h1 `text-5xl md:text-7xl font-display font-bold`, h2 `text-3xl md:text-4xl font-display`, body `text-base md:text-lg font-body`

## Elevation & Depth

Three-layer surface hierarchy: background (base), card (elevated + glassmorphism), popover (highest). Glassmorphism with backdrop blur on all card surfaces; subtle drop shadows (glass, glass-hover) for depth. No hard shadows — all blur-based.

## Structural Zones

| Zone           | Background                           | Border                      | Notes                                                 |
|----------------|--------------------------------------|-----------------------------|-------------------------------------------------------|
| Header/Nav     | `glass-effect` with vibrant underline | Subtle white/10% border     | Sticky, gradient underline in primary color          |
| Hero           | Animated gradient (purple→coral→pink) | —                          | Full-width, 80vh height, floating 3D shapes overlay  |
| Program Cards  | `glass-card` with 3D flip on hover   | white/30% transparent      | 3x1 grid, alternating accent colors on hover        |
| Stats Section  | Alternating `bg-muted/30` & `card`   | —                          | Animated counters, scroll-triggered fade-in         |
| Content Cards  | `glass-card` with hover elevation    | white/20% transparent      | Grid layout, soft shadows, rounded-2xl               |
| Footer         | `bg-muted/50` with glassmorphism top | `border-t border-white/10`  | Three-column layout, gradient text for branding      |

## Spacing & Rhythm

Generous section gaps (6rem–8rem); grouped card clusters with 2rem gaps; micro-spacing (0.5rem–1rem) for internal padding. Vertical rhythm via consistent heading/paragraph spacing ratios (1:1.5:2.5). Mobile-first responsive: compress sections to 4rem on `sm:`, expand to 8rem on `lg:`.

## Component Patterns

- **Buttons**: Rounded-full, vibrant primary/accent bg, white text, shadow-glow on hover, smooth scale (0.95→1.0) + color transition
- **Cards**: Rounded-2xl, glassmorphism (white/70 + backdrop-blur), subtle border, drop-shadow-glass, hover→shadow-glass-hover + scale-102
- **Badges**: Inline pills, secondary color bg, primary text, small rounded-full with 0.5rem padding
- **Flip Cards**: 3D perspective on hover, transform rotateY(180deg), front=program title+icon, back=description+CTA

## Motion

- **Entrance**: Scroll-triggered fade-in + slide-up (0.6s ease-out) for cards and sections; intersection observer pattern
- **Hover**: All interactive elements respond to hover with scale (1.02–1.05), color shift to accent, and shadow elevation; 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- **Decorative**: Continuous float animation (3s ease-in-out) on floating shapes; pulse-glow (2s) on call-to-action elements; gradient text animation on hero

## Constraints

- No generic AI aesthetics: skip default shadcn blues, tailwind greys, rounded-md uniformity
- OKLCH-only colors: no hex, no rgb(), no raw color names; all CSS custom properties
- Glassmorphism on all interactive surfaces; no flat design except body backgrounds
- Animations must complete within 3 seconds; no janky timing functions
- Mobile-first responsive: test at 320px, 768px, 1024px minimums

## Signature Detail

Floating 3D animated shapes in hero section (stars, books, pencils, ABC letters with continuous bounce and rotation) — immediately communicates playful, modern, child-friendly aesthetic while differentiating from static competitors.
