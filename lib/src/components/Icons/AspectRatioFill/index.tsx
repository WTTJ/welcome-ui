import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const AspectRatioFillIcon: React.FC<IconProps> = props => {
  return <Icon alt="AspectRatioFill" content={content} {...props} />
}
