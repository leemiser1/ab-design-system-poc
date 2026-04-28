# Design System Rules
> **This is the single source of truth for all AI context in this project.**  
> When rules change, update this document first.  
> Then update `/CLAUDE.md` and `/.cursor/rules/design-system.mdc` from this document.  
> Last updated: April 2026

---

## 1. Stack Identity

This project uses **SvelteKit** with **Svelte** components. It is not React. It is not Vue.

- Framework: **SvelteKit**
- Components: **Svelte** (`.svelte` files)
- Styling: **Svelte scoped styles** + **CSS custom properties**
- Component documentation: **Storybook** with `@storybook/addon-svelte-csf`
- Design tool: **Figma** — MUI Figma Kit (paid version) with custom brand variables
- Design language: **Material Design 2** conventions via MUI
- AI coding tools: **Claude Code** (primary), **Cursor** (secondary)
- Repo: Standalone GitHub repo — no legacy codebase coupling

### What this stack is NOT

- Not React — never generate JSX, React hooks, or React component syntax
- Not MUI (the React library) — never use MUI React component APIs
- Not Tailwind — never use Tailwind utility classes
- Not MD3 — do not use `--md-sys-color-*` token names
- Not Next.js, Nuxt, or any other meta-framework

---

## 2. Token System

### 2.1 Token Source

Tokens are exported from the Figma variable collections. The CSS custom property names below are the authoritative names to use in all Svelte component styles. Never hardcode hex values, pixel values, or font sizes. Never invent token names. If a token does not exist, flag it rather than hardcoding a value.

### 2.2 Token Naming Convention

Figma variable names use camelCase and slash grouping (e.g. `primary/main`). In CSS they are exported as flat kebab-case custom properties (e.g. `--primarymain`). The mapping below shows the Figma source name and the CSS custom property to use in code.

### 2.3 Brand Colors — Raw Palette

These are the raw brand color values. They exist in the Figma `material/colors` collection. Reference semantic tokens (section 2.4) in components — not these raw values directly.

```css
--ab-blue600: #1e9bd7;
--ab-blue700: #046ea0;   /* Client primary main */
--ab-blue800: #03567d;   /* Client primary dark */

--ab-purple600: #5949a7;
--ab-purple700: #4d3f91; /* Internal primary main */
--ab-purple800: #2f2759; /* Internal primary dark */
```

### 2.4 Semantic Color Tokens — Primary (Per Mode)

These tokens resolve to different values depending on the active application context mode. The `-light-client` and `-light-internal` suffixes reflect the Figma mode names.

#### Primary — Light Client mode
```css
--primary_statesfocus-light-client: #046ea01f;
--primary_statesfocusvisible-light-client: #046ea04d;
--primary_stateshover-light-client: #046ea00a;
--primary_statesoutlinedborder-light-client: #046ea080;
--primary_statesselected-light-client: #046ea014;
--primarycontrasttext-light-client: #ffffff;
```

#### Primary — Light Internal mode
```css
--primary_statesfocus-light-internal: #4d3f911f;
--primary_statesfocusvisible-light-internal: #4d3f914d;
--primary_stateshover-light-internal: #4d3f910a;
--primary_statesoutlinedborder-light-internal: #4d3f9180;
--primary_statesselected-light-internal: #4d3f9114;
--primarycontrasttext-light-internal: #ffffff;
```

### 2.5 Secondary Color Tokens

Secondary color is shared across both application contexts (same value in both modes).

```css
--secondarymain-light-client: #757575;
--secondarymain-light-internal: #757575;
--secondarydark-light-client: #5c5c5c;
--secondarydark-light-internal: #5c5c5c;
--secondarylight-light-client: #969696;
--secondarylight-light-internal: #969696;
--secondarycontrasttext-light-client: #ffffff;
--secondarycontrasttext-light-internal: #ffffff;

/* Secondary states */
--secondary_stateshover-light-client: #7575750a;
--secondary_stateshover-light-internal: #7575750a;
--secondary_statesfocus-light-client: #7575751f;
--secondary_statesfocus-light-internal: #7575751f;
--secondary_statesfocusvisible-light-client: #7575754d;
--secondary_statesfocusvisible-light-internal: #7575754d;
--secondary_statesoutlinedborder-light-client: #75757580;
--secondary_statesoutlinedborder-light-internal: #75757580;
--secondary_statesselected-light-client: #75757514;
--secondary_statesselected-light-internal: #75757514;
```

