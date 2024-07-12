import { Box, BoxProps } from '@welcome-ui/box'

type SectionProps = BoxProps

export const Section = ({ children, ...rest }: SectionProps) => {
  return (
    <Box as="section" py={{ xs: 'xxl', md: 90 }} {...rest}>
      <Box margin="0 auto" maxWidth={1200} position="relative" px="lg">
        {children}
      </Box>
    </Box>
  )
}
