import React, { ReactElement, useEffect, useState } from 'react'
import * as Ariakit from '@ariakit/react'
import { Box } from '@welcome-ui/box'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export type TooltipOptions = {
  children: React.ReactNode
  content: string | JSX.Element
  fixed?: boolean
} & Pick<Ariakit.TooltipStoreProps, 'placement'> &
  Pick<Ariakit.TooltipOptions, 'gutter'>

export type TooltipProps = CreateWuiProps<'div', TooltipOptions>

export const Tooltip = forwardRef<'div', TooltipProps>(
  (
    { children, content, fixed = false, placement = fixed ? 'top' : 'bottom', gutter = 8, ...rest },
    ref
  ) => {
    const tooltip = Ariakit.useTooltipStore({ placement, animated: true })
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const { getState, render, stopAnimation } = tooltip

    const updatePosition = () => {
      const { mounted, popoverElement } = getState()

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

      const { anchorElement } = getState()

      if (anchorElement && !fixed) {
        anchorElement.addEventListener('mousemove', onMouseMove)

        return () => {
          anchorElement.removeEventListener('mousemove', onMouseMove)
        }
      }
    }, [render, fixed, getState])

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
          <S.FadeIn fixed={fixed} onTransitionEnd={stopAnimation} placement={placement}>
            {content}
          </S.FadeIn>
        </Ariakit.Tooltip>
      </>
    )
  }
)
