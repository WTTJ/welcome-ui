import { useEffect, useRef } from 'react'

/** Hook for events listeners **/
export const useEventListener = (eventName, handler, element = global) => {
  const savedHandler = useRef()

  savedHandler.current = handler

  useEffect(() => {
    const isSupported = element && element.addEventListener
    if (!isSupported) return
    const eventListener = event => savedHandler.current(event)
    element.addEventListener(eventName, eventListener)
    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element])
}
