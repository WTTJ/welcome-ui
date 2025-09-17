import React from 'react'

import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const CoffeeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Coffee" content={content} {...props} />
}
