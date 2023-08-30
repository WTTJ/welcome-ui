import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const PizzaIcon: React.FC<IconProps> = props => {
  return <Icon alt="Pizza" content={content} {...props} />
}

export const PizzaIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
