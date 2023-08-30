import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const SquareAlertIcon: React.FC<IconProps> = props => {
  return <Icon alt="SquareAlert" content={content} {...props} />
}

export const SquareAlertIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
