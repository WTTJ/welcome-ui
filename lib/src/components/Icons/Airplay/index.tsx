import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const AirplayIcon: React.FC<IconProps> = props => {
  return <Icon alt="Airplay" content={content} {...props} />
}
