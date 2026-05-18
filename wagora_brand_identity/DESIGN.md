---
name: Wagora Brand Identity
colors:
  surface: '#f3fbf5'
  surface-dim: '#d4dcd6'
  surface-bright: '#f3fbf5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef6ef'
  surface-container: '#e8f0e9'
  surface-container-high: '#e2eae4'
  surface-container-highest: '#dce4de'
  on-surface: '#161d1a'
  on-surface-variant: '#3c4a43'
  inverse-surface: '#2a322e'
  inverse-on-surface: '#ebf3ec'
  outline: '#6c7a72'
  outline-variant: '#bbcac1'
  surface-tint: '#006c4f'
  primary: '#006c4f'
  on-primary: '#ffffff'
  primary-container: '#00c896'
  on-primary-container: '#004d38'
  inverse-primary: '#3adfab'
  secondary: '#596400'
  on-secondary: '#ffffff'
  secondary-container: '#d5ec37'
  on-secondary-container: '#5d6900'
  tertiary: '#9a451f'
  on-tertiary: '#ffffff'
  tertiary-container: '#ff9467'
  on-tertiary-container: '#762b05'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#60fcc6'
  primary-fixed-dim: '#3adfab'
  on-primary-fixed: '#002116'
  on-primary-fixed-variant: '#00513b'
  secondary-fixed: '#d8ee3a'
  secondary-fixed-dim: '#bcd215'
  on-secondary-fixed: '#191e00'
  on-secondary-fixed-variant: '#424b00'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb598'
  on-tertiary-fixed: '#370e00'
  on-tertiary-fixed-variant: '#7b2f09'
  background: '#f3fbf5'
  on-background: '#161d1a'
  surface-variant: '#dce4de'
typography:
  hero:
    fontFamily: Clash Display
    fontSize: 88px
    fontWeight: '700'
    lineHeight: '1.05'
    letterSpacing: -0.02em
  section-head:
    fontFamily: Clash Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
  sub-headline:
    fontFamily: Satoshi
    fontSize: 26px
    fontWeight: '600'
    lineHeight: '1.3'
  body:
    fontFamily: Satoshi
    fontSize: 17px
    fontWeight: '400'
    lineHeight: '1.65'
  small-label-caps:
    fontFamily: Satoshi
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.12em
  stats-display:
    fontFamily: Geist Mono
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.0'
  button-text:
    fontFamily: Satoshi
    fontSize: 15px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
---

## Brand & Style

The design system is anchored in the concept of "Autonomous Precision." It avoids the frenetic energy of typical AI startups in favor of a controlled, premium aesthetic that suggests reliability and high-level execution. The visual language balances architectural rigidity with organic warmth to evoke the feeling of a high-end physical tool.

The style is a fusion of **Minimalism** and **Tactile** design. It utilizes generous negative space to allow the high-contrast typography to lead the user journey. Instead of digital-first gradients, the system relies on flat, solid color blocks and a subtle 4% film grain texture applied across all surfaces to create a sense of physical permanence and "paper-like" quality.

## Colors

This design system employs a sophisticated, low-vibrancy palette that uses warm neutrals to soften the high-contrast black and white foundations. The **accent-primary** (Teal-Green) serves as the signal for action and growth, while the **accent-secondary** (Chartreuse) is used sparingly for highlights, attention-grabbing data points, or "active" AI states.

Color application must remain flat; no gradients are permitted. Functional states (hover, active, disabled) should be achieved through opacity shifts or tonal shifts within the established palette rather than introducing new hues.

## Typography

Typography is the primary driver of the visual hierarchy in this design system. **Clash Display** is used for high-impact headlines, emphasizing the geometric and architectural nature of the brand. **Satoshi** provides a highly legible yet warm experience for all UI elements and long-form body text. **Geist Mono** is reserved strictly for technical data, agent logs, and performance metrics, reinforcing the "precision" brand pillar.

Vertical rhythm should be strictly maintained. Headlines should favor tight line-heights to emphasize their structural density, while body copy requires a generous 1.65 line-height to maintain the feeling of "breathable" luxury.

## Layout & Spacing

This design system utilizes a **fixed grid** model to ensure absolute control over the composition. The 12-column grid is centered within the viewport with significant outer margins (48px+) to prevent the UI from feeling "crowded."

The spacing rhythm is built on an 8px base unit. Negative space is treated as a functional element—use the `xxl` (128px) and `xl` (64px) values to separate major sections and groups. This "generous" approach to padding within containers is what differentiates the system from traditional, information-dense SaaS platforms.

## Elevation & Depth

To maintain a premium, physical quality, the design system avoids ambient shadows and traditional 3D depth. Instead, it utilizes **tonal layers** and **crisp outlines** to define hierarchy.

1.  **Layering:** Objects do not "float"; they rest on surfaces. Use the `background-secondary` for the base and `surface-card` for interactive or elevated content.
2.  **Borders:** Use 1px solid borders (`border-default`) for all containers. In dark mode, these borders should be subtle, acting as "hairline" separators.
3.  **Texture:** A universal 4% noise overlay is applied to the entire interface. This creates a tactile, non-digital finish that mimics high-quality stationary or industrial matte surfaces.

## Shapes

The shape language is "Soft-Geometric." We use subtle rounding (0.25rem) to take the edge off the rigid grid without sacrificing the architectural feel. 

The **Cowrie shell logo** is the only exception to this rule, using a perfect elliptical form. UI components like cards and buttons should stay within the `radius.default` or `radius.lg` range. Never use pill-shaped buttons; they conflict with the "architectural" and "precise" brand identity.

## Components

**Buttons**
Buttons use the `button-text` typography. Primary buttons are solid `text-primary` with `surface-card` text, while secondary buttons use the `border-default` with no fill. All buttons feature the `0.25rem` radius.

**Cards**
Cards use `surface-card` with a 1px `border-default`. Padding inside cards must be generous (minimum 32px) to respect the layout philosophy.

**Input Fields**
Inputs use a `background-secondary` fill with a bottom-only border or a very subtle 1px frame. Focus states transition the border to `accent-primary`.

**Status Indicators**
AI activity is represented by small, solid circles of `accent-primary` (Teal) for "active/running" and `accent-secondary` (Chartreuse) for "learning/processing." No pulsing animations—only steady, solid states to convey "control."

**Data Visualization**
Use Geist Mono for all axis labels and legends. Charts should use solid strokes of the accent colors; no area fills or gradients.