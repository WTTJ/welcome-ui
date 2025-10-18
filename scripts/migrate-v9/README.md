# Welcome UI v9 Migration Scripts

This directory contains migration scripts to help upgrade from Welcome UI v8 to v9, handling both **inline styled components** and **external styled components**.

## 🚀 Quick Start - Unified Migration

**Recommended**: Use the unified migration script that handles both types of styled components:

```bash
# Migrate a component directory (creates backup copy)
node scripts/migrate-v9/index.mjs ./src/components/MyComponent

# Auto-replace without prompting
node scripts/migrate-v9/index.mjs ./src/components/MyComponent --auto-replace

# Migrate in place (no backup copy)
node scripts/migrate-v9/index.mjs ./src/components/MyComponent --no-copy

# Show detailed output
node scripts/migrate-v9/index.mjs ./src/components/MyComponent --verbose
```

## 📋 What Gets Migrated

### 🎨 Inline Styled Components

Transforms Welcome UI components with style props:

```jsx
// Before
<Box mt="sm" backgroundColor="primary-500" display="flex">
  <Text fontSize="lg" color="dark-90">Hello</Text>
</Box>

// After
<div className="mt-sm bg-primary-500 flex">
  <Text className="text-lg text-dark-90">Hello</Text>
</div>
```

### 📦 External Styled Components

Transforms styled-components usage:

```jsx
// Before: styles.ts
export const Menu = styled.div`
  background: red;
  padding: 1rem;
`

// Before: Component.tsx
import * as S from './styles'
<S.Menu>Content</S.Menu>

// After: styles.scss
.menu {
  background: red;
  padding: 1rem;
}

// After: Component.tsx
import './styles.scss'
<div className="menu">Content</div>
```

## 🔧 Migration Process

The unified migration script automatically:

1. **Detects migration types** needed in your directory
2. **Creates a backup copy** (unless `--no-copy` is used)
3. **Runs external migration first** (if `styles.ts` exists)
   - Converts `styles.ts` → `styles.scss`
   - Updates `<S.Component />` → `<div className="component" />`
4. **Runs inline migration second** (if Box/Flex/Grid/Stack found)
   - Converts `<Box mt="sm" />` → `<div className="mt-sm" />`
5. **Applies Prettier formatting** to all modified files

## 📁 Directory Structure

```
scripts/migrate-v9/
├── index.mjs                    # 🚀 Unified migration (recommended)
├── index.test.mjs              # Tests for unified migration
├── format-with-prettier.mjs    # Shared Prettier formatting helper
├── process-components.mjs      # Shared component processing logic
├── esm.mjs                     # ESM/CJS compatibility utilities
├── inline/                     # Inline styled components migration
│   ├── index.mjs              # Inline migration entry point
│   ├── index.test.mjs         # Inline migration tests
│   ├── parsing.mjs            # JSX prop parsing utilities
│   ├── parsing.test.mjs       # Parsing tests
│   ├── transform.mjs          # Style prop transformation logic
│   ├── file-ops.mjs           # File system operations
│   ├── process-file.mjs       # File processing logic
│   └── fixtures/              # Test fixtures
└── external/                   # External styled components migration
    ├── index.mjs              # External migration entry point
    ├── index.test.mjs         # External migration tests
    └── fixtures/              # Test fixtures
```

## 🎯 Individual Migration Scripts

If you need to run migrations separately:

### Inline Components Only

```bash
node scripts/migrate-v9/inline/index.mjs ./src/components/MyComponent --replace
```

### External Components Only

```bash
node scripts/migrate-v9/external/index.mjs ./src/components/MyComponent
```

## ⚙️ Options

| Option           | Description                              | Default             |
| ---------------- | ---------------------------------------- | ------------------- |
| `--no-copy`      | Migrate files in place (no backup)       | Creates backup copy |
| `--auto-replace` | Auto-replace without interactive prompts | Interactive mode    |
| `--verbose`      | Show detailed migration output           | Minimal output      |

## 🧪 Testing

Run the migration test suite:

```bash
# Run all migration tests
yarn migrate:v9
```

## 💡 Best Practices

1. **Always backup** your code before running migrations (use git or the default copy behavior)
2. **Start with small directories** to test the migration on a subset of components
3. **Review changes** carefully after migration, especially for complex styled components
4. **Run your tests** after migration to ensure everything still works
5. **Use `--verbose`** flag if you need to debug migration issues

## 🐛 Troubleshooting

### Migration fails with Babel errors

- Check that your JSX syntax is valid
- Ensure TypeScript types are properly imported
- Try running on individual files to isolate issues

### Styled components not migrated

- Ensure `styles.ts` file exists in the directory
- Check that styled components follow the expected pattern: `styled.div`, `styled.Box`, etc.
- Verify component usage follows `<S.ComponentName>` pattern

### CSS classes not applied correctly

- Check that your build system processes the generated CSS classes
- Ensure Tailwind CSS or your CSS framework includes the generated classes
- Review the generated `styles.scss` for any syntax issues

## 🤝 Contributing

When adding new migration patterns:

1. Add tests in the appropriate test file
2. Update this README with new examples
3. Ensure Prettier formatting is applied consistently
4. Test both individual and unified migration flows
