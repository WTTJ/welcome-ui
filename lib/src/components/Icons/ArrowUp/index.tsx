import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ArrowUpIcon: React.FC<IconProps> = props => {
  return <Icon alt="ArrowUp" content={content} {...props} />
}
