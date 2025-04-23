import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const AirplayIcon: React.FC<IconProps> = props => {
  return <Icon alt="Airplay" content={content} {...props} />
}
