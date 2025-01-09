import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const NewCandidateIcon: React.FC<IconProps> = props => {
  return <Icon alt="NewCandidate" content={content} {...props} />
}
