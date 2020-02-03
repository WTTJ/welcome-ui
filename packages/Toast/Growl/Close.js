import React from 'react'
import styled from '@xstyled/styled-components'
import { ClearButton } from '@welcome-ui/clear-button'

const CloseWrapper = styled.div`
  float: right;
  margin-left: sm;
`

export function Close(props) {
  return (
    <CloseWrapper>
      <ClearButton size="sm" {...props} />
    </CloseWrapper>
  )
}
