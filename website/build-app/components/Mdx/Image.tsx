import { Box, BoxProps } from '@welcome-ui/box'

interface AProps extends BoxProps {
  children: React.ReactNode
}

export const Image = (props: AProps) => {
  return <Box as="img" maxW="100%" {...props} />
}
