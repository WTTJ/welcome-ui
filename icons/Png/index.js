import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function PngIcon(props) {
  return <Icon alt="Png" content={content} {...props} />
}
