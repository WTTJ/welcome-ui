import React from 'react'

import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const GearIcon: React.FC<IconProps> = props => {
  return <Icon alt="Gear" content={content} {...props} />
}
