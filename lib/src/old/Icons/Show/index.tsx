import React from 'react'

import type { IconProps } from '../../Icon'
import { Icon } from '../../Icon'

import content from './content.json'

export const ShowIcon: React.FC<IconProps> = props => {
  return <Icon alt="Show" content={content} data-wui-icon {...props} />
}
