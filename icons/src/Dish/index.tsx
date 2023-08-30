import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const DishIcon: React.FC<IconProps> = props => {
  return <Icon alt="Dish" content={content} {...props} />
}

export const DishIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
