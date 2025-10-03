## Overview

We want to migrate component files with their corresponding styled-components files to component files with a corresponding .scss file

### Current files:

- component file: scripts/migrate-v9/**tests**/**fixtures**/ExternalComplexComponent/index.tsx
- styled-components file: scripts/migrate-v9/**tests**/**fixtures**/ExternalComplexComponent/styles.ts
- expectaions : scripts/migrate-v9/**tests**/**snapshots**/migrate-external-files-complex.test.mjs.snap

### Changes to make (we'll add to this as we understand the migration needs more):

#### In the component file (e.g. scripts/migrate-v9/**tests**/**fixtures**/ExternalComplexComponent/index.tsx):

- If a prop is a boolean e.g. `$isActive={false}` :
  - Convert it to a ternary in className e.g. `className={`root ${$isActive ? 'is-active' : ''}`}`
- If a prop has a value e.g. `variant={variant}`

  - Add it to the className as a value e.g. `className={`root ${variant ? variant-${variant} : ''}`}`
  - Add the available classes to the scss e.g.

  ```
    .root {
        bottom: 0;

        &.variant-sm { bottom: 1px; }
        &.variant-md { bottom: 2px; }
        &.variant-lg { bottom: 3px; }
     }
  ```

#### styles.ts > styles.scss

- Declarations like `const triggerActiveStyles = css`
  - Convert to a `@mixin`
  - Add `@include` where the declaration is called
- Rules with functions `${({ $isActive }) => $isActive && triggerActiveStyles};` or `${({ $isActive }) => $isActive ? triggerActiveStyles : triggerInactiveStyles}};`

  - Should call the corresponding mixin with `@include`

- If a component is a styled.h3 or other text node:
  - Convert the element `<Text variant="h3">` in the .tsx.
- If there are standalone text rules e.g. `${th('texts.xxx')};` :
  - Use this as the variant in the .tsx e.g. `<Text as="h3" variant="xxx">`
- If there are standalone rules e.g. `${th('links.default')};` :
  - Replace with value from theme.json e.g. `color: #000000; font-weight: 500; transition: 300ms ease;`
- If there are rules such as `bottom: ${th('space.md')};`:
  - Replace this with the corresponding css variable (e.g. `${th('space.md')};` > `var(--spacing-md)`)
-
- Anything that we're not able to handle e.g. `${OrganizationName} { bottom: 0; }`:
  - Add a comment above the rule and comment out the rule block e.g.
  ```
  /* WUI V9 TO MIGRATE */
  /*
  ${OrganizationName} {
    bottom: 0;
  }
  */
  ```
- Ask me about negative rules e.g. e.g. `!$isExpanded && css`…``

## Questions

1. What else do you need to continue ?
2. Can you show me the (s)css AST as a diagram ? If not, show me the AST so that I can copy/paste it into a visualiser.

## Notes:

- I want to do this in steps so that I can commit often.
- When code, explain to me what kind of AST node we're working with so I can understand better
- We should use regex as rarely as possible – use AST where possible
- Don't worry about lint issues – I'll fix them myself later
- Break the task into small chunks so I can commit often

## TODO:

### Phase 1: CSS AST Transformer Foundation

- [x] **Task 1.1**: Create AST visualization for CSS template literals
- [x] **Task 1.2**: Implement basic `transformCssAst()` function for TemplateLiteral nodes
- [x] **Task 1.3**: Add rule for `Identifier` nodes (TOPNAV_HEIGHT, triggerActiveStyles, etc.) - ✅ **COMPLETED**
  - [x] Implemented regex-based pattern recognition for different identifier types
  - [x] CONSTANTS (ALL_CAPS) → migration comment 
  - [x] Mixins (camelCaseStyles) → @include statements
  - [x] Components (PascalCase) → migration comment
  - [x] Variables (camelCase) → migration comment
  - [x] **Fixed migration comment format** to preserve entire CSS blocks like `${OrganizationName} { bottom: 0; }`
- [ ] **Task 1.4**: Add rule for `CallExpression` nodes (th() function calls)
- [ ] **Task 1.5**: Test basic transformation with simple examples

### Phase 2: Expression Transformations

- [ ] **Task 2.1**: Handle `ConditionalExpression` nodes (ternary operators)
- [ ] **Task 2.2**: Handle `ArrowFunctionExpression` nodes (({ prop }) => prop && css`...`)
- [ ] **Task 2.3**: Handle `LogicalExpression` nodes (prop && css`...`)
- [ ] **Task 2.4**: Handle `MemberExpression` nodes (props.variant, theme.colors)
- [ ] **Task 2.5**: Handle `TaggedTemplateExpression` nodes (nested css`...`)

### Phase 3: Mixin Generation

- [ ] **Task 3.1**: Extract CSS variable declarations (const triggerActiveStyles = css`...`)
- [ ] **Task 3.2**: Convert to SCSS mixins (@mixin trigger-active-styles)
- [ ] **Task 3.3**: Replace mixin references with @include statements
- [ ] **Task 3.4**: Handle mixin parameters if needed

### Phase 4: Advanced Patterns

- [ ] **Task 4.1**: Handle negative conditions (!$isExpanded && css`...`)
- [ ] **Task 4.2**: Handle complex conditional logic (multiple props)
- [ ] **Task 4.3**: Handle component references (${OrganizationName})
- [ ] **Task 4.4**: Handle theme function expansions (th('texts.h4'))

### Phase 5: Integration & Testing

- [ ] **Task 5.1**: Integrate AST transformer with existing pipeline
- [ ] **Task 5.2**: Replace regex-based CSS transformation
- [ ] **Task 5.3**: Test with ExternalComplexComponent fixture
- [ ] **Task 5.4**: Ensure all snapshot tests pass
- [ ] **Task 5.5**: Clean up old transformation code

### Phase 6: Component File Transformations

- [ ] **Task 6.1**: Convert boolean props to className ternaries
- [ ] **Task 6.2**: Convert value props to className variants
- [ ] **Task 6.3**: Replace styled.h3 with <Text> components
- [ ] **Task 6.4**: Handle prop forwarding and type safety
