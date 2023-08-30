import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const AirplayIcon: React.FC<IconProps> = props => {
  return <Icon alt="Airplay" content={content} {...props} />
}

export const AirplayIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
