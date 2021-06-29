import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function MentionIcon(props) {
  return <Icon alt="Mention" content={content} {...props} />
}
