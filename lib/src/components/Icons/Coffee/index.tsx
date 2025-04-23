import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CoffeeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Coffee" content={content} {...props} />
}
