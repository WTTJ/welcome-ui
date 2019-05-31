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

export const useKeyboardEvent = (key, callback) => {
  useEffect(() => {
    const handler = function(event) {
      if (event.key === key) {
        callback(event)
      }
    }

    window.addEventListener('keydown', handler)
    return () => {
      window.removeEventListener('keydown', handler)
    }
  }, [callback, key])
}
