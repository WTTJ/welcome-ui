import React from 'react'
import { withTheme } from '@xstyled/styled-components'
import { Card } from '@welcome-ui/card'
import { Box } from '@welcome-ui/box'
import { Grid } from '@welcome-ui/grid'
import { Text } from '@welcome-ui/text'

const getColors = (name, theme) => {
  return Object.keys(theme.colors)
    .filter(color => color.startsWith(name))
    .reduce((colors, color) => {
      colors[color] = theme.colors[color]
      return colors
    }, {})
}

function Wrapper({ name, theme, colorsObject }) {
  const colors = colorsObject || getColors(name, theme)

  return (
    <Box>
      <Card mt="xl">
        <Card.Body as={Grid} templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap="xl">
          {Object.entries(colors).map(([key, depth]) => {
            const isWhite = key === 'neutral-white' || key === 'white'
            return (
              <Box display="flex" alignItems="center" key={`${name}.${key}`}>
                <Box
                  backgroundColor={key}
                  borderRadius="lg"
                  border={isWhite ? '1px solid' : undefined}
                  borderColor={isWhite ? 'border' : undefined}
                  h={60}
                  w={60}
                />
                <Box px="sm">
                  <Text variant="h6" as="span">
                    {key}
                  </Text>
                  <Text as="span" fontSize="sm" mt={3}>
                    {depth}
                  </Text>
                </Box>
              </Box>
            )
          })}
        </Card.Body>
      </Card>
    </Box>
  )
}

export const Colors = withTheme(Wrapper)
