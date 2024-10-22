'use client'
import { Alert } from '@welcome-ui/alert'
import { Box } from '@welcome-ui/box'
import { useTheme } from '@xstyled/styled-components'
import { WuiTheme } from '@welcome-ui/core'
import { Grid } from '@welcome-ui/grid'
import { Text } from '@welcome-ui/text'

const getColors = (name: string, theme: WuiTheme) => {
  const themeColors = theme.colors as WuiTheme['colors']
  const endByALetter = name === 'secondary'
  const pattern = endByALetter
    ? new RegExp(`^(${name})-\\w+`, 'g')
    : new RegExp(`^(${name})-\\d+`, 'g')

  return Object.keys(themeColors)
    .filter(color => color.match(pattern))
    .reduce<{ value: string; variant: string }[]>((acc, colorName) => {
      const colorValue = theme.colors[colorName as keyof WuiTheme['colors']]
      acc.push({ variant: colorName, value: colorValue })

      return acc
    }, [])
}

type ColorsProps = {
  name: string
}

export const Colors = ({ name }: ColorsProps) => {
  const theme = useTheme()

  const colors = getColors(name, theme)

  if (colors.length === 0) {
    return <Alert>Wrong color name</Alert>
  }

  return (
    <Grid gap="md" mt="md" templateColumns="repeat(auto-fit, minmax(250px, 1fr))">
      {colors.map(({ value, variant }) => {
        const isWhite =
          variant === 'neutral-white' || variant === 'white' || variant.endsWith('-10')

        return (
          <Box alignItems="center" display="flex" key={`${name}.${variant}`}>
            <Box
              backgroundColor={value}
              border={isWhite ? '1px solid' : undefined}
              borderColor={isWhite ? 'border' : undefined}
              borderRadius="lg"
              h={50}
              w={50}
            />
            <Box px="sm">
              <Text as="span" variant="h6">
                {variant}
              </Text>
              <Text as="span" fontSize="sm" mt={3}>
                {value}
              </Text>
            </Box>
          </Box>
        )
      })}
    </Grid>
  )
}
