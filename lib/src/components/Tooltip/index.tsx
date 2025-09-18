import {
  Tooltip as AriakitTooltip,
  TooltipAnchor as AriakitTooltipAnchor,
  useStoreState,
  useTooltipStore,
} from '@ariakit/react'
import type {
  TooltipProps as AriakitTooltipProps,
  TooltipStoreProps as AriakitTooltipStoreProps,
} from '@ariakit/react'
import React, { forwardRef, useCallback, useEffect, useState } from 'react'

import { classNames } from '@/utils'

import tooltipStyles from './tooltip.module.scss'
import { ARROW_SIZE, ARROW_SPACER, getTransformClass, getYPosition } from './utils'

export interface TooltipOptions {
  children: React.ReactNode
  content: JSX.Element | string
  fixed?: boolean
  gutter?: number
  placement?: TooltipPlacement
  withArrow?: boolean
}

export type TooltipPlacement = AriakitTooltipStoreProps['placement']

export type TooltipProps = Omit<AriakitTooltipProps, 'children' | 'content'> & TooltipOptions

const cx = classNames(tooltipStyles)

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      children,
      className = '',
      content,
      fixed = false,
      gutter = 8,
      placement = fixed ? 'top' : 'bottom',
      withArrow = false,
      ...rest
    }: TooltipProps,
    ref
  ) => {
    const tooltip = useTooltipStore({ animated: 300, placement })
    const { anchorElement, currentPlacement, mounted, popoverElement } = useStoreState(tooltip)
    const { render, setState } = tooltip
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const updatePosition = () => {
      if (!popoverElement) return

      Object.assign(popoverElement.style, {
        display: mounted ? 'block' : 'none',
        left: `${position.x}px`,
        position: 'absolute',
        top: `${position.y + window.scrollY + 20}px`,
      })
    }

    const stopAnimation = useCallback(() => {
      setState('animating', false)
    }, [setState])

    // Handle disabled children by wrapping them
    const child = (children as JSX.Element)?.props?.disabled
      ? React.Children.only(<span className={cx('childItem')}>{children}</span>)
      : children

    useEffect(() => {
      function onMouseMove({ clientX, clientY }: { clientX: number; clientY: number }) {
        setPosition({ x: clientX, y: clientY })
        render()
      }

      if (anchorElement && !fixed) {
        anchorElement.addEventListener('mousemove', onMouseMove)

        return () => {
          anchorElement.removeEventListener('mousemove', onMouseMove)
        }
      }
    }, [render, fixed, anchorElement])

    // If no content, simply return the children
    if (!content) {
      return children as React.ReactElement
    }

    const popoverHeight = popoverElement?.getBoundingClientRect()?.height

    return (
      <>
        <AriakitTooltipAnchor render={child as React.ReactElement} store={tooltip} />
        <AriakitTooltip
          fixed={fixed}
          gutter={gutter}
          ref={ref}
          render={<div {...rest} />}
          store={tooltip}
          updatePosition={fixed ? undefined : updatePosition}
        >
          <div
            className={cx(
              'root',
              withArrow && 'withArrow',
              currentPlacement && `placement-${currentPlacement}`,
              fixed && currentPlacement && getTransformClass(currentPlacement),
              className
            )}
            onTransitionEnd={stopAnimation}
            style={
              {
                '--tooltipArrowSize': `${ARROW_SIZE}px`,
                '--tooltipArrowSpacer': `${ARROW_SPACER}px`,
                '--tooltipYPosition': getYPosition(currentPlacement, popoverHeight),
              } as React.CSSProperties & Record<string, number | string>
            }
          >
            {content}
          </div>
        </AriakitTooltip>
      </>
    )
  }
)
