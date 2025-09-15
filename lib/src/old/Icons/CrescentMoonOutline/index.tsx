import React from 'react'

import type { IconProps } from '../../Icon'
import { Icon } from '../../Icon'

import content from './content.json'

export const CrescentMoonOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="CrescentMoonOutline" content={content} data-wui-icon {...props} />
}
