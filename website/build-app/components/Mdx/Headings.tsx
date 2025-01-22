import { ThemeValues } from 'welcome-ui/theme'
import { Box } from 'welcome-ui/Box'
import { Text } from 'welcome-ui/Text'
import { kebabCase } from 'lodash'

type HeadingsProps = {
  children: React.ReactNode
  mt?: ThemeValues['marginTop']
}

export const H2 = ({ children, mt = '3xl' }: HeadingsProps) => {
  const id = `${kebabCase(children?.toString())}`

  return (
    <Text
      alignItems="center"
      as="h2"
      borderBottom="1px solid"
      borderBottomColor="neutral-30"
      display="flex"
      id={id}
      mt={mt}
      pb="sm"
      style={{ scrollMarginTop: 170 }}
      variant="h3"
    >
      <Box as="a" color="inherit" href={`#${id}`} textDecoration={{ hover: 'underline' }}>
        {children}
      </Box>
    </Text>
  )
}

export const H3 = ({ children, mt = 'xxl' }: HeadingsProps) => {
  const id = `${kebabCase(children?.toString())}`

  return (
    <Text as="h3" id={id} mb="lg" mt={mt} style={{ scrollMarginTop: 170 }} variant="h4">
      <Box as="a" color="inherit" href={`#${id}`} textDecoration={{ hover: 'underline' }}>
        {children}
      </Box>
    </Text>
  )
}

export const H4 = ({ children, mt = 'xl' }: HeadingsProps) => {
  return (
    <Text as="h4" id={`${kebabCase(children?.toString())}`} mb="md" mt={mt} variant="h5">
      {children}
    </Text>
  )
}
