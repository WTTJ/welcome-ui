import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const InProgressCandidateIcon: React.FC<IconProps> = props => {
  return <Icon alt="InProgressCandidate" content={content} {...props} />
}
