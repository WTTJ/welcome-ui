import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const BuoyIcon: React.FC<IconProps> = props => {
  return <Icon alt="Buoy" content={content} {...props} />
}
