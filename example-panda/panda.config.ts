import { defineConfig } from '@pandacss/dev'
import { preset } from '@welcome-ui/core'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  jsxFramework: 'react',
  outdir: '@welcome-ui/panda',
  emitPackage: true,
  presets: [preset],
})
