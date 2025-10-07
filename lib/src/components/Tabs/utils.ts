import React, { cloneElement, useState } from 'react'

import { getChildRef, mergeRefs } from '@/utils/useForkRef'

import type { UseTabState } from '.'

//Check if the element, or its parent, has a scale property
export const getParentScale = (element: HTMLElement | null): number => {
  //If the element doesn't exist, or if window is undefined, return 1
  if (!element || typeof window === 'undefined') return 1
  const elementScale = Number(window.getComputedStyle(element).scale)

  //If the scale property is not invalid or undefined, return its value
  //Else check the parent's scale property
  if (!isNaN(elementScale)) {
    return elementScale
  } else {
    return getParentScale(element.parentElement)
  }
}

export function useTrackActiveTabs(
  selectedId: UseTabState['selectedId'],
  children: React.ReactNode
): { activeTab: HTMLElement | null; tabs: React.ReactNode } {
  const [activeTab, setActiveTab] = useState<HTMLElement | null>(null)

  const tabs = React.Children.map(children, (child: React.ReactElement) => {
    if (child.props.id === selectedId) {
      return cloneElement(child, {
        ...child.props,
        ref: mergeRefs(setActiveTab, getChildRef(child)),
      })
    }
    return child
  })

  return { activeTab, tabs }
}
