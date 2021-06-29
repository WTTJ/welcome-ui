import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function DishIcon(props) {
  return <Icon alt="Dish" content={content} {...props} />
}
