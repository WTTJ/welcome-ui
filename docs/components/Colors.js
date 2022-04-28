
import React from 'react'
import { withTheme } from '@xstyled/styled-components'
import { Card } from '@welcome-ui/card'
import { Box } from '@welcome-ui/box'

function Wrapper({ name, theme }) {
  const colors = theme.colors[name]

  return (
    <Box>
      <Card mt="xl">
        <Card.Body display="flex" flexWrap="wrap" mb="-md">
          {Object.entries(colors).map(([key, depth]) => {
            const withBorder = name === 'light' && key === '900'

            return (
              <Box key={`${name}.${key}`} mb="md" mr="lg">
                <Box
                  backgroundColor={`${name}.${key}`}
                  borderColor={withBorder && 'light.800'}
                  borderRadius="lg"
                  borderStyle={withBorder && 'solid'}
                  borderWidth={withBorder && '1px'}
                  h={40}
                  w={90}
                />
                <Box pt="sm" px="sm" textAlign="center">
                  <Box color="dark.900" fontWeight="medium">
                    {key}
                  </Box>
                  <Box color="nude.800" fontSize="meta1" mt={3}>
                    {depth}
                  </Box>
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
