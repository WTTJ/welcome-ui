import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: [],
  exclude: [],
  presets: ['./packages/Core/src/preset.ts'],
  outdir: '@welcome-ui/panda',
  jsxFramework: 'react',
  emitPackage: true,
})
