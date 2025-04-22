import React, { useEffect, useState } from 'react'
import { createGlobalStyle, css } from '@xstyled/styled-components'

export const hideFocusRingsDataAttribute = 'data-wui-hidefocusrings'

// Based on braid's solution:
// https://github.com/seek-oss/braid-design-system/blob/9ea04cade0303309e956d943e88a9e613a19c333/lib/components/private/hideFocusRings/HideFocusRingsRoot.tsx

const HideFocusRingGlobalStyles = createGlobalStyle(
  () => css`
    [${hideFocusRingsDataAttribute}] *:focus {
      outline: none;
    }
  `
)

interface HideFocusRingsRootProps {
  children?: React.ReactNode
  reactRootId: string
}

export const HideFocusRingsRoot: React.FC<HideFocusRingsRootProps> = ({
  children,
  reactRootId,
}) => {
  const [hideFocusRings, setHideFocusRings] = useState(false)

  useEffect(() => {
    const eventName = hideFocusRings ? 'keydown' : 'mousemove'
    const toggleFocusRings = () => setHideFocusRings(x => !x)

    window.addEventListener(eventName, toggleFocusRings)

    const rootElement = document.getElementById(reactRootId)
    if (rootElement) {
      hideFocusRings
        ? rootElement.setAttribute(hideFocusRingsDataAttribute, 'true')
        : rootElement.removeAttribute(hideFocusRingsDataAttribute)
    }

    return () => {
      window.removeEventListener(eventName, toggleFocusRings)
    }
  }, [hideFocusRings, reactRootId])

  return (
    <>
      <HideFocusRingGlobalStyles />
      {children}
    </>
  )
}
