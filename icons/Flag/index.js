import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function FlagIcon(props) {
  return <Icon alt="Flag" content={content} {...props} />
}
