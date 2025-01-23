import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const WriteIcon: React.FC<IconProps> = props => {
  return <Icon alt="Write" content={content} {...props} />
}
