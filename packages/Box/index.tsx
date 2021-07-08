import React from 'react'
import styled from '@xstyled/styled-components'
import { shouldForwardProp } from '@welcome-ui/system'
import { WuiProps } from '@welcome-ui/system'

export const Box: React.FC<WuiProps> = styled.box.withConfig({ shouldForwardProp })``
