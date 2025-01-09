import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const HeartOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="HeartOutline" content={content} {...props} />
}
