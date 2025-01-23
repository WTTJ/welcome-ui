import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const NegativeOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="NegativeOutline" content={content} {...props} />
}
