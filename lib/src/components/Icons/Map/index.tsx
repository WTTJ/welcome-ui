import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const MapIcon: React.FC<IconProps> = props => {
  return <Icon alt="Map" content={content} {...props} />
}
