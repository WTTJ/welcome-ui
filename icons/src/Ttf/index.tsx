import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TtfIcon: React.FC<IconProps> = props => {
  return <Icon alt="Ttf" content={content} {...props} />
}

export const TtfIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
