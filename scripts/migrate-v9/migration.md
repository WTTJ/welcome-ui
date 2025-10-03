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
  - ✅ **IMPLEMENTED**: Migration comments now correctly preserve full CSS blocks
- Ask me about negative rules e.g. e.g. `!$isExpanded && css`…``

## Key Insights from External Migration Testing

Based on analysis of the ExternalComplexComponent test case, we've identified the complete transformation pattern:

### Input Example (styles.ts):

```typescript
const TOPNAV_HEIGHT = '60px'
export const Wrapper = styled(Box)<{ variant: Variant }>(
  ({ variant }) => css`
    background-color: ${variant === 'primary' ? 'primary-500' : 'secondary-500'};
    min-height: calc(100vh - ${TOPNAV_HEIGHT});
  `
)
export const Card = styled(Link)<{ elevated?: boolean }>`
  background: white;
  ${({ elevated }) =>
    elevated &&
    css`
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `}
`
export const Title = styled.h3<TitleProps>`
  ${th('texts.h4')};
  margin-top: ${props => (props.displayDetail ? th('space.sm') : 0)};
`
```

### Expected Output (index.tsx):

```tsx
import { Link } from 'welcome-ui/Link'
import './styles.scss'

const TOPNAV_HEIGHT = '60px'

export const ComplexComponent = ({ variant = 'primary' }: { variant?: Variant }) => {
  const wrapperStyle = {
    '--wrapper-variant': variant === 'primary' ? 'color-primary-500' : 'color-secondary-500',
    '--wrapper-topnav-height': TOPNAV_HEIGHT,
  }

  return (
    <div className="wrapper" style={wrapperStyle}>
      <Link className="card elevated">
        <Text as="h3" variant="h4" className={`title ${displayDetail ? 'display-detail' : ''}`}>
          Complex component
        </Text>
      </Link>
      <button className="trigger-button is-active">Toggle</button>
    </div>
  )
}
```

### Expected Output (styles.scss):

```scss
.wrapper {
  background-color: var(--wrapper-variant);
  min-height: calc(100vh - var(--wrapper-topnav-height));
}
.card {
  background: white;
  &.elevated {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
}
.title {
  color: var(--color-neutral-90);
  &.display-detail {
    margin-top: var(--spacing-sm);
  }
}
```

### Transformation Patterns Identified:

1. **Constants**: Extract from styles.ts → define in tsx + use as CSS variables
2. **Conditional styling**: `variant === 'primary' ? ...` → CSS variables in style object
3. **Component bases**: `styled(Link)` → preserve `<Link>` component
4. **Theme functions**: `${th('texts.h4')}` → `<Text variant="h4">` component
5. **Conditional props**: `props.displayDetail` → JSX conditional className
6. **Boolean styling**: `elevated &&` → CSS class with `&.elevated` selector

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
- [x] **Task 1.4**: Add rule for `CallExpression` nodes (th() function calls) - ✅ **COMPLETED**
  - [x] Implemented `transformCallExpression()` function for different function types
  - [x] `th('space.md')` → `var(--spacing-md)` (theme space mapping)
  - [x] `th('texts.h4')` → `var(--text-h4)` (theme text mapping)
  - [x] `th('colors.primary.500')` → `var(--color-primary-500)` (theme color mapping)
  - [x] `th()` with invalid args → migration comment (error handling)
  - [x] Nested theme paths supported (dots converted to dashes)
- [x] **Task 1.5**: Test basic transformation with simple examples - ✅ **COMPLETED**
  - [x] Created comprehensive test covering all Phase 1 functionality
  - [x] All transformations working correctly: th() functions, identifiers, CSS blocks, mixins
  - [x] Fixed template literal processing logic (separate quasi/expression tracking)
  - [x] Validated CSS block preservation and mixin generation
  - [x] **Phase 1 Complete**: AST Transformer Foundation is solid and ready for Phase 2

### Phase 1.5: External Migration - Prop Handling (NEW)

- [x] **Task 1.5.1**: Fix prop-to-className conversion logic - ✅ **COMPLETED**
  - [x] **Boolean props**: `elevated` → `elevated` class (direct addition)
  - [x] **Dollar props**: `$isActive` → `is-active` class (with proper prefix handling)
  - [x] Fixed double prefix bug: `$isActive` now correctly becomes `is-active` not `is-is-active`
  - [x] **Value props foundation**: Added structure for `variant={variant}` → CSS variables + variant classes
- [ ] **Task 1.5.2**: Component type preservation
  - [ ] `styled(Link)` should preserve `<Link>` component, not convert to `<div>`
  - [ ] Need to analyze component base types and import preservation
- [ ] **Task 1.5.3**: Constants extraction and CSS variable generation
  - [ ] Extract constants like `TOPNAV_HEIGHT` from styles.ts
  - [ ] Generate CSS variables in style object: `--wrapper-topnav-height: TOPNAV_HEIGHT`
  - [ ] Replace constants in CSS with CSS variables: `calc(100vh - var(--wrapper-topnav-height))`
- [ ] **Task 1.5.4**: Theme function to component conversion
  - [ ] `styled.h3` with `${th('texts.h4')}` → `<Text as="h3" variant="h4">`
  - [ ] Detect theme function calls and convert to appropriate components
- [ ] **Task 1.5.5**: Conditional logic preservation
  - [ ] Convert hardcoded props to conditional JSX expressions
  - [ ] `displayDetail` → `${displayDetail ? 'display-detail' : ''}`

### Phase 2: Expression Transformations

