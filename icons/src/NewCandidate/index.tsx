import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const NewCandidateIcon: React.FC<IconProps> = props => {
  return <Icon alt="NewCandidate" content={content} {...props} />
}
