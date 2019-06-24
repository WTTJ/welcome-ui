/* eslint-disable react/prop-types */
/* eslint-disable react/no-multi-comp */
import React from 'react'
import styled, { css } from '@xstyled/styled-components'
import { Playground as DoczPlayground } from 'docz'

import { Box } from './src/components/Box'
import { Icon } from './src/components/Icon'

export const Playground = styled(DoczPlayground)`
  margin-bottom: -sm;

  form > * {
    margin-bottom: md;
  }

  > * {
    margin-right: sm;
    margin-bottom: sm;
  }

  ${props =>
    props.flex &&
    css`
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    `}
`

export const IconsList = icons => (
  <Box display="flex" flexWrap="wrap">
    {icons.map(icon => (
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        key={icon}
        margin="10px"
        width="120px"
      >
        <Box
          background="#FBF9F7"
          color="#134B45"
          display="flex"
          justifyContent="center"
          padding="15px 10px"
          width={1}
        >
          <Icon name={icon} size="lg" />
        </Box>
        <Box fontSize="meta1" fontWeight="medium" padding="5px 0" textAlign="center" width={1}>
          {icon}
        </Box>
      </Box>
    ))}
  </Box>
)

export const Colors = ({ colors, withBorder }) => (
  <Box display="flex" flexWrap="wrap">
    {Object.keys(colors).map(color => (
      <Box key={color} marginBottom="10px" marginRight="10px">
        <Box
          backgroundColor={colors[color]}
          borderColor={withBorder && 'nude.300'}
          borderStyle={withBorder && 'solid'}
          borderWidth={withBorder && '1px'}
          height="40px"
          width="90px"
        />
        <Box
          borderColor="nude.300"
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
