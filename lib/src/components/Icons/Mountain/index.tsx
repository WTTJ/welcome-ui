import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const MountainIcon: React.FC<IconProps> = props => {
  return <Icon alt="Mountain" content={content} {...props} />
}
