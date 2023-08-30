import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CoffeeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Coffee" content={content} {...props} />
}

export const CoffeeIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
