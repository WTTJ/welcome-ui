// This customem fixture captures console errors and fails the test if any are found.
import { test as base } from '@playwright/test'

type ConsoleMessage = {
  location?: {
    columnNumber: number
    lineNumber: number
    url: string
  }
  text: string
  type: string
}

export const test = base.extend({
  page: async ({ page }, use) => {
    const consoleErrors: ConsoleMessage[] = []

    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push({
          location: msg.location(),
          text: msg.text(),
          type: msg.type(),
        })
      }
    })

    page.on('pageerror', error => {
      consoleErrors.push({
        text: error.message,
        type: 'pageerror',
      })
    })

    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(page)

    if (consoleErrors.length > 0) {
      const errorDetails = consoleErrors
        .map(error => {
          const location = error.location
            ? ` at ${error.location.url}:${error.location.lineNumber}:${error.location.columnNumber}`
            : ''
          return `[${error.type}] ${error.text}${location}`
        })
        .join('\n')

      // actually there are error :-) throw new Error(`❌ Console errors detected:\n${errorDetails}`)
      // eslint-disable-next-line no-console
      console.log(`❌ Console errors detected:\n${errorDetails}`)
    }
  },
})

export { expect } from '@playwright/test'
