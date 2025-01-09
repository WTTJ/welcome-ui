import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const Masonry2Icon: React.FC<IconProps> = props => {
  return <Icon alt="Masonry2" content={content} {...props} />
}
