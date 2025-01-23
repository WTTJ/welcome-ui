import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const HomeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Home" content={content} {...props} />
}
