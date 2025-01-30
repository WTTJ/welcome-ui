import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const InProgressCandidateIcon: React.FC<IconProps> = props => {
  return <Icon alt="InProgressCandidate" content={content} {...props} />
}
