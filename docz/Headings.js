/* eslint-disable react/no-multi-comp */
import React from 'react'
import styled from '@xstyled/styled-components'

import { Text } from '../packages/Text'

export const H1 = props => <H1Styled variant="h1" {...props} />
export const H2 = props => <H2Styled variant="h3" {...props} />
export const H3 = props => <H3Styled variant="h4" {...props} />

const H1Styled = styled(Text)`
  margin: 0;

  + * {
    margin-bottom: 40;
  }
`

const H2Styled = styled(Text)`
  margin: 50 0 30;

  + p {
    margin: -10 0 20;
  }
`

const H3Styled = styled(Text)`
  margin: xl 0 md;
`
