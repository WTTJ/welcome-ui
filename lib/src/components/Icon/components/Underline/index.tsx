import React from 'react'

import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const UnderlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="Underline" content={content} {...props} />
}
