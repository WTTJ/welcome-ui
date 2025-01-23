import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CastConnectedIcon: React.FC<IconProps> = props => {
  return <Icon alt="CastConnected" content={content} {...props} />
}
