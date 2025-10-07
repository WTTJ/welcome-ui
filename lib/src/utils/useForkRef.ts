import React, { type Ref, useMemo, useRef } from 'react'

/**
 * Gets the ref of a child element if it exists.
 * @param child - A React node which may have a ref.
 * @returns The ref of the child element or null.
 */
export function getChildRef<T>(child: React.ReactNode): Ref<T> {
  if (React.isValidElement(child) && Object.prototype.hasOwnProperty.call(child, 'ref')) {
    return (child as React.FunctionComponentElement<unknown>)?.ref
  }

  return null
}

/**
 * Merges multiple refs into a single ref callback.
 */
export function mergeRefs<T>(...refs: Array<Ref<T> | undefined>) {
  return (element: T) => {
    refs.forEach(ref => setRef(ref, element))
  }
}

/**
 * Sets the given ref to the provided element.
 */
export function setRef<T>(ref?: Ref<T>, element?: T) {
  if (!ref) return
  if (typeof ref === 'function' && element !== undefined) {
    ref(element)
  } else {
    ;(ref as React.MutableRefObject<null | T>).current = element ?? null
  }
}

/**
 * Forks two refs into a single ref.
 * @returns A tuple containing the current ref and the merged refs function. The current ref should be used to access the DOM element, while the merged refs function should be passed to the component.
 */
export function useForkRef<T>(
  refA?: Ref<T>,
  refB?: Ref<T>
): [React.MutableRefObject<null | T>, (instance: T) => void] {
  const currentRef = useRef<null | T>(null)
  const mergedRefs = useMemo(() => mergeRefs(refA, currentRef, refB), [refA, currentRef, refB])

  return [currentRef, mergedRefs]
}
