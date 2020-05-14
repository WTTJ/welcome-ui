/* eslint-disable react/no-multi-comp */
import React from 'react'
import styled from '@xstyled/styled-components'
import { Text } from '@welcome-ui/text'

export const H1 = props => <H1Styled variant="h1" {...props} />
export const H2 = props => <H2Styled variant="h3" {...props} />
export const H3 = props => <H3Styled variant="h4" {...props} />

const H1Styled = styled(Text)`
  color: dark.200;
  margin: 0;
  font-weight: bold;
`

const H2Styled = styled(Text)`
  color: dark.200;
  margin: 50 0 30;
  font-weight: bold;
`

const H3Styled = styled(Text)`
  font-weight: medium;
  margin: xl 0 md;
  color: dark.200;
`
