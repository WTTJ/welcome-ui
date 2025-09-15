import type { BoxProps } from '@old/Box'
import { Box } from '@old/Box'

type AProps = BoxProps & {
  children: React.ReactNode
}

export const Image = (props: AProps) => {
  return <Box as="img" maxW="100%" {...props} />
}
