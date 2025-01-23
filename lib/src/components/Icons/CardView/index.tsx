import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CardViewIcon: React.FC<IconProps> = props => {
  return <Icon alt="CardView" content={content} {...props} />
}
