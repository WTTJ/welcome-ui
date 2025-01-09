import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const BuoyIcon: React.FC<IconProps> = props => {
  return <Icon alt="Buoy" content={content} {...props} />
}
