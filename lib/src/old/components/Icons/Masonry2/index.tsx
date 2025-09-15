import React from 'react'

import type { IconProps } from '../../Icon'
import { Icon } from '../../Icon'

import content from './content.json'

export const Masonry2Icon: React.FC<IconProps> = props => {
  return <Icon alt="Masonry2" content={content} data-wui-icon {...props} />
}
