/* eslint-disable react/prop-types */
import React, { cloneElement } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

export const NavigationLink = ({ children, href, ...props }) => {
  const router = useRouter()
  let isActive = false

  if (router.pathname === href) {
    isActive = true
  }

  const childrenCloned = cloneElement(children, {
    'aria-current': isActive ? 'page' : undefined,
    ...children.props
  })

  return (
    <NextLink href={href} passHref {...props}>
      {childrenCloned}
    </NextLink>
  )
}
