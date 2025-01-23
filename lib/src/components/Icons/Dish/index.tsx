import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const DishIcon: React.FC<IconProps> = props => {
  return <Icon alt="Dish" content={content} {...props} />
}
