import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const EarthIcon: React.FC<IconProps> = props => {
  return <Icon alt="Earth" content={content} {...props} />
}

export const EarthIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
