import React from 'react'

import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const Woff2Icon: React.FC<IconProps> = props => {
  return <Icon alt="Woff2" content={content} {...props} />
}
