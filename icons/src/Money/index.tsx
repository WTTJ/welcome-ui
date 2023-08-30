import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const MoneyIcon: React.FC<IconProps> = props => {
  return <Icon alt="Money" content={content} {...props} />
}

export const MoneyIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
