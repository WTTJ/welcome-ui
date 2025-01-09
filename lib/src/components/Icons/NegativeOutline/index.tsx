import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const NegativeOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="NegativeOutline" content={content} {...props} />
}
