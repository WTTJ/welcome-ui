import React from 'react'

import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const NegativeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Negative" content={content} {...props} />
}
