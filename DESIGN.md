---
name: Jetmarried
description: Warm, unhurried wedding-ceremony site for Mariëtte Boot, trouwambtenaar op Texel
colors:
  bg: "#faf8f4"
  text: "#2c2a26"
  text-muted: "#5a554d"
  text-mutedest: "#8a8378"
  bronze: "#9c7a55"
  bronze-light: "#c6b99f"
  bronze-pale: "#f0dcc2"
  panel: "#f7f2e7"
  panel-2: "#faf8f4"
  border: "#e2dacb"
  border-strong: "#ddd0b6"
  border-soft: "#ddd4c3"
  dark: "#2c2a26"
  dark-text: "#f4efe4"
  dark-accent: "#c0a077"
  placeholder-a: "#e9e2d5"
  placeholder-b: "#e0d8c8"
  placeholder-text: "#8a8378"
typography:
  display:
    fontFamily: "Cormorant Garamond, Jost, sans-serif"
    fontSize: "clamp(52px, 7.4vw, 104px)"
    fontWeight: 300
    lineHeight: 0.94
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Cormorant Garamond, Jost, sans-serif"
    fontSize: "clamp(36px, 4.2vw, 56px)"
    fontWeight: 300
    lineHeight: 1.05
  title:
    fontFamily: "Cormorant Garamond, Jost, sans-serif"
    fontSize: "clamp(30px, 3.2vw, 42px)"
    fontWeight: 400
    lineHeight: 1.04
  body:
    fontFamily: "Jost, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 300
    lineHeight: 1.8
  label:
    fontFamily: "Jost, system-ui, sans-serif"
    fontSize: "12.5px"
    fontWeight: 400
    letterSpacing: "0.16em"
rounded:
  sm: "14px"
  md: "26px"
  lg: "34px"
  xl: "44px"
  pill: "100px"
  circle: "50%"
spacing:
  xs: "10px"
  sm: "18px"
  md: "28px"
  lg: "48px"
  xl: "90px"
components:
  button-primary:
    backgroundColor: "{colors.text}"
    textColor: "{colors.bg}"
    rounded: "{rounded.pill}"
    padding: "17px 34px"
  button-primary-hover:
    backgroundColor: "{colors.bronze}"
    textColor: "#ffffff"
  button-bordered:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "15px 28px"
  button-bordered-hover:
    backgroundColor: "{colors.text}"
    textColor: "{colors.bg}"
  card-ceremony:
    backgroundColor: "{colors.panel-2}"
    rounded: "{rounded.lg}"
    padding: "30px"
  card-testimonial:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.lg}"
    padding: "38px 34px"
  input-field:
    backgroundColor: "{colors.dark}"
    textColor: "{colors.dark-text}"
    rounded: "{rounded.sm}"
    padding: "14px 16px"
---

# Design System: Jetmarried

## Overview

**Creative North Star: "The Golden Hour Vow"**

Jetmarried reads like a beach ceremony at sunset: warm sand and bronze tones, soft italic serif accents, and a glassy translucent header floating over a full-bleed hero photograph. It is the visual register of a solo, deeply personal officiant practice — not an agency, not a venue, not a wedding-industry marketplace — so nothing in the system performs scale or process. Every surface is unhurried: generous rounded corners, slow eases (0.3–0.45s), and roomy line-height that let long, warm sentences breathe.

The system explicitly rejects two directions: the cold precision of generic corporate/SaaS design (sharp corners, blue-and-white palettes, dense grids, stock-photo banners), and the loud kitsch of typical wedding-industry sites (script fonts, pastel pink, hearts, confetti). What replaces both is restraint — one accent color used sparingly, one display serif reserved for emphasis, and photography (once supplied) doing the emotional work that decoration would otherwise try to do.

**Key Characteristics:**
- Cream/sand base palette with a single warm bronze accent, never competing with more than one accent at a time
- Cormorant Garamond italic serif for emphasis words and mottos, set against a plain grotesque (Jost) for everything else
- Pill-shaped buttons, nav, and language switcher; large 26–44px radii on every panel and card — no sharp corners anywhere
- Flat by design: depth comes from tonal panel shifts and one glass-blur header, never from drop shadows
- A dark "velvet" panel (contact section) as the one deliberate tonal inversion, signaling the site's single conversion moment

## Colors

Warm, low-saturation, and almost entirely tonal — cream, sand, and bronze, with a single dark inversion for the contact section.

