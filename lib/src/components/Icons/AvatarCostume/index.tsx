import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const AvatarCostumeIcon: React.FC<IconProps> = props => {
  return <Icon alt="AvatarCostume" content={content} {...props} />
}
