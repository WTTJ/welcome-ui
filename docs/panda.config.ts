import { defineConfig } from "@pandacss/dev"
import { welcomePreset } from '@welcome-ui/themes.welcome'
 
export default defineConfig({
  preflight: true,
  include: [
    '../packages/Button/dist/index.css.json'
  ],
  presets: [welcomePreset],
  exclude: [],
  outdir: "@welcome-ui/panda",
  jsxFramework: 'react',
  emitPackage: true
})