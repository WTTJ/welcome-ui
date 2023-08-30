import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const BulbIcon: React.FC<IconProps> = props => {
  return <Icon alt="Bulb" content={content} {...props} />
}

export const BulbIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
