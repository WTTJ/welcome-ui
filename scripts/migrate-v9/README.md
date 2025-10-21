# Welcome UI v9 Migration Scripts

This directory contains migration scripts to help upgrade from Welcome UI v8 to v9, handling both **inline styled components** and **external styled components**.

## 🚀 Quick Start - Unified Migration

**Recommended**: Use the unified migration script that handles both types of styled components:

```bash
# Migrate a component directory (default: in place, with formatting)
node scripts/migrate-v9/index.mjs ./src/components/MyComponent

# Create a backup copy before migration
node scripts/migrate-v9/index.mjs ./src/components/MyComponent --copy

# Enable interactive prompts for reviewing changes
node scripts/migrate-v9/index.mjs ./src/components/MyComponent --interactive

# Show detailed output during migration
node scripts/migrate-v9/index.mjs ./src/components/MyComponent --verbose

# Skip final Prettier and ESLint formatting
node scripts/migrate-v9/index.mjs ./src/components/MyComponent --no-format

# Only migrate files in target directory (not subdirectories)
node scripts/migrate-v9/index.mjs ./src/components/MyComponent --no-recursive

# Combine multiple options
node scripts/migrate-v9/index.mjs ./src/components/MyComponent --copy --verbose --interactive
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

// After: styles.module.scss
.menu {
  background: red;
  padding: 1rem;
}

// After: Component.tsx
import styles from './styles.module.scss'
import { classNames } from 'welcome-ui/utils'

const cx = classNames(styles)
<div className={cx('menu')}>Content</div>
```

**Note**: The script also handles nested component files that import from parent directories (e.g., `import * as S from '../styles'`).

## 🔧 Migration Process

The unified migration script automatically:

1. **Detects migration types** needed in your directory
2. **Creates a backup copy** (if `--copy` flag is used)
3. **Runs external migration first** (if `styles.ts` exists)
   - Converts `styles.ts` → `styles.module.scss`
   - Updates `<S.Component />` → `<div className={cx('component')} />`
   - Scans subdirectories for component files (unless `--no-recursive` is used)
4. **Runs inline migration second** (if Box/Flex/Grid/Stack found)
   - Converts `<Box mt="sm" />` → `<div className="mt-sm" />`
5. **Applies Prettier, ESLint, and Stylelint formatting** to all modified files (unless `--no-format` is used)

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

| Option | Description | Default |
| --- | --- | --- |
| `--copy` | Create a backup copy before migration (adds `-Migrated` suffix) | Migrate in place |
| `--interactive` | Enable interactive prompts for reviewing changes | Non-interactive mode |
| `--verbose` | Show detailed migration output | Minimal output |
| `--no-format` | Skip final Prettier, ESLint, and Stylelint formatting | Formatting enabled |
| `--no-recursive` | Only migrate files in target directory (not subdirectories) | Recursive scan enabled |

## 🧪 Testing

Run the migration test suite:

```bash
# Run all migration tests
yarn migrate:v9
```

## 💡 Best Practices

1. **Always backup** your code before running migrations (use git or the `--copy` flag)
2. **Start with small directories** to test the migration on a subset of components
3. **Review changes** carefully after migration, especially for complex styled components
4. **Run your tests** after migration to ensure everything still works
5. **Use `--verbose`** flag if you need to debug migration issues
6. **Use `--no-recursive`** when you only want to migrate files in a specific directory without touching subdirectories
7. **Use `--interactive`** mode to review each change before applying it

## 🐛 Troubleshooting

### Migration fails with Babel errors

- Check that your JSX syntax is valid
- Ensure TypeScript types are properly imported
- Try running on individual files to isolate issues
- Use `--verbose` flag to see detailed error messages

### Styled components not migrated

- Ensure `styles.ts` file exists in the directory
- Check that styled components follow the expected pattern: `styled.div`, `styled(Box)`, etc.
- Verify component usage follows `<S.ComponentName>` pattern
- Use `--verbose` to see which files are being processed

### Nested component files not migrated

- By default, the script recursively scans subdirectories
- If you don't want recursive scanning, use `--no-recursive`
- Check that nested files import styles with relative paths: `import * as S from '../styles'`

### CSS classes not applied correctly

- Verify that `styles.module.scss` was created (CSS Modules format)
- Check that your build system supports CSS Modules
- Ensure `classNames` utility is imported from `welcome-ui/utils`
- Review the generated `styles.module.scss` for any syntax issues

### Formatting issues after migration

- The script automatically runs Prettier, ESLint, and Stylelint
- Use `--no-format` if you want to skip automatic formatting
- Run your own formatters after migration if needed

## 🤝 Contributing

When adding new migration patterns:

1. Add tests in the appropriate test file
2. Update this README with new examples
3. Ensure Prettier formatting is applied consistently
4. Test both individual and unified migration flows
