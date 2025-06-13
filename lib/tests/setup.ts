import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// Mock ResizeObserver globally
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  unobserve: vi.fn(),
}))
