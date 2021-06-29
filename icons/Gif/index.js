import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function GifIcon(props) {
  return <Icon alt="Gif" content={content} {...props} />
}