### Primary
- **Warm Bronze** (`#9c7a55`): the one accent color — eyebrows, mottos, CTA hover states, focus rings, dividers, active-state fills. Used sparingly, never as a base background.
- **Warm Bronze — Light** (`#c6b99f`): motto underline, quote marks, secondary bullet dots. A quieter step down from the primary accent.
- **Warm Bronze — Pale** (`#f0dcc2`): hero headline emphasis (italic word), text selection highlight, light hover fills on dark surfaces.

### Neutral
- **Warm Paper** (`#faf8f4`): page background and lightest panel (`--color-bg` / `--color-panel-2`).
- **Soft Linen** (`#f7f2e7`): secondary section panel background (FAQ, testimonials) — one shade warmer/darker than the page.
- **Ink** (`#2c2a26`): primary text color and the dark contact-panel background — doubles as both foreground and the one inverted surface.
- **Muted Ink** (`#5a554d`): body copy on light panels (descriptions, paragraphs).
- **Faint Ink** (`#8a8378`): tertiary text — testimonial attribution, placeholder labels, least emphasis.
- **Hairline Border** (`#e2dacb` / `#ddd4c3`) and **Border Strong** (`#ddd0b6`): card and divider borders; "strong" appears only on hover/active/open states.
- **Warm Cream (dark mode text)** (`#f4efe4`) and **Dark Accent** (`#c0a077`): text and accent colors used only inside the dark contact panel.

### Named Rules
**The One Accent Rule.** Warm Bronze is the only saturated color in the system. It never appears as a fill larger than a button or icon circle — always text, border, or small accent, never a background panel.

## Typography

**Display Font:** Cormorant Garamond (with Jost, sans-serif fallback)
**Body Font:** Jost (with system-ui fallback)

**Character:** A featherweight serif (Cormorant Garamond, weight 300, often italic) reserved for headlines and single emphasis words, paired with a plain, humanist grotesque (Jost) for everything functional — body copy, labels, navigation, buttons. The pairing reads as an intimate, handwritten letter set inside a calm, modern frame.

### Hierarchy
- **Display** (weight 300, `clamp(52px, 7.4vw, 104px)`, line-height 0.94, letter-spacing -0.015em): hero headline only. The emphasized second line uses italic Cormorant Garamond in Warm Bronze Pale.
- **Headline** (weight 300, `clamp(36px, 4.2vw, 56px)`, line-height ~1.05): section titles (About, Contact, FAQ).
- **Title** (weight 400, `clamp(30px, 3.2vw, 42px)`, line-height 1.04): card-level headings (ceremony card titles).
- **Body** (weight 300, 15.5–19px, line-height 1.65–1.85): paragraph copy; description text caps around 44–60ch measure.
- **Label** (weight 400–500, 11.5–13px, letter-spacing 0.1–0.22em, uppercase): eyebrows, form field labels, footer links, testimonial attribution.
- **Motto/Emphasis** (Cormorant Garamond italic, 22px, color Warm Bronze `#7d5f3e` deep variant): the single recurring device for one important phrase per section (e.g. "geniet vandaag"), always underlined with an animated bronze-light rule.

### Named Rules
**The Single Emphasis Rule.** Only one word or short phrase per section ever switches into italic serif; it is the section's emotional focal point, not a general styling option.

## Layout

Sections sit inside a consistent 14px outer gutter at the viewport edge (hero, FAQ, contact panels all read `padding: 0 14px`), with internal section padding scaling via `clamp()` between roughly 24px and 110px depending on viewport. Text-heavy sections use `text-wrap: pretty` or `balance` throughout and cap measure (44–75ch) so long, warm sentences stay readable at wide viewports.

Two-column layouts (About, Ceremonies cards, FAQ, Contact) alternate ratio (0.8/1.2, 0.9/1.1, 0.95/1.05) rather than a fixed 50/50 grid, and collapse to a single column under ~780px. The header is a fixed floating pill (`top: 18px`, `max-width: 1240px`) rather than a full-width bar, keeping the same "generous rounding, floating panel" language present everywhere else. Nav links hide below 860px in favor of the CTA remaining visible.

## Elevation & Depth

Flat by design: the system uses no drop shadows anywhere. Depth is conveyed entirely through tonal panel layering (paper → linen → ink) and borders that strengthen on hover/open state, plus exactly one glass-blur exception — the floating header — which uses `backdrop-filter: blur(22px) saturate(190%)` over a translucent paper background to read as "above" the page content it scrolls over.

### Named Rules
**The Flat-By-Default Rule.** No `box-shadow` on cards, buttons, or panels. Depth comes from background tone shifts (paper/linen/ink) and border-color transitions only. The header's glass blur is the single deliberate exception, reserved for the one element that must visually float above scrolling content.

