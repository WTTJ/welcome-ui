import { Box, BoxProps } from 'welcome-ui/Box'

type AProps = BoxProps & {
  children: React.ReactNode
}

export const Image = (props: AProps) => {
  return <Box as="img" maxW="100%" {...props} />
}
