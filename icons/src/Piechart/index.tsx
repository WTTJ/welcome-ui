import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const PiechartIcon: React.FC<IconProps> = props => {
  return <Icon alt="Piechart" content={content} {...props} />
}

export const PiechartIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
