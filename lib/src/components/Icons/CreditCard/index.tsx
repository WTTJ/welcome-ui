import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CreditCardIcon: React.FC<IconProps> = props => {
  return <Icon alt="CreditCard" content={content} {...props} />
}
