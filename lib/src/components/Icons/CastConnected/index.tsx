import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const CastConnectedIcon: React.FC<IconProps> = props => {
  return <Icon alt="CastConnected" content={content} {...props} />
}
