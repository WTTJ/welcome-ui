import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const LeftIcon: React.FC<IconProps> = props => {
  return <Icon alt="Left" content={content} {...props} />
}
