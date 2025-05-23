import type { BoxProps } from '@/Box'
import { Box } from '@/Box'

type SectionProps = BoxProps

export const Section = ({ children, ...rest }: SectionProps) => {
  return (
    <Box as="section" position="relative" py={{ md: 90, xs: 'xxl' }} {...rest}>
      <Box margin="0 auto" maxWidth={1200} position="relative" px="lg">
        {children}
      </Box>
    </Box>
  )
}
