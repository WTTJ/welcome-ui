/* eslint-disable react/prop-types */
import React from 'react'

import { Box } from '../src/index'

export const Colors = ({ colors, withBorder }) => (
  <Box display="flex" flexWrap="wrap">
    {Object.keys(colors).map(color => (
      <Box key={color} marginBottom="10px" marginRight="10px">
        <Box
          backgroundColor={colors[color]}
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
          <Box fontWeight="medium">{color}</Box>
          <Box color="nude.700" fontSize="meta2" marginTop="3px">
            {colors[color]}
          </Box>
        </Box>
      </Box>
    ))}
  </Box>
)
