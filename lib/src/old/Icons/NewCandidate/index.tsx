import React from 'react'

import type { IconProps } from '../../Icon'
import { Icon } from '../../Icon'

import content from './content.json'

export const NewCandidateIcon: React.FC<IconProps> = props => {
  return <Icon alt="NewCandidate" content={content} data-wui-icon {...props} />
}
