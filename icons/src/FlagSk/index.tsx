import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const FlagSkIcon: React.FC<IconProps> = props => {
  return <Icon alt="FlagSk" content={content} {...props} />
}

export const FlagSkIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
