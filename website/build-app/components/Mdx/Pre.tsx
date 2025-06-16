import type { JSX } from 'react'

type PreProps = {
  children: JSX.Element
}

export const Pre = ({ children }: PreProps) => {
  return <div>{children}</div>
}