### 2.6 Text Tokens

```css
--textprimary-light-client: #000000de;
--textprimary-light-internal: #000000de;
--textsecondary-light-client: #00000099;
--textsecondary-light-internal: #00000099;
--textdisabled-light-client: #00000061;
--textdisabled-light-internal: #00000061;
```

### 2.7 Background Tokens

```css
--backgrounddefault-light-client: #ffffff;
--backgrounddefault-light-internal: #ffffff;
--backgroundpaper-light-client: #ffffff;
--backgroundpaper-light-internal: #ffffff;
```

### 2.8 Action Tokens

```css
--actionactive-light-client: #0000008a;
--actionactive-light-internal: #0000008a;
--actionhover-light-client: #0000000a;
--actionhover-light-internal: #0000000a;
--actionselected-light-client: #00000014;
--actionselected-light-internal: #00000014;
--actiondisabled-light-client: #00000042;
--actiondisabled-light-internal: #00000042;
--actiondisabledbackground-light-client: #0000001f;
--actiondisabledbackground-light-internal: #0000001f;
--actionfocus-light-client: #0000001f;
--actionfocus-light-internal: #0000001f;
```

### 2.9 Divider

```css
--divider-light-client: #0000001f;
--divider-light-internal: #0000001f;
```

### 2.10 Status / Feedback Tokens

```css
/* Error */
--error_stateshover-light-client: #d32f2f0a;
--error_statesfocusvisible-light-client: #d32f2f4d;
--error_statesoutlinedborder-light-client: #d32f2f80;
--error_statesselected-light-client: #d32f2f14;
--errorcontrasttext-light-client: #ffffff;

/* Success */
--success_stateshover-light-client: #2e7d320a;
--success_statesfocusvisible-light-client: #2e7d324d;
--success_statesoutlinedborder-light-client: #2e7d3280;
--success_statesselected-light-client: #2e7d3214;
--successcontrasttext-light-client: #ffffff;

/* Warning */
--warning_stateshover-light-client: #ef6c000a;
--warning_statesfocusvisible-light-client: #ef6c004d;
--warning_statesoutlinedborder-light-client: #ef6c0080;
--warning_statesselected-light-client: #ef6c0014;
--warningcontrasttext-light-client: #ffffff;

/* Info */
--info_stateshover-light-client: #0288d10a;
--info_statesfocusvisible-light-client: #0288d14d;
--info_statesoutlinedborder-light-client: #0288d180;
--info_statesselected-light-client: #0288d114;
--infocontrasttext-light-client: #ffffff;
```

### 2.11 Component-Specific Tokens

```css
/* Alert backgrounds */
--_componentsalerterrorbackground-light-client: #fdeded;
--_componentsalerterrorcolor-light-client: #5f2120;
--_componentsalertinfobackground-light-client: #e5f6fd;
--_componentsalertinfocolor-light-client: #014361;
--_componentsalertsuccessbackground-light-client: #edf7ed;
--_componentsalertsuccesscolor-light-client: #1e4620;
--_componentsalertwarningbackground-light-client: #fff4e5;
--_componentsalertwarningcolor-light-client: #663c00;

/* Input fields */
--_componentsinputfilledenabledfill-light-client: #0000000f;
--_componentsinputfilledhoverfill-light-client: #00000017;
--_componentsinputoutlinedenabledborder-light-client: #0000003b;
--_componentsinputoutlinedhoverborder-light-client: #000000;
--_componentsinputstandardenabledborder-light-client: #0000006b;
--_componentsinputstandardhoverborder-light-client: #000000;

/* Chip */
--_componentschipdefaulthoverfill-light-client: #0000001f;
--_componentschipdefaultfocusfill-light-client: #00000033;
--_componentschipdefaultclosefill-light-client: #000000;

/* Tooltip */
--_componentstooltipfill-light-client: #616161e5;

/* Snackbar */
--_componentssnackbarfill-light-client: #323232;

/* Backdrop */
--_componentsbackdropfill-light-client: #00000080;
```

