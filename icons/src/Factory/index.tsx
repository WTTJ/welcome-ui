import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const FactoryIcon: React.FC<IconProps> = props => {
  return <Icon alt="Factory" content={content} {...props} />
}

export const FactoryIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
