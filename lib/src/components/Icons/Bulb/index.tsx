import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const BulbIcon: React.FC<IconProps> = props => {
  return <Icon alt="Bulb" content={content} {...props} />
}
