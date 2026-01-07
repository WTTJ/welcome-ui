import { watch } from 'fs'
import { join } from 'path'

import { generateWebsiteExamplesPages } from '../scripts/generate-examples.mjs'
import { generateTypesDoc } from '../scripts/generate-types-doc.mjs'

function watchTypes() {
  const watchPath = join(process.cwd(), '../lib/src/components')
  const timeouts = new Map()

  watch(watchPath, { recursive: true }, (eventType, filename) => {
    // Check if it's a ts/tsx file and not in docs or tests folders
    if (
      filename &&
      /\.(ts|tsx)$/.test(filename) &&
      !filename.includes('/docs/') &&
      !filename.includes('/tests/')
    ) {
      // Extract component folder name from path
      const componentFolder = filename.split('/')[0]

      // Clear existing timeout for this component
      if (timeouts.has(componentFolder)) {
        clearTimeout(timeouts.get(componentFolder))
      }

      // Set new timeout for this component
      timeouts.set(
        componentFolder,
        setTimeout(async () => {
          await generateTypesDoc(componentFolder)
          timeouts.delete(componentFolder)
        }, 1000)
      )
    }
  })
}

const watchExamples = () => {
  const watchPath = join(process.cwd(), '../lib/src/components')
  let timeoutId = null

  watch(watchPath, { recursive: true }, (eventType, filename) => {
    if (filename?.includes('/docs/')) {
      clearTimeout(timeoutId)

      timeoutId = setTimeout(() => {
        generateWebsiteExamplesPages({ isWebsite: true })
      }, 1000)
    }
  })
}

// @ts-check
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    externalDir: true,
  },
  output: 'export',
  sassOptions: {
    implementation: 'sass-embedded',
  },
  turbopack: {
    // Set the correct workspace root to silence lockfile warning
    root: join(process.cwd(), '..'),
  },
  // Initialize watchers without custom webpack loader
  ...(process.env.NODE_ENV === 'development' && {
    // This runs during config initialization in dev mode
    onDemandEntries: {
      // Keep pages in memory for 60s
      maxInactiveAge: 60 * 1000,
    },
  }),
}

// Initialize watchers in development
if (process.env.NODE_ENV === 'development' && !global.__WATCHERS_INITIALIZED__) {
  watchTypes()
  watchExamples()
  global.__WATCHERS_INITIALIZED__ = true
}

export default nextConfig
