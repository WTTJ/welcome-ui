import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const PromoteIcon: React.FC<IconProps> = props => {
  return <Icon alt="Promote" content={content} {...props} />
}
