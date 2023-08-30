import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ActionsIcon: React.FC<IconProps> = props => {
  return <Icon alt="Actions" content={content} {...props} />
}

export const ActionsIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
