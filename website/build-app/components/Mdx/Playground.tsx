import { Code } from './Code'

interface PreProps {
  children: string
}

export const Playground = ({ children }: PreProps) => {
  return <Code>{children}</Code>
}
