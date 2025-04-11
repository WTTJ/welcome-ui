import React from 'react'

import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const AnniversaryIcon: React.FC<IconProps> = props => {
  return <Icon alt="Anniversary" content={content} {...props} />
}
