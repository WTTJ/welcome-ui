import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ArrowLineDownIcon: React.FC<IconProps> = props => {
  return <Icon alt="ArrowLineDown" content={content} {...props} />
}
