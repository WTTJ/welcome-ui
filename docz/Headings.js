/* eslint-disable react/no-multi-comp */
import React from 'react'
import styled from '@xstyled/styled-components'

import { Text } from '../packages/Text'

export const H1 = props => <H1Styled variant="h1" {...props} />
export const H2 = props => <H2Styled as="h2" variant="h3" {...props} />
export const H3 = props => <H3Styled as="h3" variant="h4" {...props} />

const H1Styled = styled(Text)`
  color: dark.200;
  margin: 0;
  font-weight: bold;

  + * {
    margin-bottom: 40;
  }
`

const H2Styled = styled(Text)`
  color: dark.200;
  margin: 50 0 30;
  font-weight: bold;

  + p {
    margin: -10 0 20;
  }
`

const H3Styled = styled(Text)`
  font-weight: medium;
  margin: xl 0 md;
  color: dark.200;
`
