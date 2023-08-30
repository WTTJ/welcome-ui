import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const LockRoundedIcon: React.FC<IconProps> = props => {
  return <Icon alt="LockRounded" content={content} {...props} />
}

export const LockRoundedIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
