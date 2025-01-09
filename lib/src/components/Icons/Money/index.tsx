import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const MoneyIcon: React.FC<IconProps> = props => {
  return <Icon alt="Money" content={content} {...props} />
}
