import React, { useState } from 'react'
import { node, string } from 'prop-types'

import { useEventListener } from '../../utils/hooks/eventListener'
import { useRefElement } from '../../utils/hooks/refElement'
import { useSetAttribute } from '../../utils/hooks/attributes'

import { Wrapper } from './styles'

export const Tooltip = ({ accessibilityId, children }) => {
  /*** set state ***/
  // get mouse coords
  const [mouseCoords, setCoords] = useState({ left: 0, top: 0 })
  // toggle tooltip element
  const [isShow, toggleTooltip] = useState(false)
  // set target element
  const [targetElm, setTargetElm] = useState(null)
  const targetRef = useRefElement(setTargetElm, true)

  const showTooltip = () => toggleTooltip(true)
  const hideTooltip = () => toggleTooltip(false)

  // create accebility id for tooltip with prefix tooltip_
  const tooltipId = `tooltip_${accessibilityId}`

  // set correct coords to show tooltip at the right place
  const setCoordsOnMouseMove = ({ x, y }) => setCoords({ left: x + 10, top: y + 15 })

  /*** add events listeners ***/
  // update coords when mouse move
  useEventListener('mousemove', setCoordsOnMouseMove, targetElm)
  // show or hide tooltip when hover your parent
  useEventListener('mouseover', showTooltip, targetElm)
  useEventListener('mouseout', hideTooltip, targetElm)
  // for forms
  useEventListener('focus', showTooltip, targetElm)
  useEventListener('blur', hideTooltip, targetElm)

  // set attributes to the parent
  useSetAttribute('aria-describedby', tooltipId, targetElm)

  return (
    <>
      <div ref={targetRef} />
      {isShow && (
        <Wrapper id={tooltipId} left={mouseCoords.left} role="tooltip" top={mouseCoords.top}>
          {children}
        </Wrapper>
      )}
    </>
  )
}

Tooltip.propTypes = {
  /** id for aria-describedby for accessibility */
  accessibilityId: string.isRequired,
  /** wording to show in the tooltip */
  children: node.isRequired
}
