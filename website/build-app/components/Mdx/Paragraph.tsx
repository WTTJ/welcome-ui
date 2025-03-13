'use client'
import { Tokens } from './Tokens'

import { Text } from '@/Text'

export const Paragraph = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const isDoDont = children?.props?.children === 'Do' || children?.props?.children === "Don't"
  const isToken = children?.[0]?.props?.children?.startsWith('Token Group')

  if (isDoDont) return null

  if (isToken) return <Tokens>{children}</Tokens>

  return <Text mt="md">{children}</Text>
}
