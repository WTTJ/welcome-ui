import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const EuroCurrencyIcon: React.FC<IconProps> = props => {
  return <Icon alt="EuroCurrency" content={content} {...props} />
}
