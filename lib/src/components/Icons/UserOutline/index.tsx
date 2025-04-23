import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const UserOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="UserOutline" content={content} {...props} />
}
