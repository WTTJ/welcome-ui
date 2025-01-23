import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const PositiveOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="PositiveOutline" content={content} {...props} />
}
