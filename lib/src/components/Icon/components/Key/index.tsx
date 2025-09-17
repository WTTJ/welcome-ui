import React from 'react'

import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const KeyIcon: React.FC<IconProps> = props => {
  return <Icon alt="Key" content={content} {...props} />
}
