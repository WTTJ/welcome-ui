import React from 'react'

import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const FlagUsIcon: React.FC<IconProps> = props => {
  return <Icon alt="FlagUs" content={content} {...props} />
}
