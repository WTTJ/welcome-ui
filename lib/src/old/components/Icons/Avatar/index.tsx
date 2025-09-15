import React from 'react'

import type { IconProps } from '../../Icon'
import { Icon } from '../../Icon'

import content from './content.json'

export const AvatarIcon: React.FC<IconProps> = props => {
  return <Icon alt="Avatar" content={content} data-wui-icon {...props} />
}
