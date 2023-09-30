import * as React from 'react'

interface PreProps {
  children: JSX.Element
}

export const Pre = ({ children }: PreProps) => {
  return <pre>{children}</pre>
}
