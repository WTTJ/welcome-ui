import React from 'react'

import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const ExtendIcon: React.FC<IconProps> = props => {
  return <Icon alt="Extend" content={content} {...props} />
}
