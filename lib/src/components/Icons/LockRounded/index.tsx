import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const LockRoundedIcon: React.FC<IconProps> = props => {
  return <Icon alt="LockRounded" content={content} {...props} />
}
