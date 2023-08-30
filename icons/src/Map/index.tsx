import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const MapIcon: React.FC<IconProps> = props => {
  return <Icon alt="Map" content={content} {...props} />
}

export const MapIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
