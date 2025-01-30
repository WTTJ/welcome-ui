import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const GearIcon: React.FC<IconProps> = props => {
  return <Icon alt="Gear" content={content} {...props} />
}
