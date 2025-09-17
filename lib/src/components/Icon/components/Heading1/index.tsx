import React from 'react'

import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const Heading1Icon: React.FC<IconProps> = props => {
  return <Icon alt="Heading1" content={content} {...props} />
}
