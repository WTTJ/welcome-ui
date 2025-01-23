import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const PngIcon: React.FC<IconProps> = props => {
  return <Icon alt="Png" content={content} {...props} />
}
