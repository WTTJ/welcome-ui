import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CompassIcon: React.FC<IconProps> = props => {
  return <Icon alt="Compass" content={content} {...props} />
}

export const CompassIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
