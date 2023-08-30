import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const HouseIcon: React.FC<IconProps> = props => {
  return <Icon alt="House" content={content} {...props} />
}

export const HouseIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
