import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const hideFocusRingsDataAttribute = 'data-wui-hidefocusrings'

// Based on braid's solution:
// https://github.com/seek-oss/braid-design-system/blob/9ea04cade0303309e956d943e88a9e613a19c333/lib/components/private/hideFocusRings/HideFocusRingsRoot.tsx
export const HideFocusRingsRoot = ({ children }) => {
  const [hideFocusRings, setHideFocusRings] = useState(false)

  useEffect(() => {
    const eventName = hideFocusRings ? 'keydown' : 'mousemove'
    const toggleFocusRings = () => setHideFocusRings(x => !x)

    window.addEventListener(eventName, toggleFocusRings)

    return () => {
      window.removeEventListener(eventName, toggleFocusRings)
    }
  }, [hideFocusRings])

  const props = hideFocusRings ? { [hideFocusRingsDataAttribute]: true } : {}
  return <div {...props}>{children}</div>
}

HideFocusRingsRoot.propTypes /* remove-proptypes */ = {
  children: PropTypes.node.isRequired
}
