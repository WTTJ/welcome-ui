import React, { memo } from 'react'
import { bool, func, node, object } from 'prop-types'
import { PopoverArrow, PopoverDisclosure, usePopoverState } from 'reakit/Popover'
import { Box } from '@welcome-ui/box'
import { Button } from '@welcome-ui/button'
import { CrossIcon } from '@welcome-ui/icons.cross'

import * as S from './styles'

export const Popover = memo(function Popover({
  arrowStyle,
  children,
  onClose,
  title,
  withCloseButton = false,
  ...rest
}) {
  function closePopover() {
    if (onClose) onClose()
    rest?.hide()
  }

  return (
    <S.Popover {...rest}>
      <Box position="relative">
        <PopoverArrow {...rest} style={arrowStyle} />
        {title && <S.Title withCloseButton={withCloseButton}>{title}</S.Title>}
        <S.Content withCloseButton={withCloseButton && !title}>{children}</S.Content>
        {withCloseButton && (
          <Button
            flex="0 0 auto"
            ml="md"
            onClick={closePopover}
            position="absolute"
            right={0}
            shape="square"
            size="sm"
            top={0}
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
  /** node element for predefined styled for title */
  title: node,
  /** show or hide a close button */
  withCloseButton: bool
}

Popover.Trigger = PopoverDisclosure
export { usePopoverState }
