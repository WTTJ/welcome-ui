import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CreditCardIcon: React.FC<IconProps> = props => {
  return <Icon alt="CreditCard" content={content} {...props} />
}

export const CreditCardIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
