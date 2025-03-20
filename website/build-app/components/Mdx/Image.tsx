import type { BoxProps } from '@/Box'
import { Box } from '@/Box'

type AProps = {
  children: React.ReactNode
} & BoxProps

export const Image = (props: AProps) => {
  return <Box as="img" maxW="100%" {...props} />
}
