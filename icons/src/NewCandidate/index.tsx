import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const NewCandidateIcon: React.FC<IconProps> = props => {
  return <Icon alt="NewCandidate" content={content} {...props} />
}

export const NewCandidateIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
