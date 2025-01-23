import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ArrowDownIcon: React.FC<IconProps> = props => {
  return <Icon alt="ArrowDown" content={content} {...props} />
}
