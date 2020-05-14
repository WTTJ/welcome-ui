/* eslint-disable react/prop-types */
import React from 'react'
import { withTheme } from '@xstyled/styled-components'

import { Box } from '../packages/Box/index'

const Wrapper = ({ name, theme, withBorder }) => {
  const colors = theme.colors[name]

  return (
    <Box display="flex" flexWrap="wrap">
      {Object.entries(colors).map(([key, depth]) => (
        <Box key={key} mb="md" mr="lg">
          <Box
            backgroundColor={`${name}.${key}`}
            borderColor={withBorder && 'nude.300'}
            borderRadius={40}
            borderStyle={withBorder && 'solid'}
            borderWidth={withBorder && '1px'}
            height={40}
            width={90}
          />
          <Box padding="xs" textAlign="center">
            <Box color="dark.900" fontWeight="medium" mt="xs">
              {key}
            </Box>
            <Box color="nude.700" fontSize="meta2" mt={3}>
              {depth}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export const Colors = withTheme(Wrapper)
