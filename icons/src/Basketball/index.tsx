import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const BasketballIcon: React.FC<IconProps> = props => {
  return <Icon alt="Basketball" content={content} {...props} />
}

export const BasketballIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
