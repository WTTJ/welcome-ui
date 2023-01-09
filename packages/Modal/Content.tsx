import React, { Children, cloneElement, useMemo, useRef } from 'react'
import { useTheme } from '@xstyled/styled-components'
import { forwardRef } from '@welcome-ui/system'
import { Box } from '@welcome-ui/box'

export interface ContentOptions {
  children: JSX.Element | JSX.Element[]
}

export type ContentProps = ContentOptions

/**
 * @name Modal.Content
 */
export const Content = forwardRef<'div', ContentProps>(({ children, ...rest }, ref) => {
  const { borderWidths, space } = useTheme()
  const headerRef = useRef(null)
  const bodyRef = useRef(null)
  const footerRef = useRef(null)
  const headerHeight = headerRef?.current?.clientHeight
  const footerHeight = footerRef?.current?.clientHeight
  const bodyHeight = bodyRef?.current?.clientHeight
  const bodyScrollHeight = bodyRef?.current?.scrollHeight

  const components = useMemo(
    () =>
      Children.map(children, child => {
        return child?.type?.displayName ?? child?.type?.name
      }),
    [children]
  )

  const setRef = (name?: string) => {
    if (name === 'Header') {
      return headerRef
    }

    if (name === 'Body') {
      return bodyRef
    }

    if (name === 'Footer') {
      return footerRef
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
        mt: { xs: headerHeight, md: 0 },
        mb: { xs: footerHeight, md: 0 },
        pb: components.includes('Footer') ? space.lg : null,
        pr: components.includes('Header') ? space.xxl : null,
        pt: components.includes('Header') ? 0 : null,
      }
    }

    if (name === 'Footer') {
      return {
        pt: components.includes('Header') || components.includes('Body') ? null : space.lg,
        borderWidth: bodyScrollHeight > bodyHeight ? borderWidths.sm : '0',
      }
    }

    return {}
  }

  return (
    <Box ref={ref} {...rest}>
      {Children.map(children, (child: JSX.Element) => {
        if (!child) return null
        const name = child?.type?.displayName || child?.type?.name

        return cloneElement(child, {
          ref: setRef(name),
          ...getStyles(name),
          ...child.props,
        })
      })}
    </Box>
  )
})

Content.displayName = 'Content'
