import { useEffect, useLayoutEffect } from 'react'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const useIsomorphicLayoutEffect = process.browser ? useLayoutEffect : useEffect
