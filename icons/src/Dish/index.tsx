import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const DishIcon: React.FC<IconProps> = props => {
  return <Icon alt="Dish" content={content} {...props} />
}
