'use client'
import type { Theme } from '@xstyled/styled-components'
import { useTheme } from '@xstyled/styled-components'

import { Alert } from '@/Alert'
import { Box } from '@/Box'
import { Grid } from '@/Grid'
import { Text } from '@/Text'
import type { ThemeValues } from '@/theme'

const getColors = (name: string, theme: Theme) => {
  const themeColors = theme.colors as ThemeValues['colors']
  const endByALetter = name === 'secondary'
  const pattern = endByALetter
    ? new RegExp(`^(${name})-\\w+`, 'g')
    : new RegExp(`^(${name})-\\d+`, 'g')

  return Object.keys(themeColors)
    .filter(color => color.match(pattern))
    .reduce<{ value: string; variant: string }[]>((acc, colorName) => {
      const colorValue = theme.colors[colorName as keyof ThemeValues['colors']]
      acc.push({ value: colorValue, variant: colorName })

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
        const isWhite = variant === 'neutral-10'

        return (
          <Box alignItems="center" display="flex" key={`${name}.${variant}`}>
            <Box
              backgroundColor={value}
              border={isWhite ? '1px solid' : undefined}
              borderColor={isWhite ? 'neutral-30' : undefined}
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
