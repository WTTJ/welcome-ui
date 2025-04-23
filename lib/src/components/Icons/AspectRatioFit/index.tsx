import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const AspectRatioFitIcon: React.FC<IconProps> = props => {
  return <Icon alt="AspectRatioFit" content={content} {...props} />
}
