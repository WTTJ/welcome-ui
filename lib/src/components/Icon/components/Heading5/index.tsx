import React from 'react'

import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const Heading5Icon: React.FC<IconProps> = props => {
  return <Icon alt="Heading5" content={content} {...props} />
}
