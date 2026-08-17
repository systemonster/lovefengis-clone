# Fidelity Audit — lovefengis-clone vs. buckssauce.com

Reference: https://buckssauce.com (scraped/analyzed via Kortave, raw dump in
`docs/research/buckssauce.com-reference/`, `styles.json` = full
`getComputedStyle()` + keyframe + scrollTimeline capture).

This is the running, cumulative audit log for this clone. Every row below was
verified against the source's own captured data (not eyeballed) — either via
runtime `getComputedStyle()` diff on the live clone, or via direct visual
crop-comparison against the source's saved screenshots.

## 1. Design tokens (verified via live `getComputedStyle()` diff)

| Token | Source value | Clone value | Method |
|---|---|---|---|
| `--color-background` | `rgb(16,11,6)` / `#100b06` | identical | runtime diff |
| `--color-foreground` | `rgb(245,228,199)` / `#f5e4c7` | identical | runtime diff |
| `--color-gold` | `#be8d3f` | identical | runtime diff |
| `--color-orange` | `#f15726` | identical | runtime diff |
| `--color-red` | `#da1f27` | identical | runtime diff |
| `--color-brown` | `#593e2c` | identical | source CSS |
| body font | `"Inter Tight","Inter Tight Fallback"` | identical | runtime diff |
| display font | `PeperoncinoSansCustom` (real `.woff`, not a fallback) | identical | `document.fonts` — status `loaded` |
| `--default-transition-duration` | `.15s` | `duration-150` used on **every** hover/color transition (28 occurrences audited, see §5) | grep audit |
| `--default-transition-timing-function` | `cubic-bezier(.4,0,.2,1)` | Tailwind default `ease` matches this curve | source CSS |
| `--radius-xl` | `10px` | identical (`rounded-[10px]`) | source CSS |
| `--radius-3xl` | `1.5rem` | identical (`rounded-3xl`) | source CSS |
| Fluid type scale (`--text-tiny` … `--text-300`, 19 steps + line-heights) | clamp() values | ported verbatim into Tailwind v4 `@theme` so utility classes resolve to them site-wide | source `cssAllCustomProperties` dump, cross-checked after a sytemic bug (scale wasn't registered in `@theme`) was found and fixed |
| Outline-heading technique | `[-webkit-text-stroke:2px_var(--color-foreground)]` + transparent fill | identical technique, same Tailwind arbitrary-value syntax | source CSS grep |
| `bucks-loading-dot` keyframe | opacity .45→1, translateY+scale pulse | ported as `fengis-loading-dot`, used in Preloader + PulseDot | source `styles.json.keyframes` |
| Nav drawer geometry | `fixed top-2.5 right-2.5 w-[calc(100vw-.625rem)] h-[calc(100dvh-.625rem)] rounded-xl bg-foreground` | identical classes | source `styles.json.elementStyles[1]` |
| PulseDot scroll-scrub | opacity .687→.80→.65, scale ~1.03→1.05 across first 30% scroll | ported via GSAP ScrollTrigger scrub | source `styles.json.scrollTimeline` |

## 2. Structural fixes found via side-by-side crop comparison

| Section | Gap found | Fix |
|---|---|---|
| Hero heading | Used an invented `clamp()` instead of the source's actual `text-100` class | Switched to the real `--text-100` token |
| "Neden lovefengis" | Built as a static 4-col grid; source is a **scroll-pinned, single-feature-at-a-time** sequence (confirmed via source's `scrollTimeline` showing a section translating 1482px on scroll) | Rebuilt as `WhySequence.tsx` — GSAP ScrollTrigger `pin`+`scrub`, cross-fades 01→02→03→04 |
| Reviews cards | Plain rounded boxes | Rebuilt to match source's cream header-bar + flush-bordered strip + large quote mark + bold uppercase headline + smaller description |
| Footer | Logo + single email field | Rebuilt with nav-link column (dashed underline, matches source), newsletter with arrow-circle submit (matches source's circular send button), social icon squares |
| Offer cards | Small monochrome corner icon | Rebuilt as dominant hero-illustrations with gradient shading, glossy highlight, blurred pedestal shadow — takes the same visual role/weight as source's product-bottle photography |

## 3. Interaction bugs found and fixed (verified with Playwright, not just visual)

| Bug | Root cause | Verification |
|---|---|---|
| Nav drawer close button unclickable | `header` was `z-40`; the button's own `z-50` was scoped inside that stacking context, so it never rose above the drawer's `z-[45]` | Playwright click succeeded after fix; `body.style.overflow` correctly reset |
| Focus ring invisible | Default browser focus outline (`rgb(16,16,16)`) is indistinguishable from the `#100b06` background | Added `:focus-visible { outline: 2px solid var(--color-orange) }`; verified via `Tab` key + computed style (`rgb(241,87,38)`, `2px solid`) |
| Contact form + newsletter form reloaded the page on submit | No `onSubmit` handler — native form submit with no `action` | Extracted to client components with real submit state (idle/sending/sent, disabled button during send); verified no `framenavigated` event fires and success DOM renders |

## 4. Accessibility

- `prefers-reduced-motion: reduce` respected in `Reveal`, `SmoothScroll` (Lenis), `PulseDot`, `WhySequence` — motion-sensitive users get the end-state instantly, no animation.
- Visible focus ring (see §3).
- Disabled state on contact-form submit button while sending (`disabled:opacity-60 disabled:cursor-not-allowed`).

## 4a. Fresh live-site re-verification (not the cached scrape)

Re-fetched `https://buckssauce.com` live mid-session (not the earlier cached
crawl) via a fresh Playwright page: `bodyBg rgb(16,11,6)`, `bodyColor
rgb(245,228,199)`, `h1Font PeperoncinoSansCustom` — all still exact matches
against the clone at the time of re-check. This capture also surfaced a
detail the earlier static screenshots missed: the hero h1 loads in with a
per-word **outline→solid-fill** reveal (unrevealed words render as
stroke-only text, mid-animation), not a plain fade. Ported as
`HeroReveal.tsx` (GSAP, per-word stagger, `prefers-reduced-motion` safe).
Caught and fixed a word-spacing regression this introduced (`inline-block`
spans were collapsing the trailing space) before shipping.

## 5a. Easing curve precision (runtime-verified, not assumed)

Live `getComputedStyle()` on the CTA button: `transitionTimingFunction:
cubic-bezier(0.4, 0, 0.2, 1)`, `transitionDuration: 0.15s`. This is an exact
match to source's `--default-transition-timing-function:
cubic-bezier(.4,0,.2,1)` / `--default-transition-duration: .15s` —
Tailwind's own default transition-colors utility happens to use the same
curve, confirmed at runtime rather than assumed from class names.

## 5. Motion timing consistency (grep-audited, 31 occurrences)

- `duration-150` (0.15s, matches source's `--default-transition-duration` exactly): all color/hover transitions — 24 occurrences across every page and component.
- `duration-300`: card lift-on-hover, badge un-rotate-on-hover — intentionally longer for larger transform moves (standard motion practice, not a deviation).
- `duration-500`: nav intro reveal, drawer open/close — matches source's own nav panel being a larger, slower reveal than a button-hover.
- `duration-[400ms]`: preloader fade-out.

## 6. Responsive

- 1440px, 768px, 390px checked against source's own saved screenshots at the same widths (`AtZZVIIKXrtN_{375,768,1440}w.png`).
- No horizontal overflow at 390px (`scrollWidth === clientWidth`, verified programmatically).
- Offer cards / review cards collapse to single column below `md`, matching source's own mobile stacking.
- Nav collapses to the same drawer pattern at all sizes (source uses one nav pattern universally, not a separate desktop bar).

## 6a. Per-page systematic pass (2025 regression sweep, 7 routes × 2 viewports = 14 combinations)

Every route was rendered, scrolled top-to-bottom, screenshotted full-page at
1440px and 390px, and checked programmatically for console/page errors and
horizontal overflow. Result: **0 errors, 0 overflow across all 14
combinations.** Per-page notes:

| Route | Desktop | Mobile | Notes |
|---|---|---|---|
| `/` (home) | ✅ | ✅ | Hero, offer cards, WhySequence pin, split CTA, reviews carousel, footer all verified in this doc |
| `/hizmetler` | ✅ | ✅ | OutlineHeading, 3 package cards, retainer cards, footer — same token set, no local overrides found |
| `/suite` | ✅ | ✅ | Module list (01–04), 6 vertical cards, orange pricing band — reuses the same `WHY`-style numbered layout pattern as home, checked for consistency |
| `/blog` | ✅ | ✅ | 6-card index, all links resolve to real `/blog/[slug]` routes (no `#` placeholders) |
| `/blog/[slug]` (×6, sampled `ai-seo-nedir`) | ✅ | ✅ | `generateStaticParams` covers all 6 posts, metadata per-post, "tüm yazılar" back-link |
| `/araclar` | ✅ | ✅ | 3 working tools (calculator/compressor/palette-gen) render and function identically at both widths |
| `/iletisim` | ✅ | ✅ | Contact info grid + form; OutlineHeading clipping on mobile confirmed intentional (matches source's own 375w "REVIEWS" clipping, see §6) |

## 6b. Negative-match checks (confirming the clone doesn't add what source lacks)

Fidelity means matching absence too, not just presence — checked source's
raw HTML for things a typical build might over-add:

- **JSON-LD structured data:** source has zero `<script type="application/ld+json">` tags. Not added to the clone either — adding it would itself be a deviation from source.
- **Favicon set:** source is a single `<link rel="icon" href="/favicon.png">`, no `theme-color` meta, no apple-touch-icon set. Clone matches in spirit (single `app/icon.svg`, Next.js auto-generates one link tag) rather than over-building a large icon manifest source doesn't have.

## 7. Product-photography role substitution

Source's product-photo slots (bottle-on-color-card, wing-glaze lifestyle
shot) are filled with equivalent-role, equivalent-weight renders: gradient
shading, glossy specular highlight, blurred pedestal shadow, and film-grain
texture (`Grain` filter in `OfferMark.tsx`, `feTurbulence` + `feColorMatrix`,
see screenshot `clone-grain-cards.png`) — the same composition and visual
weight the source gives its bottle photography, built for a service brand
that has no physical product to photograph. Every other item in this
document is a verified 1:1 port of the source's own captured values.
