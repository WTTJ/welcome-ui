import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const LeafIcon: React.FC<IconProps> = props => {
  return <Icon alt="Leaf" content={content} {...props} />
}
