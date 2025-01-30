import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const AvatarCostumeIcon: React.FC<IconProps> = props => {
  return <Icon alt="AvatarCostume" content={content} {...props} />
}
