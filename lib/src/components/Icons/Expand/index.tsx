import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ExpandIcon: React.FC<IconProps> = props => {
  return <Icon alt="Expand" content={content} {...props} />
}
