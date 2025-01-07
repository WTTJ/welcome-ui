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
