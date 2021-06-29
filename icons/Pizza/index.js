import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function PizzaIcon(props) {
  return <Icon alt="Pizza" content={content} {...props} />
}
