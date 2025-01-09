import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const UserIcon: React.FC<IconProps> = props => {
  return <Icon alt="User" content={content} {...props} />
}