- [x] **Task 2.1**: Handle `ConditionalExpression` nodes (ternary operators) - ✅ **COMPLETED**
  - [x] Implemented `transformConditionalExpression()` for ternary operator patterns
  - [x] Simple conditionals: `variant === 'primary' ? value1 : value2` → `var(--component-variant) /* values */`
  - [x] CSS variable naming: automatic `--component-{propname}` generation with kebab-case
  - [x] Value preservation: comments include original conditional values for reference
  - [x] Complex conditionals: logical expressions fallback to migration comments
  - [x] Perfect integration with external migration CSS variable strategy
- [x] **Task 2.2**: Handle `ArrowFunctionExpression` nodes (({ prop }) => prop && css`...`) - ✅ **COMPLETED**
  - [x] Implemented object pattern parameter parsing: `({ elevated })` → prop extraction
  - [x] Class name generation: prop names → `.kebab-case` CSS classes
  - [x] LogicalExpression body processing: `prop && css\`...\``→`&.class { ... }`
  - [x] Mixin reference handling: `prop && mixinName` → `&.class { @include mixin-name; }`
  - [x] Perfect integration: arrow functions → conditional CSS classes for className application
- [x] **Task 2.3**: Handle `LogicalExpression` nodes (prop && css`...`) - ✅ **COMPLETED**
  - [x] Standalone LogicalExpression processing: `${prop && css\`...\``} → CSS content extraction
  - [x] Mixin reference handling: `${prop && mixinName}` → `@include mixin-name;`
  - [x] Integration with ArrowFunctions: works both independently and within arrow function bodies
  - [x] Operator support: `&&` logical operator for conditional CSS application
- [x] **Task 2.4**: Handle `MemberExpression` nodes (props.variant, theme.colors) - ✅ **COMPLETED**
  - [x] Props pattern recognition: `props.*` expressions → CSS variables
  - [x] CSS variable generation: `props.variant` → `var(--component-variant)` with kebab-case
  - [x] Comment preservation: original member paths preserved for reference
  - [x] Fallback handling: non-props expressions (theme.colors) → migration comments
  - [x] Perfect integration: works with ConditionalExpression and other AST node types
- [x] **Task 2.5**: Handle `TaggedTemplateExpression` nodes (nested css`...`) - ✅ **COMPLETED**
  - [x] CSS template processing: `css\`...\`` → recursive AST transformation with full expression support
  - [x] Nested expression integration: expressions within css templates handled by appropriate transformers
  - [x] Conditional processing: ConditionalExpressions within css templates → CSS variables
  - [x] Fallback handling: non-css tagged templates → migration comments
  - [x] Recursive architecture: TaggedTemplateExpression → `transformCssAst` for nested processing

### 🎊 **PHASE 2 COMPLETE - Expression Transformations** ✅

**ALL 5 EXPRESSION TRANSFORMATION TASKS COMPLETE!**

### Phase 3: Mixin Generation

- [x] **Task 3.1**: Extract CSS variable declarations (const triggerActiveStyles = css`...`) - ✅ **COMPLETED**
  - [x] CSS variable detection: Successfully finds `const variableName = css\`...\``
  - [x] Regex pattern matching: Identifies CSS template literals in JavaScript/TypeScript
  - [x] Multiple declaration support: Processes multiple CSS variables in single file
- [x] **Task 3.2**: Convert to SCSS mixins (@mixin trigger-active-styles) - ✅ **COMPLETED**
  - [x] SCSS mixin generation: Converts CSS content to proper `@mixin name { ... }` format
  - [x] Naming convention: camelCase → kebab-case conversion (triggerActiveStyles → trigger-active-styles)
  - [x] Content formatting: Proper indentation and CSS structure preservation
- [x] **Task 3.3**: Replace mixin references with @include statements - ✅ **COMPLETED**
  - [x] Reference detection: Finds `\${variableName}` patterns in CSS templates
  - [x] Include conversion: Replaces references with `@include mixin-name;`
  - [x] Integration: Works seamlessly with existing CSS processing pipeline
- [ ] **Task 3.4**: Handle mixin parameters if needed

### Phase 4: Integration & Testing

- [x] **Task 4.1**: Integrate AST transformer with existing pipeline - ✅ **COMPLETED**
  - [x] Imported `transformCssAst` and `extractCssTemplateLiteralsAst` into migration pipeline
  - [x] Replaced `transformStyledComponentCss` with `transformCssAst` for template processing
  - [x] Replaced `extractCssTemplateLiterals` with `extractCssTemplateLiteralsAst` for mixin extraction
  - [x] Verified AST transformer working on real ExternalComplexComponent fixture
  - [x] Confirmed mixin extraction: `triggerActiveStyles` → `trigger-active-styles` mixin
  - [x] Validated expression processing: conditionals → CSS variables, arrow functions → classes
- [ ] **Task 4.2**: Replace regex-based CSS transformation
- [ ] **Task 4.3**: Test with ExternalComplexComponent fixture
- [ ] **Task 4.4**: Ensure all snapshot tests pass
- [ ] **Task 4.5**: Clean up old transformation code

### Phase 5: Advanced Patterns

- [ ] **Task 5.1**: Handle negative conditions (!$isExpanded && css`...`)
- [ ] **Task 5.2**: Handle complex conditional logic (multiple props)
- [ ] **Task 5.3**: Handle component references (${OrganizationName})
- [ ] **Task 5.4**: Handle theme function expansions (th('texts.h4'))

### Phase 6: Component File Transformations

- [ ] **Task 6.1**: Convert boolean props to className ternaries
- [ ] **Task 6.2**: Convert value props to className variants
- [ ] **Task 6.3**: Replace styled.h3 with <Text> components
- [ ] **Task 6.4**: Handle prop forwarding and type safety
