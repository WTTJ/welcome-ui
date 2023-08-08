export const getParentScale = (element: HTMLElement | null): number => {
  if (!element) return 1
  const elementScale = window.getComputedStyle(element).scale
  if (elementScale !== 'none') {
    return Number(elementScale)
  } else {
    return getParentScale(element.parentElement)
  }
}
