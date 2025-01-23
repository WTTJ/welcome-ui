import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const HeartIcon: React.FC<IconProps> = props => {
  return <Icon alt="Heart" content={content} {...props} />
}
