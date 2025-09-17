import React from 'react'

import { Icon } from '../../Icon'
import type { IconProps } from '../../Icon.types'

import content from './content.json'

export const AvatarCostumeIcon: React.FC<IconProps> = props => {
  return <Icon alt="AvatarCostume" content={content} {...props} />
}
