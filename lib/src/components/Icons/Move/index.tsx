import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const MoveIcon: React.FC<IconProps> = props => {
  return <Icon alt="Move" content={content} {...props} />
}
