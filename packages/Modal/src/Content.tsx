import React, { Children, cloneElement, useEffect, useMemo, useState } from 'react'
import { useTheme } from '@xstyled/styled-components'
import { forwardRef } from '@welcome-ui/system'

import * as S from './styles'
import { Close } from './Close'

import { useModalContext } from '.'

export interface ContentOptions {
  children: React.ReactNode
}

export type ContentProps = ContentOptions & {
  /**
   * show or hide the closing button
   * @deprecated use useModal({ withClosingButton: false }) instead
   */
  withClosingButton?: boolean
}

/**
 * @name Modal.Content
 */
export const Content = forwardRef<'div', ContentProps>(
  ({ children, withClosingButton = true, ...rest }, ref) => {
    const { borderWidths, space } = useTheme()
    const [borderOnFooter, setBorderOnFooter] = useState(false)
    const store = useModalContext()
    const contentElement = store.useState('contentElement')
    const open = store.useState('open')

    const components = useMemo(
      () =>
        Children.map(children, child => {
          if (React.isValidElement(child)) {
            const componentType = child.type as React.FunctionComponent | React.ComponentClass
            return componentType.displayName ?? componentType.name ?? ''
          }
          return ''
        }),
      [children]
    )
    const shouldShowCloseButton =
      !components.includes('Header') && store.withClosingButton && withClosingButton

    const getStyles = (name?: string) => {
      if (name === 'Header') {
        return {
          // if the Modal have a Body but not a Footer || have a Footer but not a Body
          pb:
            (components.includes('Body') && !components.includes('Footer')) ||
            (components.includes('Footer') && !components.includes('Body'))
              ? space.lg
              : space.xxl,
        }
      }

      if (name === 'Body') {
        return {
          pb: components.includes('Footer') ? space.lg : null,
          pr: components.includes('Header') ? space.xxl : null,
        }
      }

      if (name === 'Footer') {
        return {
          pt: components.includes('Header') || components.includes('Body') ? null : space.lg,
          borderWidth: borderOnFooter ? borderWidths.sm : '0',
        }
      }

      return {}
    }

    // we need to calculate when the modal open the contentElement height
    useEffect(() => {
      if (!open) {
        setBorderOnFooter(false)
      } else if (contentElement) {
        setBorderOnFooter(contentElement.scrollHeight > contentElement.offsetHeight)
      }
    }, [store, open, contentElement])

    return (
      <S.Content ref={ref} {...rest}>
        {shouldShowCloseButton ? <Close /> : null}
        {Children.map(children, (child: JSX.Element) => {
          if (!child) return null
          const name = child?.type?.displayName || child?.type?.name

          return cloneElement(child, {
            ...getStyles(name),
            ...child.props,
          })
        })}
      </S.Content>
    )
  }
)

Content.displayName = 'Content'
