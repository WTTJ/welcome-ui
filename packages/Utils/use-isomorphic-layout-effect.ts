import { useEffect, useLayoutEffect } from 'react'

export const useIsomorphicLayoutEffect = process.browser ? useLayoutEffect : useEffect
