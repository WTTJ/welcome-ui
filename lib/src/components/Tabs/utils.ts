import type { ForwardedRef } from 'react'
import React, { cloneElement, useMemo, useState } from 'react'

import type { UseTabState } from '.'

//Check if the element, or its parent, has a scale property
export const getParentScale = (element: HTMLElement | null): number => {
  //If the element doesn't exist, or if window is undefined, return 1
  if (!element || typeof window === 'undefined') return 1
  const elementScale = Number(window.getComputedStyle(element).scale)

  //If the scale property is not unvalid or undefined, return its value
  //Else check the parent's scale property
  if (!isNaN(elementScale)) {
    return elementScale
  } else {
    return getParentScale(element.parentElement)
  }
}

export function useForkRef(
  refA: ForwardedRef<unknown>,
  refB: ForwardedRef<unknown>
): (instance: unknown) => void {
  /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior
   */
  return useMemo(() => {
    if (refA == null && refB == null) {
      return null
    }
    return instance => {
      setRef(refA, instance)
      setRef(refB, instance)
    }
  }, [refA, refB])
}

export function useTrackActiveTabs(
  selectedId: UseTabState['selectedId'],
  children: React.ReactNode
): { activeTab: HTMLElement; tabs: React.ReactNode } {
  const [activeTab, setActiveTab] = useState<HTMLElement>(null)

  const tabs = React.Children.map(children, (child: React.ReactElement) => {
    if (child.props.id === selectedId) {
      return cloneElement(child, { ref: setActiveTab })
    }
    return child
  })

  return { activeTab, tabs }
}

function setRef(ref: ForwardedRef<unknown>, value: unknown): void {
  if (typeof ref === 'function') {
    ref(value)
  } else if (ref) {
    ref.current = value
  }
}
