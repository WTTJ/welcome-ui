export const getParentScale = (element: HTMLElement | null): number => {
  if (!element) return 1
  const elementScale = Number(window.getComputedStyle(element).scale)
  if (!isNaN(elementScale)) {
    return elementScale
  } else {
    return getParentScale(element.parentElement)
  }
}
