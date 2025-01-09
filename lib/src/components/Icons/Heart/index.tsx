import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const HeartIcon: React.FC<IconProps> = props => {
  return <Icon alt="Heart" content={content} {...props} />
}
