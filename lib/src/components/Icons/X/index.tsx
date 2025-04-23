import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const XIcon: React.FC<IconProps> = props => {
  return <Icon alt="X" content={content} {...props} />
}
