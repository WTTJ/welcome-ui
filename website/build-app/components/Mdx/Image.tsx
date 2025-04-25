import type { BoxProps } from '@/Box'
import { Box } from '@/Box'

type AProps = BoxProps & {
  children: React.ReactNode
}

export const Image = (props: AProps) => {
  return <Box as="img" maxW="100%" {...props} />
}
