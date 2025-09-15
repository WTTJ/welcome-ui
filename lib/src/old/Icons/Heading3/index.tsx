import React from 'react'

import type { IconProps } from '../../Icon'
import { Icon } from '../../Icon'

import content from './content.json'

export const Heading3Icon: React.FC<IconProps> = props => {
  return <Icon alt="Heading3" content={content} data-wui-icon {...props} />
}
