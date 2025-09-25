import React, { Children, cloneElement, forwardRef, useEffect, useMemo, useState } from 'react'

import type { ContentProps } from '../types'

import { Close } from './Close'

/**
 * @name Modal.Content
 */
export const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ children, store, withClosingButton = true, ...rest }, ref) => {
    const [borderOnFooter, setBorderOnFooter] = useState(false)
    const contentElement = store.useState('contentElement')
    const open = store.useState('open')

    const components = useMemo(
      () =>
        Children.map(children, child => {
          if (React.isValidElement(child)) {
            const componentType = child.type as React.ComponentClass | React.FunctionComponent
            return componentType.displayName ?? componentType.name ?? ''
          }
          return ''
        }),
      [children]
    )
    const shouldShowCloseButton = !components.includes('Header') && withClosingButton

    const getStyles = (name?: string) => {
      if (name === 'Header') {
        return {
          // if the Modal have a Body but not a Footer || have a Footer but not a Body
          paddingBottom:
            (components.includes('Body') && !components.includes('Footer')) ||
            (components.includes('Footer') && !components.includes('Body'))
              ? 'var(--spacing-lg)'
              : 'var(--spacing-xxl)',
        }
      }

      if (name === 'Body') {
        return {
          paddingBottom: components.includes('Footer') ? 'var(--spacing-lg)' : null,
          paddingRight: components.includes('Header') ? 'var(--spacing-xxl)' : null,
        }
      }

      if (name === 'Footer') {
        return {
          borderWidth: borderOnFooter ? 'var(--border-width-sm)' : '0',
          paddingTop:
            components.includes('Header') || components.includes('Body')
              ? null
              : 'var(--spacing-lg)',
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
      <div ref={ref} {...rest}>
        {shouldShowCloseButton ? <Close /> : null}
        {Children.map(children, (child: JSX.Element) => {
          if (!child) return null
          const name = child?.type?.displayName || child?.type?.name
          return cloneElement(child, {
            style: getStyles(name),
            ...child.props,
          })
        })}
      </div>
    )
  }
)

Content.displayName = 'Content'
