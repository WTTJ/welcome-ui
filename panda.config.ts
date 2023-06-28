import { defineConfig } from '@pandacss/dev'

import { preset } from './packages/Core/src/preset'

export default defineConfig({
  preflight: true,
  include: [],
  exclude: [],
  presets: [preset],
  outdir: '@welcome-ui/panda',
  jsxFramework: 'react',
  emitPackage: true,
})
