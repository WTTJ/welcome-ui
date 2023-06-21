import { defineConfig } from '@pandacss/dev'

import { colors } from './packages/Core/src/theme/colors'
import { space } from './packages/Core/src/theme/space'

// transform { primary: 'tomato' } to { primary: { value: 'tomato' }}
const formatTokens = (object: Record<string, string>) => {
  return Object.keys(object).reduce((acc: Record<string, { value: string }>, key) => {
    acc[key] = { value: colors[key as keyof typeof colors] }
    return acc
  }, {})
}

// use "yarn panda codegen" to regenerate "@welcome-ui/panda" package in node_modules after any changes
export default defineConfig({
  preflight: true,
  include: [],
  exclude: [],
  theme: {
    extend: {},
    tokens: {
      colors: formatTokens(colors),
      spacing: formatTokens(space),
    },
  },
  outdir: '@welcome-ui/panda',
  outExtension: 'js',
  jsxFramework: 'react',
  emitPackage: true,
})
