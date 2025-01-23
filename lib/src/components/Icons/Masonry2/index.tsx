import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const Masonry2Icon: React.FC<IconProps> = props => {
  return <Icon alt="Masonry2" content={content} {...props} />
}
