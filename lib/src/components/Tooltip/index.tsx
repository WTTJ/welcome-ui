import * as Ariakit from '@ariakit/react'
import type { ReactElement } from 'react'
import React, { useEffect, useState } from 'react'

import { Box } from '@/Box'
import type { CreateWuiProps } from '@/System'
import { forwardRef } from '@/System'

import * as S from './styles'

export type TooltipOptions = Pick<Ariakit.TooltipOptions, 'gutter'> &
  Pick<Ariakit.TooltipStoreProps, 'placement'> & {
    children: React.ReactNode
    content: ReactElement | string
    fixed?: boolean
    withArrow?: boolean
  }

export type TooltipProps = CreateWuiProps<'div', TooltipOptions>

export const Tooltip = forwardRef<'div', TooltipProps>(
  (
    {
      children,
      content,
      fixed = false,
      gutter = 8,
      placement = fixed ? 'top' : 'bottom',
      withArrow,
      ...rest
    },
    ref
  ) => {
    const tooltip = Ariakit.useTooltipStore({ animated: 300, placement })
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const { render, stopAnimation } = tooltip
    const { anchorElement, currentPlacement, mounted, popoverElement } = tooltip.useState()

    const updatePosition = () => {
      if (!popoverElement) return

      Object.assign(popoverElement.style, {
        display: mounted ? 'block' : 'none',
        left: `${position.x}px`,
        position: 'absolute',
        top: `${position.y + window.scrollY + 20}px`,
      })
    }

    const child = (children as ReactElement<{ disabled: boolean }>)?.props?.disabled
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
