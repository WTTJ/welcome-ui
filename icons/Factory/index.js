import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function FactoryIcon(props) {
  return <Icon alt="Factory" content={content} {...props} />
}
