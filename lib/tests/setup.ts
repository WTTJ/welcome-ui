import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// Mock ResizeObserver globally
global.ResizeObserver = vi.fn().mockImplementation(function () {
  this.disconnect = vi.fn()
  this.observe = vi.fn()
  this.unobserve = vi.fn()
})

// jsdom exposes `CSS` with `escape` only, but Ariakit's dialog calls
// `CSS.supports('scrollbar-gutter', 'stable')` to lock body scroll.
if (!globalThis.CSS) {
  // @ts-expect-error partial CSS implementation, only what jsdom is missing
  globalThis.CSS = {}
}
if (typeof globalThis.CSS.supports !== 'function') {
  globalThis.CSS.supports = () => false
}
