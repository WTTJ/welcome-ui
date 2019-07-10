import React, {
  cloneElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react'
import Popper from 'popper.js'
import { TooltipReference, useDialogState, useTooltipState } from 'reakit'
import { bool, func, node, oneOf, oneOfType } from 'prop-types'

import { COMPONENT_TYPE } from '../../utils/'

import * as S from './styles'

const useMouseTooltipState = ({ placement: originalPlacement, ...rest } = {}) => {
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
            }
          }
        }
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

    const onMouseMove = event => {
      mouseRef.current = {
        getBoundingClientRect: () => ({
          ...reference.getBoundingClientRect(),
          top: event.clientY,
          bottom: event.clientY,
          left: event.clientX,
          right: event.clientX
        })
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
  }, [createPopper])

  return {
    ...dialog,
    unstable_referenceRef: referenceRef,
    unstable_popoverRef: popoverRef,
    unstable_popoverStyles: popoverStyles,
    placement
  }
}

export const Tooltip = ({ children, content, fixed = false, placement = 'top', ...props }) => {
  const useCorrectTooltipState = fixed ? useTooltipState : useMouseTooltipState
  const tooltip = useCorrectTooltipState({ placement })

  return (
    <>
      <TooltipReference {...tooltip}>
        {referenceProps => cloneElement(React.Children.only(children), referenceProps)}
      </TooltipReference>
      <S.Tooltip {...tooltip} {...props}>
        {content}
      </S.Tooltip>
    </>
  )
}

Tooltip.propTypes = {
  children: oneOfType([func, node]),
  content: COMPONENT_TYPE,
  fixed: bool,
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
