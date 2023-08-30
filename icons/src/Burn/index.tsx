import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const BurnIcon: React.FC<IconProps> = props => {
  return <Icon alt="Burn" content={content} {...props} />
}

export const BurnIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
