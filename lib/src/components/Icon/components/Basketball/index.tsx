import React from 'react'

import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const BasketballIcon: React.FC<IconProps> = props => {
  return <Icon alt="Basketball" content={content} {...props} />
}
