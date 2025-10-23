import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// Mock ResizeObserver globally
globalThis.ResizeObserver = class ResizeObserver {
  disconnect = vi.fn()
  observe = vi.fn()
  unobserve = vi.fn()
  constructor() {}
}
