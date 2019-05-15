import { useEffect } from 'react'

export const useSetAttribute = (attribute, value, element) => {
  useEffect(() => {
    if (!element) return
    element.setAttribute(attribute, value)
  }, [element, attribute, value])
}