### 2.12 Shape / Border Radius Tokens

```css
--borderradius: 4;           /* Global default border radius (px) */
--borderradiusbutton: 100;   /* Button — pill shape */
--borderradiuschip: 8;       /* Chip — slightly rounded, not pill */
--none: 0;                   /* No border radius */
```

**Important:** Always append `px` when using numeric shape tokens in CSS:
```css
border-radius: var(--borderradiusbutton) * 1px; /* Wrong */
border-radius: 100px;  /* Wrong — hardcoded */
/* Correct approach — tokens export as unitless numbers,
   apply units in component CSS */
border-radius: calc(var(--borderradiusbutton) * 1px);
```

### 2.13 Spacing Tokens

Spacing tokens are unitless numbers — apply `px` in CSS.

```css
--05: 4;   /* 4px */
--1: 8;    /* 8px */
--2: 16;   /* 16px */
--3: 24;   /* 24px */
--4: 32;   /* 32px */
--5: 40;   /* 40px */
--6: 48;   /* 48px */
--7: 56;   /* 56px */
--8: 64;   /* 64px */
--9: 72;   /* 72px */
--10: 80;  /* 80px */
--12: 96;  /* 96px */
```

### 2.14 Typography Tokens

Font sizes are unitless numbers in the export — convert to rem or px in CSS.

```css
/* Font family */
--fontfamily-desktop: Arial;
--fontfamily-mobile: Arial;

/* Font weights */
--fontweightlight-desktop: 300;
--fontweightregular-desktop: 400;
--fontweightmedium-desktop: 500;
--fontweightsemibold-desktop: 600;
--fontweightbold-desktop: 700;

/* Type scale — desktop (px values) */
--typographyh1-desktop: 96;
--typographyh2-desktop: 60;
--typographyh3-desktop: 48;
--typographyh4-desktop: 32;
--typographyh5-desktop: 24;
--typographyh6-desktop: 20;
--typographysubtitle1-desktop: 16;
--typographysubtitle2-desktop: 14;
--typographybody1-desktop: 16;
--typographybody2-desktop: 14;
--typographycaption-desktop: 12;
--typographyoverline-desktop: 12;

/* Type scale — mobile (px values) */
--typographyh1-mobile: 56;
--typographyh2-mobile: 38;
--typographyh3-mobile: 32;
--typographyh4-mobile: 25;
--typographyh5-mobile: 20;
--typographyh6-mobile: 18;
```

### 2.15 Breakpoint Tokens

```css
--xs: 444;   /* 444px */
--sm: 600;   /* 600px */
--md: 900;   /* 900px */
--lg: 1200;  /* 1200px */
--xl: 1536;  /* 1536px */
```

---

## 3. Application Context — Dual Primary Color System

**This is one of the most important rules in this document.**

This design system has two distinct primary colors serving two different application contexts:

| Context | Primary Color | Hex | Figma Mode |
|---------|--------------|-----|------------|
| Internal | Purple | #4D3F91 | `light-internal` |
| Client-facing | Blue | #046EA0 | `light-client` |

### Rules

1. **Never use both primaries in the same UI.** Internal and Client contexts are mutually exclusive at the application level.
2. **Always confirm application context before using any primary color token.** If context is ambiguous, ask — do not assume.
3. **The PoC is Internal context only.** Use `light-internal` mode tokens throughout. Never reference `light-client` tokens in PoC components.
4. **Use the `-light-internal` suffixed token names** for all PoC component styles.
5. **Never hardcode `#4D3F91` or `#046EA0`** — always reference the token.

### Correct usage in Svelte (Internal context):
```css
/* Correct */
background-color: var(--primary_statesfocus-light-internal);
color: var(--primarycontrasttext-light-internal);

/* Wrong — wrong context */
background-color: var(--primary_statesfocus-light-client);

/* Wrong — hardcoded */
background-color: #4d3f91;
```

---

## 4. Typography Rules

### Font Families

