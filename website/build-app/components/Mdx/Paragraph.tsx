'use client'
import { Text } from '@welcome-ui/text'

export const Paragraph = ({ children }: { children: JSX.Element }) => {
  const isDoDont = children?.props?.children === 'Do' || children?.props?.children === "Don't"

  if (isDoDont) return null

  return <Text>{children}</Text>
}
