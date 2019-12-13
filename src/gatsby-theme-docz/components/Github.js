import React from 'react'

import { Icon } from '../../../../packages/Icon'
import { Box } from '../../../../packages/Box'

import * as S from './Github.styled'

export const Github = () => (
  <S.Github href="https://github.com/WTTJ/welcome-ui" rel="noreferrer noopener" target="_blank">
    <Box alignItems="center" display="flex">
      <Icon mr="sm" name="github" size="lg" />
      <span>Show repository</span>
    </Box>
    <Icon name="external_link" />
  </S.Github>
)