| Usage | Font | Rule |
|-------|------|------|
| H1, H2 headings | Klavika | Always Klavika — never Arial for h1/h2 |
| H3 and below | Arial | Default — inherit from base |
| Body, labels, captions | Arial | Default |
| Buttons | Klavika | Exception to the Arial default |
| All other text | Arial | Default |

### Rules

- **Default font is Arial** — set at the root level, inherited by all components
- **Klavika is used selectively** — only h1, h2, and buttons unless Figma explicitly shows otherwise
- **Never assume Klavika** — if a Figma component does not explicitly show Klavika, use Arial
- **Never hardcode font family strings** — reference the font family token
- **Klavika is loaded as an enterprise Figma library font** — it is available in all Figma workspace files

---

## 5. Component Library

### 5.1 File Structure

Each component lives in its own folder under `src/lib/components/`. The component file and its Storybook story file are always co-located:

```
src/lib/components/
└── ComponentName/
    ├── ComponentName.svelte        ← component
    └── ComponentName.stories.svelte ← stories
```

### 5.2 Component Naming

Components use PascalCase for both folder and file names:

```
AppBar/
SideNav/
TextField/
Button/
Chip/
```

### 5.3 PoC Component Inventory

| Component | Type | Priority | Notes |
|-----------|------|----------|-------|
| AppBar | Custom | P0 | Application shell — top bar |
| SideNav | Custom | P0 | Custom nav — see section 6 |
| TextField | Standard | P1 | With all states |
| Button | Standard | P2 | Pill shape via --borderradiusbutton |
| Chip | Standard | P2 | Rounded via --borderradiuschip |

### 5.4 Component Generation Rules

When generating any Svelte component:

- Use `.svelte` file syntax — script, markup, style blocks
- Use Svelte scoped `<style>` blocks for component styles
- Use CSS custom properties from section 2 for all style values
- Never use inline styles
- Never use MUI React component APIs
- Never use `class:` directives that reference Tailwind classes
- Always generate the Storybook story file in the same session

---

## 6. Custom Navigation Component

The side navigation is a **custom component** — it does not use any out-of-box Material Navigation component. This is a hard rule.

### Description

The SideNav component mirrors the existing internal application navigation pattern. It is a vertical left-side navigation rail containing navigation items.

### Required States

| State | Description |
|-------|-------------|
| Default | Unselected nav item at rest |
| Active | Currently selected nav item — uses primary color |
| Hover | Mouse over unselected item — uses action hover token |

No other states are required for the PoC.

### Token Usage for SideNav

```css
/* Active item */
background-color: var(--primary_statesselected-light-internal);
color: var(--ab-purple700);

/* Hover item */
background-color: var(--actionhover-light-internal);

/* Default item */
color: var(--textprimary-light-internal);
```

### Hard Rules

- **Never substitute** a Material NavigationDrawer, NavigationRail, or NavigationBar component for SideNav
- **Never use MUI Drawer** component patterns
- **Always use** `SideNav` — the custom Svelte component in `src/lib/components/SideNav/`
- **Built from MD primitives** — uses color tokens, spacing tokens, and elevation tokens from the design system

---

## 7. Storybook Conventions

### 7.1 Story File Naming

Story files use the `.stories.svelte` extension and live alongside the component:

```
AppBar.svelte
AppBar.stories.svelte
```

### 7.2 Story File Structure

Use Svelte CSF syntax via `@storybook/addon-svelte-csf`:

```svelte
<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ComponentName from './ComponentName.svelte';

  const { Story } = defineMeta({
    title: 'Components/ComponentName',
    component: ComponentName,
  });
</script>

<Story name="Default" />

<Story name="StateName" args={{ propName: value }} />
```

### 7.3 Required Stories Per Component

Every component must have a story for every meaningful state. Minimum required stories:

| Component | Required stories |
|-----------|-----------------|
| AppBar | Default, WithBackButton, WithSearch |
| SideNav | Default, ActiveState, HoverState |
| TextField | Default, Focused, Filled, Error, Disabled, WithHelperText, WithInfoIcon, StaticLabel |
| Button | Filled, Outlined, Text, Disabled, Loading |
| Chip | Default, Selected, Disabled, WithIcon |

