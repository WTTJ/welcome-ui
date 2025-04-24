import React from 'react'

import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const PngIcon: React.FC<IconProps> = props => {
  return <Icon alt="Png" content={content} {...props} />
}
