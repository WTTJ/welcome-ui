import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const GearIcon: React.FC<IconProps> = props => {
  return <Icon alt="Gear" content={content} {...props} />
}

export const GearIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
