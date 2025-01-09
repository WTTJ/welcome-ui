import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const UserOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="UserOutline" content={content} {...props} />
}
