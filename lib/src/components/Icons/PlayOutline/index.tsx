import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const PlayOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="PlayOutline" content={content} {...props} />
}
