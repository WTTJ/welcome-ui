import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ArrowRightIcon: React.FC<IconProps> = props => {
  return <Icon alt="ArrowRight" content={content} {...props} />
}
