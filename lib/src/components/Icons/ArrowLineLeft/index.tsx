import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ArrowLineLeftIcon: React.FC<IconProps> = props => {
  return <Icon alt="ArrowLineLeft" content={content} {...props} />
}
