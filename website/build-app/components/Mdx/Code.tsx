import { Box } from '@welcome-ui/box'

interface CodeProps {
  children: React.ReactNode
}

export const Code = ({ children }: CodeProps) => {
  return (
    <Box
      as="code"
      backgroundColor="dark-100"
      borderRadius={2}
      color="dark-900"
      display="inline-block"
      p="xs"
      whiteSpace="break-spaces"
    >
      {children}
    </Box>
  )
}
