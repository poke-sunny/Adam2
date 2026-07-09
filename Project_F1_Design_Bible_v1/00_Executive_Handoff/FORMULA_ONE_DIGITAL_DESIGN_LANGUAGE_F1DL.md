# Formula One Digital Design Language

Version: 1.0  
Project: Adam Ellahi Digital Ecosystem  
Short name: F1DL

## Definition

The Formula One Digital Design Language is the living specification for every visual, interaction, content, motion, data, and implementation decision across Adam Ellahi's digital platform.

It exists so designers, developers, AI builders, sponsors, and content teams are not guessing. The system defines how the brand should look, feel, move, respond, explain, report, and scale.

## Core Standard

This is not a karting website design system. It is a premium motorsport operating language.

The platform should feel like:

- A Formula One team's internal performance system.
- A sponsor-grade commercial reporting platform.
- A cinematic media ecosystem.
- A mobile-first athlete story.
- A future-ready AI operating layer.

## Quality Principles

Every decision must improve at least one of these:

- Sponsor confidence.
- Sponsor acquisition.
- Sponsor retention.
- Media coverage.
- Fan engagement.
- Search visibility.
- AI discoverability.
- Brand authority.
- Commercial value.
- Long-term enterprise value.

If a design decision only makes the page look busier, remove it.

## Visual Equation

Project F1 equals:

`Carbon structure + titanium precision + green authority + cyan intelligence + human journey + measurable proof`

## Grid System

### Base Scale

Use a 4 px atomic unit and an 8 px product rhythm.

- 4 px: micro alignment.
- 8 px: default rhythm.
- 12 px: compact inner spacing.
- 16 px: default component padding.
- 24 px: grouped section padding.
- 32 px: major component separation.
- 48 px: section rhythm.
- 64 px: large editorial rhythm.
- 80 px: hero rhythm.
- 96 px: immersive section rhythm.

### Mobile Grid

Minimum design width:

- 390 px.

Rules:

- 20 px side gutters.
- One-column content by default.
- 44 px minimum touch targets.
- CTAs should be reachable with one thumb.
- Avoid horizontal scrolling.
- Tables become cards or controlled scroll containers.

### Tablet Grid

Rules:

- 8-column layout.
- 24 px gutters.
- Use side-by-side content only when it improves comprehension.
- Preserve mobile action priority.

### Desktop Grid

Rules:

- 12-column layout for public website.
- 12-16 columns for Mission Control and portals.
- Editorial content should not exceed comfortable reading width.
- Dashboards may expand wider when density is useful.

### Ultra-Wide Grid

Rules:

- Use 16-column Mission Control layouts.
- Keep public page body text constrained.
- Use extra width for maps, timelines, media, and dashboards, not stretched paragraphs.

## Radius System

Radii should feel machined, not soft.

- 0 px: data grid dividers, technical separators.
- 2 px: small badges, micro indicators.
- 4 px: compact tags, chart chips.
- 8 px: buttons, cards, inputs, panels, icon buttons.
- 12 px: modals and larger overlays.
- Platform radius: app icons only.

Rules:

- Cards should not exceed 8 px radius unless they are modal-scale surfaces.
- Do not create pill-shaped CTAs unless the component is a small status chip or filter.
- Use consistent radii across states.

## Shadow And Elevation

Dark UI depth should be subtle.

### Elevation Levels

Level 0:

- Page background.
- `#090909`.
- No shadow.

Level 1:

- Standard surface.
- `#111111`.
- Border: graphite.

Level 2:

- Elevated panels and cards.
- `#1C1C1C`.
- Shadow: soft black at low opacity.

Level 3:

- Modals, drawers, important overlays.
- Stronger shadow plus border.

Level 4:

- Critical command overlays.
- Use sparingly.

Rules:

- Use borders more than shadows on dark surfaces.
- Never use heavy floating card shadows for decorative drama.
- Glow is reserved for live telemetry, AI, and focus states.

