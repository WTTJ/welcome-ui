import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CandidateStatusIcon: React.FC<IconProps> = props => {
  return <Icon alt="CandidateStatus" content={content} {...props} />
}
