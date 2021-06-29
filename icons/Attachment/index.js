import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function AttachmentIcon(props) {
  return <Icon alt="Attachment" content={content} {...props} />
}
