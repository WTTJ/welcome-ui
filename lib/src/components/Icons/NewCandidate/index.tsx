import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const NewCandidateIcon: React.FC<IconProps> = props => {
  return <Icon alt="NewCandidate" content={content} {...props} />
}
