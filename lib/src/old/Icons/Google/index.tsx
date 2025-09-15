import React from 'react'

import type { IconProps } from '../../Icon'
import { Icon } from '../../Icon'

import content from './content.json'

export const GoogleIcon: React.FC<IconProps> = props => {
  return <Icon alt="Google" content={content} data-wui-icon {...props} />
}
