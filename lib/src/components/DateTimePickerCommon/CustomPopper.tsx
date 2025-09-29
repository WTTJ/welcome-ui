import React from 'react'

export const CustomPopper = ({ children }: { children: React.ReactElement }) => {
  if (!children) {
    return null
  }
  // Get any styles passed via `popperProps`
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children: nested, className, modifiers, placement, ...popperProps } = children.props
  return <div style={popperProps}>{children}</div>
}
