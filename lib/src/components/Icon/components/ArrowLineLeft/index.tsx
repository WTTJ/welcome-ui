import React from 'react'

import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const ArrowLineLeftIcon: React.FC<IconProps> = props => {
  return <Icon alt="ArrowLineLeft" content={content} {...props} />
}
