import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CandidateStatusIcon: React.FC<IconProps> = props => {
  return <Icon alt="CandidateStatus" content={content} {...props} />
}
