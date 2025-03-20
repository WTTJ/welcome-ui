import React from 'react'

import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const Share1Icon: React.FC<IconProps> = props => {
  return <Icon alt="Share1" content={content} {...props} />
}
