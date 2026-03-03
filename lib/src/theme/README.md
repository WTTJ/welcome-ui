# Theme Generation

This document explains how to update design tokens and regenerate the theme for Welcome UI.

## Overview

The theme generation process transforms design tokens exported from Figma into CSS custom properties (CSS variables) that can be used throughout the design system.

### Architecture

```
tokens/*.json (Figma export)
        │
        ▼
┌─────────────────────────────────────┐
│  build-tokens.js (Style Dictionary) │
└─────────────────────────────────────┘
        │
        ▼
generated/variables.css
        │
        ▼
┌─────────────────────────────────────┐
│  generate-theme.ts                  │
│  (combines CSS layers)              │
└─────────────────────────────────────┘
        │
        ▼
generated/theme.css (final output)
        │
        ▼
┌─────────────────────────────────────┐
│  generate-theme-variables.ts        │
│  (TypeScript/JS exports)            │
└─────────────────────────────────────┘
        │
        ▼
generated/variables.ts
generated/variables.js
```

## Updating Design Tokens

### Step 1: Download tokens from Figma

Download the latest token files from: **[Google Drive - Design Tokens](https://drive.google.com/drive/u/0/folders/1JroSdHxy_ZFfmrwIwDsWMBjBYlarSSpU)**.
This url will only be accessible to members of Welcome to the jungle. If you don't have access, please reach out to the design team.

### Step 2: Replace token files

Copy all downloaded JSON files into the `lib/src/theme/tokens/` directory, replacing the existing files.

Expected files:

- `primitives.json` - Base color values (yellow, red, blue, etc.)
- `Semantic - Colors.json` - Semantic color mappings
- `Semantic - Dimensions.json` - Size/spacing values
- `Actions - Components - Colors.json`
- `Actions - Components - Dimensions.json`
- `Data display - Components - Colors.json`
- `Data display - Components - Dimensions.json`
- `Feedback - Components - Colors.json`
- `Feedback - Components - Dimensions.json`
- `Forms - Components - Colors.json`
- `Forms - Components - Dimensions.json`
- `Navigation - Components - Colors.json`
- `Navigation - Components - Dimensions.json`
- `Component - Colors.json`
- `Component - Dimensions.json`

### Step 3: Generate the theme

From the repository root, run:

```bash
yarn theme:generate
```

### Step 4: Verify the output

Check the generated files:

- `lib/src/theme/generated/theme.css` - Main CSS output with all variables

### Step 5: Run the linter

Run the linter to check for any issues:

```bash
yarn lint
```

Jump to the [Troubleshooting](#troubleshooting) section if you encounter any issues.

### Final step: Commit & push

After verifying the generated files and ensuring there are no lint issues, commit & push your changes

## Generation Pipeline Details

### 1. `tokens:build` (build-tokens.js)

Uses [Style Dictionary](https://styledictionary.com/) v5 to:

- **Parse** JSON token files exported from Figma
- **Transform** values:
  - Convert Figma color objects to hex/rgba
  - Convert numbers to `px` or `rem` units
  - Add font family fallbacks
  - Remove duplicate names
  - Convert font weight strings to numbers
- **Generate** `variables.css` with all CSS custom properties

### 2. `generate-theme.ts`

Combines multiple CSS layers into the final `theme.css`:

1. `fontFaces.css` - @font-face declarations
2. `variables.css` - CSS custom properties from tokens
3. `techTokens.css` - Manual technical tokens (spacing, durations, timing functions)
4. `resets.css` - CSS reset styles
5. `base.css` - Base element styles
6. `utilities.css` - Utility classes

Also generates `breakpoints.scss` for SCSS usage.

### 3. `generate-theme-variables.ts`

Parses the generated CSS and exports all variables as:

- `variables.ts` - TypeScript with `as const` assertion
- `variables.js` - Plain JavaScript export

## File Structure

```
lib/src/theme/
├── generated/           # Auto-generated files (do not edit)
│   ├── theme.css        # Final CSS output
│   ├── variables.css    # CSS variables only
│   ├── variables.ts     # TypeScript export
│   └── variables.js     # JavaScript export
├── layers/              # CSS layer files
│   ├── base.css         # Base element styles
│   ├── fontFaces.css    # @font-face declarations
│   ├── resets.css       # CSS reset
│   ├── techTokens.css   # Manual technical tokens
│   └── utilities.css    # Utility classes
├── scripts/             # Generation scripts
│   ├── build-tokens.js  # Style Dictionary config
│   ├── generate-theme.ts
│   └── generate-theme-variables.ts
├── tokens/              # Figma token exports (JSON)
│   ├── primitives.json
│   ├── Semantic - Colors.json
│   └── ...
├── index.ts             # Theme exports
└── types.ts             # TypeScript types
```

## Technical Tokens

Some tokens are not managed in Figma and are defined manually in `layers/techTokens.css`:

- `--spacing` / `--spacing-0` - Base spacing unit
- `--duration-fast/medium/slow` - Animation durations
- `--timing-primary/secondary/tertiary` - Easing functions
- `--grid-pattern` - Background grid pattern

To modify these values, edit `techTokens.css` directly, then run `yarn theme:generate`.

## Aliases

The build process automatically creates aliases for backward compatibility:

| Original            | Alias        |
| ------------------- | ------------ |
| `--*-2xl`           | `--*-xxl`    |
| `--*-2xs`           | `--*-xxs`    |
| `--border-radius-*` | `--radius-*` |
| `--font-size-*`     | `--text-*`   |

## Troubleshooting

### Lint issues

Run the linter to check for issues. Designers might have changed token names that are not reflected in the codebase, causing lint errors.
If you find such issues, take the time to investigate if the token name change was intentional and update the codebase accordingly.
If the change seems unintentional, reach out to the design team to clarify and potentially revert the change in Figma.

### Token name collisions

If Style Dictionary reports token collisions, check for duplicate token names across different JSON files. The `figma-alias-parser` removes `$extensions` to reduce noise, but actual duplicates need to be resolved in Figma.

### Missing references

If a token references another token that doesn't exist, Style Dictionary will fail. Check that all referenced tokens (via `$extensions.com.figma.aliasData.targetVariableName`) exist in the primitives.
