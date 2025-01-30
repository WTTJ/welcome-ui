import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const MoneyIcon: React.FC<IconProps> = props => {
  return <Icon alt="Money" content={content} {...props} />
}
