import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const RefuseCandidateIcon: React.FC<IconProps> = props => {
  return <Icon alt="RefuseCandidate" content={content} {...props} />
}