### 7.4 Story Generation Rule

**A component is not complete until its story file exists and all required stories render correctly in Storybook.**

When Claude Code generates a component, it must generate the story file in the same session before the work is considered done. These two files are always committed together.

### 7.5 Story Verification

Before committing, run Storybook locally and confirm every story renders with correct token values:

```bash
npm run storybook
```

Storybook runs at `http://localhost:6006`.

---

## 8. Figma Reference

### 8.1 File Information

- **Figma Kit:** MUI Figma Kit (paid version) — Material UI for Figma
- **Kit version:** Material UI 7.2.0, MUI X 8.10.0
- **File ID:** *ew8r2OdjlCOmHuM1L20Chc*

### 8.2 Variable Collections

| Collection | Purpose |
|------------|---------|
| `palette` | Semantic tokens + modes (light-client, light-internal, dark) |
| `material/colors` | Raw hex color values including brand colors |
| `typography` | Font sizes, weights, family |
| `shape` | Border radius values |
| `spacing` | Spacing scale |
| `breakpoints` | Responsive breakpoints |
| `metadata` | Kit version info |

### 8.3 Figma Modes

| Mode name | Context |
|-----------|---------|
| `light-client` | Client-facing applications — blue primary |
| `light-internal` | Internal applications — purple primary |
| `dark` | Dark mode — not used in PoC |

### 8.4 Code Connect

Figma components are mapped to Svelte components via Figma Code Connect. Code Connect files live alongside component files:

```
src/lib/components/AppBar/
├── AppBar.svelte
├── AppBar.stories.svelte
└── AppBar.figma.ts        ← Code Connect mapping
```

---

## 9. Things AI Must Never Do In This Codebase

This list is a record of known failure modes. Every item here represents something an AI tool will attempt if not explicitly prevented.

1. **Do not generate React code** — no JSX, no React hooks (`useState`, `useEffect` etc.), no React component syntax
2. **Do not use MUI React component APIs** — no `variant="contained"`, no `sx={{}}`, no `makeStyles`, no `styled()` from MUI
3. **Do not use MD3 token names** — `--md-sys-color-*` tokens do not exist in this codebase
4. **Do not use Tailwind** — no utility classes, no `className` with Tailwind values
5. **Do not use both primary colors in the same UI** — Internal and Client are mutually exclusive
6. **Do not assume application context** — always confirm Internal vs Client before using primary color tokens
7. **Do not hardcode hex values** — always use CSS custom properties
8. **Do not hardcode pixel values** — always use spacing or typography tokens
9. **Do not hardcode font family strings** — always use font family token
10. **Do not invent token names** — if a token does not exist, flag it and ask
11. **Do not substitute any Material nav component for SideNav** — SideNav is always the custom component
12. **Do not generate a component without also generating its Storybook story file**
13. **Do not commit a component and story separately** — they are always committed together
14. **Do not use inline styles** — always use scoped `<style>` blocks in Svelte components
15. **Do not assume Klavika applies to all headings** — only h1, h2, and buttons use Klavika unless Figma explicitly shows otherwise

---

## 10. Workflow Reference

### Building a New Component

1. Confirm application context (Internal for PoC — always)
2. Read the Figma component via MCP before generating code
3. Generate the Svelte component using tokens from section 2
4. Generate the Storybook story file in the same session
5. Run Storybook and verify all stories render correctly
6. Capture rendered component to Figma via Claude Code live capture
7. Commit component and story together

### Updating Rules

1. Update this document (`/docs/design-system-rules.md`) first
2. Update `/CLAUDE.md` to reflect the change
3. Update `/.cursor/rules/design-system.mdc` to reflect the change
4. Commit all three files together

### Token Missing?

If a required token does not exist in the export:
1. Flag it explicitly — do not hardcode a value
2. Note which component needs the token
3. Add the token to Figma first
4. Re-export and update this document
5. Then generate the component

---

*This document is the single source of truth for AI context in this project.*  
*CLAUDE.md and .cursor/rules/design-system.mdc are derived from this document.*  
*Do not edit those files directly — edit here first.*
