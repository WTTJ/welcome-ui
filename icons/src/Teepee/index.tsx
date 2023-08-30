import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TeepeeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Teepee" content={content} {...props} />
}

export const TeepeeIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
