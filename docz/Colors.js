/* eslint-disable react/prop-types */
import React from 'react'
import { withTheme } from '@xstyled/styled-components'

import { Box } from '../src/index'

const Wrapper = ({ name, theme, withBorder }) => {
  const colors = theme.colors[name]

  return (
    <Box display="flex" flexWrap="wrap">
      {Object.entries(colors).map(([key, depth]) => (
        <Box key={key} marginBottom="10px" marginRight="10px">
          <Box
            backgroundColor={`${name}.${key}`}
            borderColor={withBorder && 'nude.100'}
            borderStyle={withBorder && 'solid'}
            borderWidth={withBorder && '1px'}
            height="40px"
            width="90px"
          />
          <Box
            borderColor="nude.100"
            borderStyle="solid"
            borderWidth="0 1px 1px 1px"
            padding="5px"
            textAlign="center"
          >
            <Box fontWeight="medium">{key}</Box>
            <Box color="nude.700" fontSize="meta2" marginTop="3px">
              {depth}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export const Colors = withTheme(Wrapper)
