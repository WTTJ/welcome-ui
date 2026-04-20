### Use theme tokens, never arbitrary values

Welcome UI resets the entire Tailwind default theme with `--*: initial` in its generated `theme.css`. This means **most default numeric Tailwind classes resolve to nothing** (e.g., `p-4`, `gap-6` won't work). Instead, use the named Welcome UI tokens: `p-sm`, `gap-lg`, etc.

For shadows specifically, Tailwind's `shadow-sm`/`shadow-md`/`shadow-lg` won't work either because the theme replaces `--shadow-*` with `--elevation-*` tokens. Use `shadow-(--elevation-10)` through `shadow-(--elevation-60)` instead (see the "Reference CSS custom properties directly" section below).

The Welcome UI spacing scale:

| Token | Value          |
| ----- | -------------- |
| `xs`  | 0.25rem (4px)  |
| `sm`  | 0.5rem (8px)   |
| `md`  | 0.75rem (12px) |
| `lg`  | 1rem (16px)    |
| `xl`  | 1.5rem (24px)  |
| `2xl` | 2rem (32px)    |
| `3xl` | 3rem (48px)    |
| `4xl` | 4rem (64px)    |
| `5xl` | 6rem (96px)    |
| `6xl` | 8rem (128px)   |

When choosing a spacing value, prefer the closest named token over an arbitrary number. For example, use `px-sm` (8px) or `px-lg` (16px), **not** `px-[20px]`. See [Theming Basics](/llms/foundations/theming/basics.md) for the full reference of sizes and valid names.

The full set of theme tokens (spacing, colors, radii, elevations, component-specific variables) is available (minified) in `node_modules/welcome-ui/dist/theme.css` when the library is installed.

### Reference CSS custom properties directly

You can use any CSS custom property from the theme as an arbitrary Tailwind value with the `--var` syntax:

```
px-(--spacing-xl)        /* 1.5rem padding-inline */
shadow-(--elevation-20)  /* 0 4px 6px 0 rgba(0,0,0,0.04) */
text-(--color-neutral-80)
```

This is useful for elevation tokens (`--elevation-10` through `--elevation-60`) and any component-specific variable.

### State management hooks

Some components require explicit state management via hooks; others manage state internally.

| Component | Hook | Purpose |
|-----------|------|---------|
| Modal | `useModal()` | Modal open/close state and control methods |
| Drawer | `useDrawer()` | Drawer slide-in state and control methods |
| Popover (click) | `usePopover()` | Click-triggered popover state |
| Popover (hover) | `usePopoverHover()` | Hover-triggered popover state |
| DropdownMenu | `useDropdownMenu()` | Dropdown menu state (animated by default) |
| Tabs | `useTab()` | Tab selection state |

Window, Tooltip, Toast, and form components do not expose state hooks; they manage state internally or imperatively (e.g. Toast uses the `toast()` function).

### Overlay components: choosing the right one

- **Modal** vs **Drawer**: Modal is a centered dialog (supports fullscreen). Drawer is a side panel with `placement` (top/bottom/left/right) and optional backdrop (`withBackdrop`, default false). Both provide asset variants (`AssetModal`, `AssetDrawer`).
- **Popover** vs **Tooltip**: Popover is interactive and click-triggered (`usePopover()`). PopoverHover is a separate component for hover behavior (`usePopoverHover()`). They use different Ariakit stores (`usePopoverStore` vs `useHovercardStore`) and should not be mixed in the same instance. Tooltip is for read-only contextual info on hover/focus with no hook required; for interactive overlay content, use Popover instead.
- **Toast** vs **Alert**: Toast is temporary and auto-closes; include `<Toast />` at the app root and invoke via the `toast()` function. It has two notification components: Snackbar (info-focused, bottom-center default) and Growl (important notifications, top-right default). Alert is persistent with CTA support (`cta` prop, `Alert.Button`, `Alert.SecondaryButton`) and stays until dismissed via `handleClose`.

### Drawer and Modal already integrate the Window design

Do **not** import `Window` separately when building a drawer or modal. Both components re-export Window sub-components under their own namespace:

- `Drawer.Header` (with `.Title`, `.LeftActions`, `.RightActions`, `.Tabs`, `.Tab`), `Drawer.Body`, `Drawer.BoxText`, `Drawer.Media`, `Drawer.Footer`, `Drawer.WindowTabPanel`
- `Modal.WindowHeader`, `Modal.WindowBody`, `Modal.WindowBoxText`, `Modal.WindowMedia`, `Modal.WindowTabPanel`, `Modal.Footer`

Use these directly:

```tsx
<Drawer>
  <Drawer.Trigger as={Button}>Open</Drawer.Trigger>
  <Drawer.Content>
    <Drawer.Header>
      <Drawer.Header.LeftActions isExpandable />
      <Drawer.Header.Title title="Title" />
      <Drawer.Header.RightActions isClosable />
    </Drawer.Header>
    <Drawer.Body size="lg">
      {/* content */}
    </Drawer.Body>
    <Drawer.Footer>
      <Button>Confirm</Button>
    </Drawer.Footer>
  </Drawer.Content>
</Drawer>
```

### Form composition patterns

Wrap form inputs in **Field** for consistent labels, hints, and validation feedback:

```
Field (wrapper)
  └─ InputText | Textarea | Select | RadioGroup | Checkbox
```

Field accepts `disabled`, `required`, `maxLength`, `error`, `warning`, `success` props that automatically style the label, hint, and border of the wrapped input.

**Radio vs RadioGroup:** The low-level `Radio` component must be wrapped in `<RadioProvider>` from `@ariakit/react`. **RadioGroup** is a higher-level composite component that manages its own state — avoid wrapping it with RadioProvider. Prefer RadioGroup for most use cases.

**Label nesting:** When nesting a checkbox or radio inside Label, ensure there is only one other child. Label supports `disabled`, `required`, and variants (danger/success/warning).

### Key props across components

**Sizing:**

| Component | `size` values | Default |
|-----------|--------------|---------|
| Modal | sm, md, lg, auto | lg |
| Drawer | sm, md, lg | lg |
| Alert | md, lg | md |
| Popover | No size prop | auto-sized |
| Tooltip | No size prop | auto-sized |

**Placement:**

| Component | `placement` values | Default |
|-----------|-------------------|---------|
| Drawer | top, bottom, left, right | right |
| Tooltip | top, bottom, left, right + -start/-end variants | depends on `fixed` prop |
| Popover | Uses Ariakit store positioning | — |
| Modal | No placement prop | always centered |

**Variants:**

| Component | `variant` values | Default |
|-----------|-----------------|---------|
| Form inputs | danger, success, warning | none |
| Alert | brand, danger, warning, success, info, ai | brand |
| Badge | brand, blue, neutral, warm | warm |
| Button | primary, primary-neutral, primary-danger, primary-ai, secondary, secondary-danger, tertiary, tertiary-danger | primary |
