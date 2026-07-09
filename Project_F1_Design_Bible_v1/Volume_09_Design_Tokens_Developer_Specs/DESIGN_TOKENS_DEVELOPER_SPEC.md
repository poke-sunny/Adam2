# Volume 9 - Design Tokens And Developer Specs

## Token Source

The canonical implementation files are:

- `design-system/22 Design Tokens/json/tokens.json`
- `design-system/22 Design Tokens/css/tokens.css`

Design and code must reference those values instead of hardcoding colours, spacing, fonts, shadows, and motion timings.

## Token Categories

- Colour.
- Typography.
- Spacing.
- Radius.
- Shadow.
- Border.
- Z-index.
- Motion.
- Breakpoints.
- Layout.

## Implementation Rules

- Components should consume tokens by name.
- Use semantic tokens where possible, such as `surface-base`, `text-primary`, and `accent-ai`.
- Do not create one-off colours for individual screens.
- If a new token is needed, add it to the token source and document why.
- Use CSS variables for runtime theming.

## Frontend Standards

- Type-safe component props.
- Semantic HTML.
- Accessible navigation.
- Lazy-loaded media.
- Responsive image sources.
- Structured data on public pages.
- Core Web Vitals green.
- No layout shift on loading states.
- No duplicated component logic.

## Data Visualization Standards

Charts must include:

- Title.
- Time period.
- Data source.
- Axis labels where relevant.
- Tooltip.
- Empty state.
- Plain-language insight.

Avoid:

- 3D charts.
- Decorative gauges.
- Colour-only status.
- Unlabeled axes.

## Asset Formats

Use:

- SVG for logos and icons.
- WebP or AVIF for raster website images.
- PNG for transparent press assets where needed.
- MP4/WebM for video.
- JSON for Lottie.
- JSON/CSS for tokens.

## Accessibility Gate

Minimum:

- WCAG AA contrast.
- Keyboard navigation.
- Visible focus state.
- Screen-reader labels.
- Reduced motion support.
- 44 px touch targets.

