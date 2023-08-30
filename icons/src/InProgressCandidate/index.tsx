import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const InProgressCandidateIcon: React.FC<IconProps> = props => {
  return <Icon alt="InProgressCandidate" content={content} {...props} />
}

export const InProgressCandidateIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
