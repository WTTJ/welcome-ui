import React from 'react'
import { TooltipReference, useTooltipState } from 'reakit'
import { func, node, oneOf, oneOfType } from 'prop-types'

import { COMPONENT_TYPE, useNextFrame } from '../../utils/'

import * as S from './styles'

export const Tooltip = ({ children, content, placement = 'top', ...props }) => {
  const tooltip = useTooltipState({ placement })

  return (
    <>
      <TooltipReference {...tooltip}>
        {referenceProps => React.cloneElement(React.Children.only(children), referenceProps)}
      </TooltipReference>
      <S.Tooltip hidden={useNextFrame(tooltip.hidden)} {...tooltip} {...props}>
        {content}
      </S.Tooltip>
    </>
  )
}

Tooltip.propTypes = {
  children: oneOfType([func, node]),
  content: COMPONENT_TYPE,
  placement: oneOf([
    'auto-start',
    'auto',
    'auto-end',
    'top-start',
    'top',
    'top-end',
    'right-start',
    'right',
    'right-end',
    'bottom-end',
    'bottom',
    'bottom-start',
    'left-end',
    'left',
    'left-start'
  ])
}
