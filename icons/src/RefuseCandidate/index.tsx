import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const RefuseCandidateIcon: React.FC<IconProps> = props => {
  return <Icon alt="RefuseCandidate" content={content} {...props} />
}

export const RefuseCandidateIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
