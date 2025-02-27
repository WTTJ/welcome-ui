import React, { ReactElement, useEffect, useState } from 'react'
import * as Ariakit from '@ariakit/react'

import * as S from './styles'

import { Box } from '@/Box'
import { CreateWuiProps, forwardRef } from '@/System'

export type TooltipOptions = {
  children: React.ReactNode
  content: string | JSX.Element
  fixed?: boolean
  withArrow?: boolean
} & Pick<Ariakit.TooltipStoreProps, 'placement'> &
  Pick<Ariakit.TooltipOptions, 'gutter'>

export type TooltipProps = CreateWuiProps<'div', TooltipOptions>

export const Tooltip = forwardRef<'div', TooltipProps>(
  (
    {
      children,
      content,
      fixed = false,
      placement = fixed ? 'top' : 'bottom',
      gutter = 8,
      withArrow,
      ...rest
    },
    ref
  ) => {
    const tooltip = Ariakit.useTooltipStore({ placement, animated: 300 })
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const { render, stopAnimation } = tooltip
    const { anchorElement, currentPlacement, mounted, popoverElement } = tooltip.useState()

    const updatePosition = () => {
      if (!popoverElement) return

      Object.assign(popoverElement.style, {
        display: mounted ? 'block' : 'none',
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y + window.scrollY + 20}px`,
      })
    }

    const child = (children as JSX.Element)?.props?.disabled
      ? React.Children.only(<S.ChildItem>{children}</S.ChildItem>)
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
        <Ariakit.TooltipAnchor render={child as ReactElement} store={tooltip} />
        <Ariakit.Tooltip
          fixed={fixed}
          gutter={gutter}
          ref={ref}
          render={<Box {...rest} />}
          store={tooltip}
          updatePosition={!fixed ? updatePosition : undefined}
        >
          <S.FadeIn
            fixed={fixed}
            onTransitionEnd={stopAnimation}
            placement={currentPlacement}
            popoverHeight={popoverElement?.getBoundingClientRect().height}
            withArrow={withArrow}
          >
            {content}
          </S.FadeIn>
        </Ariakit.Tooltip>
      </>
    )
  }
)
