import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const PizzaIcon: React.FC<IconProps> = props => {
  return <Icon alt="Pizza" content={content} {...props} />
}
