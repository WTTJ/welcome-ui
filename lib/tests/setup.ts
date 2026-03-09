import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// Mock ResizeObserver globally
global.ResizeObserver = vi.fn().mockImplementation(function () {
  this.disconnect = vi.fn()
  this.observe = vi.fn()
  this.unobserve = vi.fn()
})