## Glassmorphism Rules

Glass is a technical overlay, not a theme.

Use glass for:

- Mission Control overlays.
- AI assistant panels.
- Live telemetry cards.
- Media controls over imagery.
- Sponsor report overlays.

Do not use glass for:

- Every card.
- Long body text.
- Forms where readability suffers.
- Decorative page sections.

Recommended values:

- Background: rgba black/graphite with 62-82 percent opacity.
- Blur: 12-24 px.
- Border: 1 px titanium at 12-24 percent opacity.
- Highlight: 1 px inner white at 4-8 percent opacity.

Accessibility rule:

- Text contrast must pass even when blur fails or transparency is removed.

## Lighting Rules

Lighting should suggest premium engineering.

Use:

- Top-left or top-right technical highlights.
- Fine cyan glows for live telemetry.
- Deep green glows for sponsor/commercial momentum.
- Titanium edge reflections.
- Controlled image overlays.

Avoid:

- Random orbs.
- Large decorative glow blobs.
- Unmotivated gradients.
- Neon overload.

## Colour Behaviour

Carbon Black:

- Foundation and page background.

Surface Black:

- App surfaces and panels.

Titanium:

- Secondary text, metadata, borders, neutral emphasis.

British Racing Green:

- Authority, partnership, positive progress, heritage.

Electric Cyan:

- AI, telemetry, live data, focus, active command states.

White:

- Primary text and high-value contrast.

Warning and danger:

- Operational states only.

## Typography Rules

Display:

- Space Grotesk.
- Use for brand-level headings and major labels.

Body:

- Inter.
- Use for readable copy, forms, navigation, dashboard content.

Numbers:

- IBM Plex Mono.
- Use for timing, race results, telemetry, statistics, sponsor values, and analytics.

Rules:

- Letter spacing should be 0 unless a micro-label genuinely needs spacing.
- Do not scale font size by viewport width.
- Avoid huge type inside compact dashboard panels.
- Use precise hierarchy over loud size.

## Component Behaviour

Every component must define:

- Purpose.
- Anatomy.
- Variants.
- Desktop behaviour.
- Mobile behaviour.
- Hover state.
- Pressed state.
- Focus state.
- Disabled state.
- Loading state.
- Empty state where relevant.
- Error state where relevant.
- Accessibility notes.
- Token references.

Component acceptance rule:

- If a component cannot be reused in at least three places, reconsider whether it should be a component.

## Card Rules

Use cards for:

- Repeated items.
- Dashboards.
- Modals.
- Framed tools.
- Media items.
- Sponsor reports.

Do not:

- Put cards inside cards.
- Turn every page section into a floating card.
- Use card decoration to solve weak content.

Every metric card must include:

- Value.
- Date range.
- Trend.
- Context.
- Source or source category.

## Button Rules

Primary buttons:

- Use for the main action only.

Sponsor CTA:

- Reserved for commercial actions.

Download CTA:

- Used for press kits, reports, decks, and assets.

Icon buttons:

- Use icons for familiar tool actions.
- Add accessible labels and tooltips.

State rules:

- Focus visible must be obvious.
- Loading state must preserve button size.
- Disabled state must explain recovery when needed.

## Animation Physics

Motion should feel controlled and engineered.

Durations:

- Press: 90 ms.
- Micro: 120 ms.
- Hover: 180 ms.
- Drawer: 240 ms.
- Modal: 260 ms.
- Page: 320 ms.
- Chart reveal: 500-900 ms.
- Counter: 700-1200 ms.

Easing:

- Standard: `cubic-bezier(0.2, 0, 0, 1)`.
- Fast out: `cubic-bezier(0.16, 1, 0.3, 1)`.
- Mechanical: `cubic-bezier(0.65, 0, 0.35, 1)`.

Rules:

- Motion should clarify change.
- Motion should never block reading.
- Reduced motion must be supported.
- Avoid bounce and cartoon physics.

