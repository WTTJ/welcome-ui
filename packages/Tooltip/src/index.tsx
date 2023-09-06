import React, { ReactElement, useEffect, useState } from 'react'
import * as Ariakit from '@ariakit/react'
import { Box } from '@welcome-ui/box'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { type HTMLStyledProps, styled } from '@welcome-ui/panda/jsx'
import { tooltip } from '@welcome-ui/panda/recipes'

import * as S from './styles'

export type TooltipOptions = {
  children: React.ReactNode
  content: string | JSX.Element
  fixed?: boolean
  placement?: Ariakit.TooltipStoreProps['placement']
}

export type TooltipProps = CreateWuiProps<'div', TooltipOptions>

export const Tooltip = forwardRef<'div', TooltipProps>(
  ({ children, content, fixed = false, placement = fixed ? 'top' : 'bottom', ...rest }, ref) => {
    const tooltip = Ariakit.useTooltipStore({ placement, animated: true })
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const getState = tooltip.getState
    const render = tooltip.render

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
          ref={ref}
          render={<Box {...rest} />}
          store={tooltip}
          updatePosition={!fixed ? updatePosition : undefined}
        >
          <S.FadeIn fixed={fixed} placement={placement}>
            {content}
          </S.FadeIn>
        </Ariakit.Tooltip>
      </>
    )
  }
)

const transformDirection = {
  top: 'translate3d(0, -4px, 0)',
  right: 'translate3d(4px, 0, 0)',
  bottom: 'translate3d(0, 4px, 0)',
  left: 'translate3d(-4px, 0, 0)',
  auto: 'translate3d(0, 0, 0)',
}

const getTransform = (placement: TooltipOptions['placement']) => {
  const position = placement?.split('-')
  const directionKey = position[0]

  if (position.length < 2) {
    return transformDirection[directionKey as keyof typeof transformDirection]
  }

  let xy = '0, 0'
  if (placement == 'right-end' || placement == 'bottom-end') xy = '4px, 4px'
  if (placement == 'right-start' || placement == 'top-end') xy = '4px, -4px'
  if (placement == 'left-end' || placement == 'bottom-start') xy = '-4px, 4px'
  if (placement == 'left-start' || placement == 'top-start') xy = '-4px, -4px'

  return `translate3d(${xy}, 0)`
}

const getStyles = (fixed: boolean, placement: TooltipOptions['placement']) => {
  if (!fixed) return {}
  return { transform: getTransform(placement) }
}

export type TooltipPandaProps = HTMLStyledProps<'div'> & TooltipOptions

const StyledTooltipPanda = styled('div', tooltip)

export const TooltipPanda = React.forwardRef<HTMLDivElement, TooltipPandaProps>(
  ({ children, content, fixed = false, placement = fixed ? 'top' : 'bottom', ...rest }, ref) => {
    const tooltip = Ariakit.useTooltipStore({ placement, animated: true })
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const getState = tooltip.getState
    const render = tooltip.render
    const styles = getStyles(fixed, placement)

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
      ? React.Children.only(<styled.div display="inline-block">{children}</styled.div>)
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
          ref={ref}
          render={<StyledTooltipPanda style={styles} {...rest} />}
          store={tooltip}
          updatePosition={!fixed ? updatePosition : undefined}
        >
          {content}
        </Ariakit.Tooltip>
      </>
    )
  }
)
