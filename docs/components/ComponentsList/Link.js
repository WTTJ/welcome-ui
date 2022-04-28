import React, { cloneElement, useEffect, useRef } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

export function Link({ children, href, ...props }) {
  const router = useRouter()
  const ref = useRef()
  let isActive = false

  useEffect(() => {
    if (isActive) {
      const element = ref.current

      if (element) {
        element.scrollIntoView({
          block: 'center',
        })
      }
    }
  }, [isActive])

  if (router.pathname === href) {
    isActive = true
  }

  const childrenCloned = cloneElement(children, {
    'aria-current': isActive ? 'page' : undefined,
    ref,
    ...children.props,
  })

  return (
    <NextLink href={href} passHref ref={ref} {...props}>
      {childrenCloned}
    </NextLink>
  )
}
