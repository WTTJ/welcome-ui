import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const AvatarIcon: React.FC<IconProps> = props => {
  return <Icon alt="Avatar" content={content} {...props} />
}
