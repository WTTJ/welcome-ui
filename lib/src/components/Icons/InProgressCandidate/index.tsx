import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const InProgressCandidateIcon: React.FC<IconProps> = props => {
  return <Icon alt="InProgressCandidate" content={content} {...props} />
}
