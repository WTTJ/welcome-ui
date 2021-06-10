import React from 'react'
import styled, { SystemProps } from '@xstyled/styled-components'
import { shouldForwardProp } from '@welcome-ui/system'

export const Box: React.FC<SystemProps> = styled.box.withConfig({ shouldForwardProp })``
