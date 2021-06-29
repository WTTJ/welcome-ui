import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function CoffeeIcon(props) {
  return <Icon alt="Coffee" content={content} {...props} />
}
