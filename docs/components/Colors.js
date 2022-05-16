import React from 'react'
import { withTheme } from '@xstyled/styled-components'
import { Card } from '@welcome-ui/card'
import { Box } from '@welcome-ui/box'
import { Grid } from '@welcome-ui/grid'
import { Text } from '@welcome-ui/text'

function Wrapper({ name, theme, colorsObject }) {
  const colors = colorsObject || theme.colors[name]
  const isLight = name === 'light'

  return (
    <Box>
      <Card mt="xl">
        <Card.Body as={Grid} templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap="xl" backgroundColor={isLight && 'dark.900'}>
          {Object.entries(colors).map(([key, depth]) => (
            <Box display="flex" alignItems="center" key={`${name}.${key}`}>
              <Box
                backgroundColor={colorsObject ? key : `${name}.${key}`}
                borderRadius="lg"
                border={isLight ? '1px solid' : undefined}
                borderColor={isLight ? 'border' : undefined}
                h={60}
                w={60}
              />
              <Box px="sm">
                <Text
                  variant="h6"
                  as="span"
                  textTransform="capitalize"
                  color={isLight && 'light.900'}
                >
                  {colorsObject ? key : `${name} ${key}`}
                </Text>
                <Text color={isLight ? "light.900" : "dark.300"} as="span" fontSize="sm" mt={3}>
                  {depth}
                </Text>
              </Box>
            </Box>
          ))}
        </Card.Body>
      </Card>
    </Box>
  )
}

export const Colors = withTheme(Wrapper)
