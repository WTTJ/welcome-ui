import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const UserIcon: React.FC<IconProps> = props => {
  return <Icon alt="User" content={content} {...props} />
}
