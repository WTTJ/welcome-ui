import React, {
  cloneElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import Popper, { Placement } from 'popper.js'
import { TooltipReference, useTooltipState } from 'reakit/Tooltip'
import { useDialogState } from 'reakit/Dialog'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { Box } from '@welcome-ui/box'

import * as S from './styles'

const useMouseTooltipState = ({
  placement: originalPlacement,
  ...rest
}: { placement?: Placement } = {}) => {
  const popper = useRef(null)
  const referenceRef = useRef(null)
  const mouseRef = useRef(null)
  const popoverRef = useRef(null)

  const [placement, setPlacement] = useState(originalPlacement)
  const [popoverStyles, setPopoverStyles] = useState({})

  const dialog = useDialogState(rest)

  const createPopper = useCallback(() => {
    if ((mouseRef.current || referenceRef.current) && popoverRef.current) {
      popper.current = new Popper(mouseRef.current || referenceRef.current, popoverRef.current, {
        placement: originalPlacement,
        eventsEnabled: dialog.visible,
        modifiers: {
          applyStyle: { enabled: false },
          updateStateModifier: {
            order: 900,
            enabled: true,
            fn: data => {
              setPlacement(data.placement)
              setPopoverStyles(data.styles)
              return data
            },
          },
        },
      })
    }
  }, [originalPlacement, dialog.visible])

  useLayoutEffect(() => {
    createPopper()
    return () => {
      if (popper.current) {
        popper.current.destroy()
      }
    }
  }, [createPopper])

  useEffect(() => {
    const reference = referenceRef.current

    const paddingTop = placement.startsWith('top') ? 5 : 0
    const paddingBottom = placement.startsWith('bottom') ? 20 : 0
    const paddingLeft = placement.startsWith('left') ? 5 : 0
    const paddingRight = placement.startsWith('right') ? 15 : 0

    const onMouseMove = (event: MouseEvent) => {
      mouseRef.current = {
        getBoundingClientRect: () => ({
          ...reference.getBoundingClientRect(),
          top: event.clientY - paddingTop,
          bottom: event.clientY + paddingBottom,
          left: event.clientX - paddingLeft,
          right: event.clientX + paddingRight,
        }),
      }
      createPopper()
    }
    if (reference) {
      reference.addEventListener('mousemove', onMouseMove)
    }
    return () => {
      mouseRef.current = null
      if (reference) {
        reference.removeEventListener('mousemove', onMouseMove)
      }
    }
  }, [createPopper, placement])

  return {
    ...dialog,
    unstable_referenceRef: referenceRef,
    unstable_popoverRef: popoverRef,
    unstable_popoverStyles: popoverStyles,
    placement,
  }
}

export type PlacementOptions =
  | 'auto-start'
  | 'auto'
  | 'auto-end'
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'right-start'
  | 'right'
  | 'right-end'
  | 'bottom-end'
  | 'bottom'
  | 'bottom-start'
  | 'left-end'
  | 'left'
  | 'left-start'

export interface TooltipOptions {
  children: React.ReactNode
  content: string | JSX.Element
  fixed?: boolean
  placement?: PlacementOptions
}

export type TooltipProps = CreateWuiProps<'div', TooltipOptions>

export const Tooltip = forwardRef<'div', TooltipProps>((props, ref): React.ReactElement => {
  const {
    children,
    content,
    fixed = false,
    placement = fixed ? 'top' : 'bottom-start',
    ...rest
  } = props
  const useCorrectTooltipState = fixed ? useTooltipState : useMouseTooltipState
  const tooltip = useCorrectTooltipState({ placement, animated: true })
  // If no content, simply return the children
  if (!content) {
    return children as React.ReactElement
  }

  const child = React.Children.only(
    <Box display="inline-block">{children}</Box>
  ) as React.ReactElement

  return (
    <>
      <TooltipReference as={undefined} {...tooltip}>
        {referenceProps => cloneElement(child, referenceProps)}
      </TooltipReference>

      <S.Tooltip ref={ref} {...tooltip} {...rest}>
        <S.FadeIn fixed={fixed} placement={placement}>
          {content}
        </S.FadeIn>
      </S.Tooltip>
    </>
  )
})
