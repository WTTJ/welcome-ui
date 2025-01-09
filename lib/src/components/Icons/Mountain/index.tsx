import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const MountainIcon: React.FC<IconProps> = props => {
  return <Icon alt="Mountain" content={content} {...props} />
}
