import type { ScreenSizes } from '@/theme/types'

import { useScreens } from './use-screens'
import { useViewportSize } from './use-viewport'

// 'xxl' is a legacy alias of '2xl' (same pixel value) — excluded to avoid an ambiguous tie
export type Breakpoint = Exclude<ScreenSizes, 'xxl'>

export type BreakpointBoundary = 'excludeThreshold' | 'includeThreshold'

/**
 * Reactive current breakpoint name, derived from the theme's screen tokens
 * and the live viewport width.
 *
 * @param boundary - How to resolve a viewport that's exactly at a breakpoint's threshold:
 * - `'includeThreshold'` (default): the breakpoint starts as soon as the viewport reaches its
 *   threshold (`width >= threshold`). E.g. at exactly 736px, `useBreakpoint()` returns `'md'`.
 * - `'excludeThreshold'`: the breakpoint only starts once the viewport strictly passes its
 *   threshold (`width > threshold`). E.g. at exactly 736px, `useBreakpoint('excludeThreshold')`
 *   returns `'sm'` — `'md'` only kicks in at 737px.
 */
export function useBreakpoint(boundary: BreakpointBoundary = 'includeThreshold'): Breakpoint {
  const { width } = useViewportSize()
  const screens = useScreens()

  const currentWidth = width ?? (typeof window !== 'undefined' ? window.innerWidth : 0)

  const hasReached = (threshold: number) =>
    boundary === 'includeThreshold' ? currentWidth >= threshold : currentWidth > threshold

  const sortedBreakpoints = (Object.keys(screens) as ScreenSizes[])
    .filter((name): name is Breakpoint => name !== 'xxl')
    .sort((a, b) => screens[a] - screens[b])

  return sortedBreakpoints.reduce(
    (current, name) => (hasReached(screens[name]) ? name : current),
    sortedBreakpoints[0]
  )
}
