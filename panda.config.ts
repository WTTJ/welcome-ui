import { defineConfig } from '@pandacss/dev'

import { preset } from './packages/Core/src/theme-panda'

export default defineConfig({
  preflight: true,
  include: ['packages/**/dist/index.css.json', 'packages/**/stories/index.stories.tsx'],
  exclude: [],
  presets: [preset],
  outdir: '@welcome-ui/panda',
  jsxFramework: 'react',
  emitPackage: true,
})
