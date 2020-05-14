import React from 'react'

import { GithubIcon } from '../../../../icons/Github'
import { ExternalLinkIcon } from '../../../../icons/ExternalLink'
import { Box } from '../../../../packages/Box'

import * as S from './Github.styled'

export const Github = () => (
  <S.Github href="https://github.com/WTTJ/welcome-ui" rel="noreferrer noopener" target="_blank">
    <Box alignItems="center" display="flex">
      <GithubIcon mr="sm" size="lg" />
      <span>Show repository</span>
    </Box>
    <ExternalLinkIcon />
  </S.Github>
)
