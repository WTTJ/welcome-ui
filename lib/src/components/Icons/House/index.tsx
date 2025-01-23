import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const HouseIcon: React.FC<IconProps> = props => {
  return <Icon alt="House" content={content} {...props} />
}
