import React from 'react'

import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const AvatarBottomIcon: React.FC<IconProps> = props => {
  return <Icon alt="AvatarBottom" content={content} {...props} />
}
