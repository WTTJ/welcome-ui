import React from 'react'

import type { IconProps } from '../../Icon'
import { Icon } from '../../Icon'

import content from './content.json'

export const Book2Icon: React.FC<IconProps> = props => {
  return <Icon alt="Book2" content={content} data-wui-icon {...props} />
}
