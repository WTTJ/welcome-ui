import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const AspectRatioFillIcon: React.FC<IconProps> = props => {
  return <Icon alt="AspectRatioFill" content={content} {...props} />
}
