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
  triggerMethod = 'click',
  withCloseButton = false,
  ...rest
}) {
  const hoverable = triggerMethod === 'hover'

  function closePopover() {
    if (onClose) onClose()
    rest?.hide()
  }

  function openPopover() {
    rest?.show()
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
    <S.Popover
      {...rest}
      $withCloseButton={withCloseButton}
      onMouseEnter={hoverable ? openPopover : undefined}
      onMouseLeave={hoverable ? closePopover : undefined}
    >
      <Box position="relative">
        <S.Arrow {...rest} style={{ ...arrowStyle }}>
          <S.ArrowItem
            $transform={transform}
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
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
