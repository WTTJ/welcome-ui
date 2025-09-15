import React from 'react'

import type { IconProps } from '../../Icon'
import { Icon } from '../../Icon'

import content from './content.json'

export const ControlForwardIcon: React.FC<IconProps> = props => {
  return <Icon alt="ControlForward" content={content} data-wui-icon {...props} />
}
