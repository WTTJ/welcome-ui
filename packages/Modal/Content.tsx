import React, { Children, cloneElement, useEffect, useMemo, useState } from 'react'
import { useTheme } from '@xstyled/styled-components'
import { forwardRef } from '@welcome-ui/system'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import * as S from './styles'
import { useModal } from './context'

export interface ContentOptions {
  children: JSX.Element | JSX.Element[]
}

export type ContentProps = ContentOptions

/**
 * @name Modal.Content
 */
export const Content = forwardRef<'div', ContentProps>(({ children, ...rest }, ref) => {
  const { borderWidths, space } = useTheme()
  const modalState = useModal()

  const [bodyRef, setBodyRef] = useState<HTMLElement>(null)

  const components = useMemo(
    () =>
      Children.map(children, child => {
        return child?.type?.displayName ?? child?.type?.name
      }),
    [children]
  )

  /**
   * As Reakit doesn't handle scrolling content we have to forward the modalState to the Modal.Content
   * in order to check when the modal is visible and enable the scroll.
   * @link https://github.com/ariakit/ariakit/issues/469
   */
  useEffect(() => {
    if (modalState.visible && bodyRef) {
      disableBodyScroll(bodyRef)
    }
    return () => enableBodyScroll(bodyRef)
  }, [bodyRef, modalState.visible])

  const setRef = (name?: string) => {
    if (name === 'Body') {
      return setBodyRef
    }
    return undefined
  }

  const getStyles = (name?: string) => {
    if (name === 'Header') {
      return {
        pb: components.includes('Body') || components.includes('Footer') ? space.lg : null,
      }
    }
    if (name === 'Body') {
      return {
        pb: components.includes('Footer') ? space.lg : null,
        pr: components.includes('Header') ? space.xxl : null,
        pt: components.includes('Header') ? 0 : null,
      }
    }

    if (name === 'Footer') {
      return {
        pt: components.includes('Header') || components.includes('Body') ? null : space.lg,
        borderWidth: bodyRef && bodyRef.scrollHeight > bodyRef.offsetHeight ? borderWidths.sm : '0',
      }
    }

    return {}
  }

  return (
    <S.Content ref={ref} {...rest}>
      {Children.map(children, (child: JSX.Element) => {
        if (!child) return null
        const name = child?.type?.displayName || child?.type?.name

        return cloneElement(child, {
          ref: setRef(name),
          ...getStyles(name),
          ...child.props,
        })
      })}
    </S.Content>
  )
})

Content.displayName = 'Content'
