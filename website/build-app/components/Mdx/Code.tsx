import { Box } from '@welcome-ui/box'

interface CodeProps {
  children: React.ReactNode
}

export const Code = ({ children }: CodeProps) => {
  return (
    <Box
      alignItems="center"
      as="code"
      backgroundColor="info-100"
      borderRadius={2}
      color="info-500"
      display="inline-flex"
      px="sm"
      py="xs"
      text="sm"
      whiteSpace="break-spaces"
    >
      {children}
    </Box>
  )
}
