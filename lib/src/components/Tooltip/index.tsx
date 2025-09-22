import {
  Tooltip as AriakitTooltip,
  TooltipAnchor as AriakitTooltipAnchor,
  TooltipArrow as AriakitTooltipArrow,
  useStoreState,
  useTooltipStore,
} from '@ariakit/react'
import React, { forwardRef, useCallback, useEffect, useState } from 'react'

import { classNames } from '@/utils'

import tooltipStyles from './tooltip.module.scss'
import type { TooltipProps } from './types'

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
    const { anchorElement, mounted, popoverElement } = useStoreState(tooltip)
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

    return (
      <>
        <AriakitTooltipAnchor render={child as React.ReactElement} store={tooltip} />
        <AriakitTooltip
          className={cx('root', className)}
          fixed={fixed}
          gutter={gutter}
          onTransitionEnd={stopAnimation}
          ref={ref}
          render={<div {...rest} />}
          store={tooltip}
          updatePosition={fixed ? undefined : updatePosition}
        >
          {withArrow ? <AriakitTooltipArrow /> : null}
          {content}
        </AriakitTooltip>
      </>
    )
  }
)
