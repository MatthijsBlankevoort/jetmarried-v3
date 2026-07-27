# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Couples on Texel (mostly local/regional, Dutch) planning their wedding ceremony, choosing an officiant (BABS) or ceremony speaker. German- and English-speaking couples are served (multilingual ceremonies, a €125 surcharge for German) but are not the primary target audience — the site is not built as a destination-wedding funnel. Secondary audience: older/reconnecting couples seeking a vow renewal ("Herbevestiging"), and unmarried partners/friends/chosen family wanting a non-legal commitment ceremony ("Verbintenis zonder papieren").

## Product Purpose

Jetmarried is Mariëtte Boot's wedding-officiant practice on Texel. The site introduces her and her approach, explains the four ceremony formats she offers, and converts interest into a first, no-obligation meeting via the contact form. Success is measured by contact-form submissions (couples leaving their date and a few words), not by phone/email contact volume.

## Positioning

Personal, story-driven ceremonies: Mariëtte writes every speech from real conversations with the couple rather than a template, and delivers it "as if she was there." Practical flexibility differentiates her from a standard registry-office ceremony: any location, any day, any time, with the "BABS voor één dag" arrangement letting couples use her as officiant even in a different municipality. She covers all four ceremony types (legal marriage, ceremony-only/no rules, vow renewal, non-legal commitment) in Dutch, German, or English.

## Operating Context

- Ceremonies happen anywhere the couple chooses (beach, dunes, lighthouse, forest, own garden, aboard a ship on the Wadden Sea, etc.) — not tied to a venue.
- Process: free introductory meeting (in person or video call) → two in-depth conversations to gather the couple's story → Mariëtte drafts the speech, couple reviews and gives feedback → ceremony day, coordinated with photographer/venue.
- Booking lead time is typically 6–12 months, though later availability sometimes exists.
- Weather contingency ("plan B") is planned in advance for outdoor ceremonies.
- Content is managed by Mariëtte (non-technical) via Tina CMS at `/admin`, editing JSON/MDX under `content/`.

## Capabilities and Constraints

- Solo practice — Mariëtte Boot is the entire business, now and for the foreseeable future. Voice stays first-person singular ("ik"); no design or content structure needs to anticipate multiple officiants, locations, or franchising.
- Sworn in ("beëdigd") as BABS (buitengewoon ambtenaar van de burgerlijke stand) at gemeente Den Helder; can be temporarily sworn in for almost any other Dutch municipality via "BABS voor één dag."
- Four ceremony products: wettelijk huwelijk (legal marriage), ceremoniespreker (ceremony speaker, no legal status), herbevestiging (vow renewal), verbintenis zonder papieren (non-legal commitment ceremony for partners, friends, or chosen family).
- Languages: Dutch, German, English; bilingual ceremonies possible.
- Base price €825 (all conversations + written speech included); +€125 for a German-language ceremony; travel and any municipal fees are billed separately.
- Blog (MDX posts) exists for supplementary content/SEO.

## Brand Commitments

- Name: Jetmarried. Contact: Mariëtte Boot, trouwen@jetmarried.nl, 06 43 23 35 05, KvK 70404488.
- Existing logo at the live domain (jetmarried.nl); referenced by URL in settings, not yet vendored as a local asset.
- Voice is warm, personal, and direct (informal "jullie"), reflected throughout existing copy — not to be flattened into generic corporate tone.
- Signature phrase / personal motto: "geniet vandaag" (enjoy today).

## Evidence on Hand

- Real testimonial quotes with attributions (Dutch, German, English) in `content/home/index.json`, including a note that 13 total reactions exist (only a subset shown on the home page).
- Real FAQ content (pricing, municipality transfer, languages, booking lead time, weather contingency) in `content/home/index.json`.
- Hero and about-section photography already populated (`/uploads/landing.webp`, `/uploads/profielfoto.webp` per recent commit history).
- Ceremony-type and location-showcase images are still placeholders (`imageLabel` text like "FOTO — tekenmoment, staand", empty `image` fields) — future work must not fabricate photography, only use what Mariëtte supplies via Tina CMS.
- No case studies, press logos, or benchmark claims exist beyond the testimonials above; do not invent any.

## Product Principles

1. Every ceremony is written from the couple's own story — never templated language; the site's own content should model this same specificity, not generic wedding-industry copy.
2. Flexibility is a selling point, not a limitation: no venue, no fixed format, and multiple legal/non-legal paths should read as freeing, not confusing.
3. Warmth and trust come before formality — Mariëtte is a known, named individual (not an agency), and the design should keep her presence personal throughout.
4. The contact form is the one conversion goal; every section should build enough trust and clarity to make leaving a date and a few words feel like an easy, low-commitment next step.
5. Content changes happen through Tina CMS by a non-technical owner — components must degrade gracefully with placeholder or missing images/text rather than breaking.

## Accessibility & Inclusion

No formally required standard has been specified. An accessibility pass on interactive elements has already been done (see commit history); keep interactive elements (nav, forms, cards) accessible going forward as a baseline expectation, without a stricter documented target.
