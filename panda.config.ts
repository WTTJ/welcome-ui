import { defineConfig } from '@pandacss/dev'

// use "yarn panda codegen" to regenerate "@welcome-ui/panda" package in node_modules after any changes
export default defineConfig({
  preflight: true,
  include: [],
  exclude: [],
  presets: ['./packages/Core/src/preset.ts'],
  outdir: '@welcome-ui/panda',
  // outExtension: 'js',
  jsxFramework: 'react',
  emitPackage: true,
})
