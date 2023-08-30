import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const FlagPointedIcon: React.FC<IconProps> = props => {
  return <Icon alt="FlagPointed" content={content} {...props} />
}

export const FlagPointedIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
