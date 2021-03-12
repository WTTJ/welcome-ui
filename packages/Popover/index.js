import React, { memo } from 'react'
import { bool, func, node, object, oneOf } from 'prop-types'
import { Box } from '@welcome-ui/box'
import { Button } from '@welcome-ui/button'
import { CrossIcon } from '@welcome-ui/icons.cross'

import * as S from './styles'
import { Trigger } from './Trigger'

export const Popover = memo(function Popover({
  arrowStyle,
  children,
  onClose,
  // catch triggerMethod for it not to appear in the dom
  // eslint-disable-next-line no-unused-vars
  triggerMethod = 'click',
  withCloseButton = false,
  ...rest
}) {
  function closePopover() {
    if (onClose) onClose()
    rest?.hide()
  }

  // get the correct transform style for arrow
  const [placement] = rest.placement.split('-')
  const transformMap = {
    top: 'rotateZ(180deg)',
    right: 'rotateZ(-90deg)',
    bottom: 'rotateZ(360deg)',
    left: 'rotateZ(90deg)'
  }
  const transform = transformMap[placement]

  return (
    <S.Popover {...rest} $withCloseButton={withCloseButton}>
      <Box position="relative">
        <S.Arrow {...rest} style={{ ...arrowStyle }}>
          <S.ArrowItem $transform={transform} h="30" w="30" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 30l9-10 9 10z" fill="currentColor" fillRule="nonzero" />
          </S.ArrowItem>
        </S.Arrow>
        {children}
        {withCloseButton && (
          <Button
            flex="0 0 auto"
            ml="md"
            onClick={closePopover}
            position="absolute"
            right={1}
            shape="square"
            size="sm"
            top={1}
            variant="secondary"
          >
            <CrossIcon />
          </Button>
        )}
      </Box>
    </S.Popover>
  )
})

Popover.propTypes = {
  /** add style to arrow */
  arrowStyle: object,
  children: node,
  /** call an function when popover closed */
  onClose: func,
  /** the method to open and close the popover */
  triggerMethod: oneOf(['click', 'hover']),
  /** show or hide a close button */
  withCloseButton: bool
}

Popover.Content = S.Content
Popover.Title = S.Title
Popover.Trigger = Trigger

export * from './usePopoverState'
