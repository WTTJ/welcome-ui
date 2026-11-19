import { cleanup } from '@testing-library/react'
import type { Result, RunOptions } from 'axe-core'
import axe from 'axe-core'
import { afterEach, expect } from 'vitest'

import { a11yBaseline } from './a11y-baseline'

const AXE_OPTIONS: RunOptions = {
  rules: {
    // jsdom has no layout or computed colors
    'color-contrast': { enabled: false },
    // components are rendered outside any page landmark
    region: { enabled: false },
  },
}

const format = (violations: Result[]) =>
  violations
    .map(
      ({ helpUrl, id, impact, nodes }) =>
        `- ${id} (${impact}, ${nodes.length} node(s)): ${helpUrl}\n  ${nodes[0]?.html}`
    )
    .join('\n')

/**
 * Runs axe on whatever each test left rendered, then cleans up.
 * Requires RTL_SKIP_AUTO_CLEANUP so the DOM is still there.
 */
afterEach(async () => {
  try {
    if (!document.body.innerHTML.trim()) return

    const testFile = expect.getState().testPath?.split('/lib/src/')[1] ?? ''
    const known = a11yBaseline[testFile] ?? {}
    const { violations } = await axe.run(document.body, AXE_OPTIONS)
    const unexpected = violations.filter(({ id }) => !(id in known))

    if (unexpected.length) {
      throw new Error(`Accessibility violations:\n${format(unexpected)}`)
    }
  } finally {
    cleanup()
  }
})
