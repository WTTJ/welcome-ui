import React from 'react'

import type { IconProps } from '../../Icon'
import { Icon } from '../../Icon'

import content from './content.json'

export const Heading5Icon: React.FC<IconProps> = props => {
  return <Icon alt="Heading5" content={content} data-wui-icon {...props} />
}
