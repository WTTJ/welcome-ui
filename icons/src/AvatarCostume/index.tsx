import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const AvatarCostumeIcon: React.FC<IconProps> = props => {
  return <Icon alt="AvatarCostume" content={content} {...props} />
}
