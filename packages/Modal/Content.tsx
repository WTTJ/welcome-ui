import React, { Children, cloneElement, useMemo, useState } from 'react'
import { useTheme } from '@xstyled/styled-components'
import { forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export interface ContentOptions {
  children: JSX.Element | JSX.Element[]
}

export type ContentProps = ContentOptions

/**
 * @name Modal.Content
 */
export const Content = forwardRef<'div', ContentProps>(({ children, ...rest }, ref) => {
  const { borderWidths, space } = useTheme()
  const [bodyRef, setBodyRef] = useState<HTMLElement>(null)

  const components = useMemo(
    () =>
      Children.map(children, child => {
        return child?.type?.displayName ?? child?.type?.name
      }),
    [children]
  )

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
