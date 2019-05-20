import { useEffect, useRef } from 'react'

/** Hook to return correct ref updated  **/
export const useRefElement = (setRefElement, isParentElement) => {
  const targetRef = useRef()
  // get lastest
  useEffect(() => {
    isParentElement
      ? setRefElement(targetRef.current.parentElement.firstChild)
      : setRefElement(targetRef.current)
  }, [isParentElement, setRefElement, targetRef])

  return targetRef
}
