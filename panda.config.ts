import { defineConfig } from '@pandacss/dev'

import { preset } from './packages/Core/src/panda'
import { welcomePreset } from './packages/Themes/Welcome/src/preset'

export default defineConfig({
  preflight: true,
  include: ['packages/**/dist/index.css.json', 'packages/**/stories/index.stories.tsx'],
  exclude: [],
  presets: [preset, welcomePreset],
  jsxFramework: 'react',
  // emitPackage to false to make tests work with jest (to check)
  emitPackage: false,
  clean: false,
  outExtension: 'js',
  // outdir: '@welcome-ui/panda'
  outdir: 'packages/Panda',
})
