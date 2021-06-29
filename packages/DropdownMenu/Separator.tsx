import React from 'react'
import { MenuSeparator, MenuSeparatorProps } from 'reakit/Menu'
import { WuiSystemProps } from '@welcome-ui/system'

import * as S from './Separator.styled'

export type SeparatorProps = MenuSeparatorProps & WuiSystemProps

export const Separator: React.FC<SeparatorProps> = props => {
  return <MenuSeparator as={S.Separator} {...props} />
}