## Photography Art Direction

Photography should document the journey, not just racing.

Required categories:

- Hero.
- Portrait.
- Garage.
- Pitlane.
- Helmet.
- Emotion.
- Rain.
- Victory.
- Failure.
- Training.
- Simulator.
- Travel.
- Sponsors.
- Fans.
- Family.
- Engineering.
- Mechanics.
- Night.
- Drone.
- Macro.
- Cockpit.
- Hands.
- Eyes.
- Tyres.
- Brakes.
- Carbon details.

Rules:

- Use genuine human emotion.
- Show preparation and learning.
- Avoid generic stock motorsport.
- Leave negative space for UI when needed.
- Do not include unlicensed logos or protected marks.

## Iconography Rules

Icons must be:

- Motorsport-specific where possible.
- 24 x 24 viewBox.
- `currentColor`.
- 1.8 px stroke.
- Legible at 16 px.
- Useful, not decorative.

Avoid:

- Generic clip art.
- Flames.
- Fake speed marks.
- Over-detailed mini illustrations.

## Data Visualisation Rules

Charts must explain decisions.

Every chart needs:

- Title.
- Time period.
- Source.
- Units.
- Tooltip.
- Empty state.
- Plain-language insight.

Avoid:

- Vanity metrics without context.
- 3D charts.
- Decorative gauges.
- Unlabeled axes.
- Colour-only meaning.

## Sponsor Experience Rules

The platform should not ask for sponsorship as charity.

It should show:

- Proof.
- Momentum.
- Audience.
- Professionalism.
- Reporting capability.
- Activation opportunities.

Sponsor-facing content must answer:

- What is the value?
- Why Adam?
- Why now?
- What proof exists?
- What happens next?

## AI Experience Rules

AI must create leverage.

AI features should:

- Summarize.
- Recommend.
- Draft.
- Compare.
- Explain.
- Generate structured outputs.
- Cite source data where possible.

AI must not:

- Invent results.
- Publish sponsor communications without review.
- Use vague "AI magic" language.
- Replace critical human judgement.

## Accessibility Rules

Minimum standard:

- WCAG AA.
- Visible focus states.
- Keyboard navigation.
- Reduced motion.
- 44 px touch targets.
- Screen-reader labels.
- Colour-independent status indicators.

Dark UI rule:

- Check contrast manually. Dark premium UI fails quickly when grey text is too low contrast.

## SEO And AI Discoverability Rules

Every public page should include:

- Semantic HTML.
- Clear headings.
- Internal links.
- Metadata.
- Structured data where relevant.
- Entity-consistent Adam Ellahi references.
- FAQ where useful.
- Press-ready facts.
- Citation-ready page sections.

## Responsive Behaviour

Mobile first:

- Define content priority.
- Define action priority.
- Define layout collapse.
- Define media crop.
- Define dashboard summary.

Desktop second:

- Expand context.
- Increase comparison.
- Add density where useful.

Do not:

- Simply shrink desktop to mobile.
- Hide essential sponsor actions.
- Allow text overlap.
- Use horizontal scrolling except controlled data surfaces.

## Sound Rules

Sound is optional and must be premium.

Allowed:

- Click.
- Success.
- Notification.
- Countdown.
- Race alert.

Rules:

- Off by default unless explicitly enabled.
- Never annoying.
- Short, restrained, and functional.

## Governance

Every new component, page, asset, or token must be reviewed against:

- Brand purpose.
- Sponsor value.
- Mobile usability.
- Accessibility.
- Performance.
- SEO and AI discoverability.
- Token consistency.
- Reuse potential.

If it weakens the system, it does not ship.

## Living System Loop

Analyse.

Identify weaknesses.

Improve UX.

Improve UI.

Improve performance.

Improve conversion.

Improve storytelling.

Improve accessibility.

Improve SEO.

Improve AI discoverability.

Improve sponsor experience.

Repeat.

