import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const LogOutIcon: React.FC<IconProps> = props => {
  return <Icon alt="LogOut" content={content} {...props} />
}
