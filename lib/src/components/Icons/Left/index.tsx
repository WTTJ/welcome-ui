import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const LeftIcon: React.FC<IconProps> = props => {
  return <Icon alt="Left" content={content} {...props} />
}
