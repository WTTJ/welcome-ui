import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const MasonryIcon: React.FC<IconProps> = props => {
  return <Icon alt="Masonry" content={content} {...props} />
}
