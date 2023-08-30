import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const FlagIcon: React.FC<IconProps> = props => {
  return <Icon alt="Flag" content={content} {...props} />
}

export const FlagIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
