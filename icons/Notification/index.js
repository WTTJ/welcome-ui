import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function NotificationIcon(props) {
  return <Icon alt="Notification" content={content} {...props} />
}
