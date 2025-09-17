import React from 'react'

import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const Masonry2Icon: React.FC<IconProps> = props => {
  return <Icon alt="Masonry2" content={content} {...props} />
}
