import React from 'react'
import { Box } from '@welcome-ui/box'
import { Button } from '@welcome-ui/button'
import { CrossIcon } from '@welcome-ui/icons.cross'
import { PopoverProps as ReakitPopoverProps } from 'reakit/Popover'

import * as S from './styles'
import { Trigger } from './Trigger'
import { UsePopoverStateReturn } from './usePopoverState'

interface PopoverOptions {
  arrowStyle: React.CSSProperties
  onClose: () => void
}

type PopoverProps = PopoverOptions & ReakitPopoverProps & UsePopoverStateReturn

export const PopoverComponent: React.FC<PopoverProps> = ({
  arrowStyle,
  children,
  onClose,
  // catch triggerMethod for it not to appear in the dom
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  triggerMethod = 'click',
  withCloseButton = false,
  ...rest
}) => {
  const closePopover = () => {
    if (onClose) onClose()
    rest?.hide()
  }

  // get the correct transform style for arrow
  const [placement] = rest.placement.split('-')
  const transformMap: { [key: string]: string } = {
    top: 'rotateZ(180deg)',
    right: 'rotateZ(-90deg)',
    bottom: 'rotateZ(360deg)',
    left: 'rotateZ(90deg)',
  }
  const transform = transformMap[placement]

  return (
    <S.Popover {...rest} $withCloseButton={withCloseButton}>
      <Box position="relative">
        <S.Arrow {...rest} style={{ ...arrowStyle }}>
          <S.ArrowItem $transform={transform} h={30} w={30} xmlns="http://www.w3.org/2000/svg">
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
}

export const Popover = Object.assign(PopoverComponent, {
  Content: S.Content,
  Title: S.Title,
  Trigger: Trigger,
})

export * from './usePopoverState'
