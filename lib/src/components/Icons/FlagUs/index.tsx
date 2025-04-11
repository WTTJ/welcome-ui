import React from 'react'

import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const FlagUsIcon: React.FC<IconProps> = props => {
  return <Icon alt="FlagUs" content={content} {...props} />
}
