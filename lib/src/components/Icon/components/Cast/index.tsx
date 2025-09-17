import React from 'react'

import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const CastIcon: React.FC<IconProps> = props => {
  return <Icon alt="Cast" content={content} {...props} />
}
