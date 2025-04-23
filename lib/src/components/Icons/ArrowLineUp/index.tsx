import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ArrowLineUpIcon: React.FC<IconProps> = props => {
  return <Icon alt="ArrowLineUp" content={content} {...props} />
}