## Shapes

Every corner is rounded — there is no sharp-cornered surface anywhere in the system. Radii scale with the size of the surface: 14px on form inputs, 26px on cards and FAQ items, 34–44px on full section panels (hero, About photo, contact panel, FAQ panel), and full pill (100px) on every button, the nav, the language switcher, and the header itself. Icon buttons (arrows, FAQ toggle) are perfect circles. This produces a soft, unhurried, hand-rounded feel with no exceptions to interrupt it.

## Components

Buttons, cards, and inputs are uniformly soft and unhurried: generous radii, slow (0.3–0.45s) eases, and hover states that shift tone rather than adding elevation or motion.

### Buttons
- **Shape:** full pill (`border-radius: 100px`) on every variant, no exceptions.
- **Primary (light-on-dark hero variant):** background `--color-bg`, text `--color-text`; hover shifts to Warm Bronze Pale background.
- **Solid (default, e.g. header CTA):** background `--color-text` (ink), text `--color-bg`; hover shifts to Warm Bronze background, white text.
- **Bordered/Ghost:** transparent background, 1px `--color-border-soft` border; hover inverts to ink background with paper text. Used for secondary actions (testimonials link, ceremony card CTA, "Lees mijn verhaal").
- **Outline (on photography):** transparent with a 45%-opacity white border, for buttons placed directly over the hero image.
- **Form submit:** rectangular padding but still no radius token deviation — background `--color-panel`, hover to `--color-dark-accent`.

### Cards / Containers
- **Corner Style:** 26–34px radius depending on card size (ceremony card 34px outer / 26px photo inset; testimonial and FAQ item 26–30px).
- **Background:** one step warmer than the section behind it (`--color-panel-2` on `--color-panel` sections, or vice versa) so cards read as a subtle layer, never a hard-edged box.
- **Border:** 1px transparent at rest, strengthening to `--color-border-strong` on hover/open — the system's primary interactive-state signal in the absence of shadows.
- **Internal Padding:** 22–38px depending on card size, always via `clamp()` for responsive scaling.

### Inputs / Fields
- **Style:** on the dark contact panel only — translucent ink background (`rgba(242,238,230,0.08)`), 1px translucent border, 14px radius, cream text.
- **Focus:** 2px solid outline in `--color-dark-accent` with 1px offset, plus border-color shift to the same accent — no glow or shadow.
- **Labels:** uppercase, 12.5px, 0.12em tracking, 60% opacity — sits above the field, never inline/floating.

### Navigation
- Floating glass pill header, fixed 18px from viewport top, max-width 1240px, centered. Nav links sit inline with 100px-radius hover backgrounds (`rgba(255,255,255,0.75)`). A three-way language switch (NL/DE/EN) uses the same pill-within-pill pattern, active state solid white. Collapses to logo + CTA only below 860px.

### Signature Component: Photo Placeholder
Every image slot (`Photo.astro`) renders a diagonal-striped placeholder with a small uppercase caption (e.g. "FOTO — tekenmoment, staand") until a real photo is supplied via Tina CMS, then swaps to a full-bleed `object-fit: cover` image with identical corner radius. This is the mechanism that lets the site ship coherently with partial photography — treat it as core system vocabulary, not a temporary dev artifact.

## Do's and Don'ts

### Do:
- **Do** keep every corner rounded — pill (100px) for anything button/nav-shaped, 14–44px scaled by surface size for panels and cards.
- **Do** reserve Warm Bronze for accents, borders, and hover states only; never as a large background fill.
- **Do** use border-color strengthening (to `--color-border-strong`) as the primary hover/active signal on cards, not shadow or scale.
- **Do** cap body-copy measure (44–75ch) and use `text-wrap: pretty`/`balance` on headlines and paragraphs.
- **Do** use the italic Cormorant Garamond emphasis device sparingly — one motto or phrase per section, not general italic styling.

### Don't:
- **Don't** add `box-shadow` to any card, button, or panel — depth comes from tone and border only, with the header's glass-blur as the sole exception.
- **Don't** introduce sharp (0px or small <8px) corners anywhere; it breaks the system's one hard invariant.
- **Don't** add a second saturated accent color alongside Warm Bronze — the One Accent Rule holds even for new sections.
- **Don't** reach for wedding-industry clichés (script fonts, pastel pink, hearts, confetti) or generic SaaS patterns (sharp corners, blue/white palettes, dense card grids) — both are explicit anti-references.
- **Don't** fabricate photography for placeholder slots; leave `Photo.astro`'s striped placeholder in place until real images are supplied via Tina CMS.
