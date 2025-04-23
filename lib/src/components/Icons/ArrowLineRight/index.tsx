import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ArrowLineRightIcon: React.FC<IconProps> = props => {
  return <Icon alt="ArrowLineRight" content={content} {...props} />
}
