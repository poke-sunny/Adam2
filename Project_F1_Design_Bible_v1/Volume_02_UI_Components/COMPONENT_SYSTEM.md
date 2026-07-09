# Volume 2 - UI Components

## Component Principles

The component system must feel enterprise-grade and motorsport-specific.

Priorities:

- Fast scanning.
- Dense information without clutter.
- Clear hierarchy.
- High contrast.
- Mobile ergonomics.
- Accessible keyboard states.
- Reusable design tokens.

## Radius System

- Icon buttons: 8 px.
- Buttons: 8 px.
- Inputs: 8 px.
- Cards: 8 px maximum.
- Modals: 12 px.
- App icon: platform-specific rounding.

Avoid large soft rounded cards. The system should feel precision machined.

## Spacing System

Use a 4 px base with an 8 px product rhythm.

- `space-1`: 4 px.
- `space-2`: 8 px.
- `space-3`: 12 px.
- `space-4`: 16 px.
- `space-5`: 20 px.
- `space-6`: 24 px.
- `space-8`: 32 px.
- `space-10`: 40 px.
- `space-12`: 48 px.
- `space-16`: 64 px.
- `space-20`: 80 px.
- `space-24`: 96 px.

## Layout Grid

Mobile:

- Minimum target width: 390 px.
- Gutter: 20 px.
- Touch targets: 44 px minimum.
- Primary CTA must be thumb reachable.

Tablet:

- Content columns: 8.
- Gutter: 24 px.
- Use side navigation only when it improves scanning.

Desktop:

- Content columns: 12.
- Max editorial content width: 1180 px.
- Max dashboard width: fluid up to 1920 px.
- Ultra-wide dashboards may use 16 columns.

## Core Components

### Buttons

Required variants:

- Primary.
- Secondary.
- Ghost.
- Outline.
- Sponsor CTA.
- Race CTA.
- Download CTA.
- Success.
- Danger.
- Disabled.
- Loading.
- Icon button.
- Floating action button.

Required states:

- Default.
- Hover.
- Pressed.
- Focus visible.
- Disabled.
- Loading.
- With icon.
- Mobile full width.
- Desktop inline.

### Cards

Required variants:

- Glass dashboard card.
- Dark elevated card.
- Metric card.
- News card.
- Video card.
- Sponsor card.
- Race card.
- Timeline card.
- Event card.
- Analytics card.
- Media download card.

Rules:

- Cards are for repeated items, modals, dashboards, and framed tools.
- Do not nest cards inside cards.
- Every metric card must include trend, context, and time period.

### Navigation

Required:

- Mobile bottom priority nav.
- Mobile menu drawer.
- Desktop top navigation.
- Dashboard side navigation.
- Breadcrumbs for deep pages.
- Sponsor portal account switcher.

Rules:

- Mobile sponsor CTA must remain accessible.
- Dashboard navigation must support repeated professional use.
- Do not hide core sponsor or media actions behind decorative menus.

### Forms

Required:

- Text input.
- Textarea.
- Select.
- Combobox.
- Date picker.
- Checkbox.
- Radio.
- Toggle.
- File upload.
- Multi-step sponsor inquiry.
- Press download gate.
- Newsletter signup.

Rules:

- Labels always visible.
- Error copy must explain how to recover.
- Use inline validation only when it helps completion.

### Data Components

Required:

- KPI tile.
- Trend card.
- Comparison table.
- Exposure chart.
- Sponsor ROI report.
- Race result table.
- Lap timing table.
- Audience map.
- Sentiment meter.
- Search visibility card.
- AI citation card.
- Conversion funnel.

Rules:

- Never show vanity numbers without context.
- Always show date ranges.
- Use mono typography for numbers.

### AI Components

Required:

- AI chat panel.
- AI insight card.
- AI action recommendation.
- AI generated draft.
- Confidence indicator.
- Citation list.
- Prompt preset menu.
- Human approval state.

Rules:

- AI must suggest actions, not just summarize.
- Sponsor-facing AI output must be reviewed before publishing.

## Accessibility Requirements

- WCAG AA minimum.
- Visible focus state on every interactive element.
- Reduced motion support.
- Keyboard navigable dashboards.
- Touch target minimum 44 px.
- Colour must not be the only state indicator.

