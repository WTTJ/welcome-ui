import React from 'react'

import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const LogOutIcon: React.FC<IconProps> = props => {
  return <Icon alt="LogOut" content={content} {...props} />
}
