import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const AvatarBottomIcon: React.FC<IconProps> = props => {
  return <Icon alt="AvatarBottom" content={content} {...props} />
}
