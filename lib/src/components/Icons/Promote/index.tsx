import React from 'react'

import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const PromoteIcon: React.FC<IconProps> = props => {
  return <Icon alt="Promote" content={content} {...props} />
}
