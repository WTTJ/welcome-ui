import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const CreditCardIcon: React.FC<IconProps> = props => {
  return <Icon alt="CreditCard" content={content} {...props} />
}
