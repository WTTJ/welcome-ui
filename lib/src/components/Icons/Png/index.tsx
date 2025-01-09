import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const PngIcon: React.FC<IconProps> = props => {
  return <Icon alt="Png" content={content} {...props} />
}
