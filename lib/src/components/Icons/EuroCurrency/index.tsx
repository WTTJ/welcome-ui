import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const EuroCurrencyIcon: React.FC<IconProps> = props => {
  return <Icon alt="EuroCurrency" content={content} {...props} />
}
