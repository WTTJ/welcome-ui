import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const PositiveOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="PositiveOutline" content={content} {...props} />
}
