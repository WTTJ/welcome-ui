import React from 'react'

import type { IconProps } from '../../Icon'
import { Icon } from '../../Icon'

import content from './content.json'

export const SvgIcon: React.FC<IconProps> = props => {
  return <Icon alt="Svg" content={content} data-wui-icon {...props} />
}
