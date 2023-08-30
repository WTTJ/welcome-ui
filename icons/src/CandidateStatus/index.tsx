import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CandidateStatusIcon: React.FC<IconProps> = props => {
  return <Icon alt="CandidateStatus" content={content} {...props} />
}

export const CandidateStatusIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
