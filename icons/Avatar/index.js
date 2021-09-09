import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function AvatarIcon(props) {
  return <Icon alt="Avatar" content={content} {...props} />
}
