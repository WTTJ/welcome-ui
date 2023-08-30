import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const FlagEnIcon: React.FC<IconProps> = props => {
  return <Icon alt="FlagEn" content={content} {...props} />
}

export const FlagEnIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
