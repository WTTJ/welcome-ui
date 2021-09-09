import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function PodcastIcon(props) {
  return <Icon alt="Podcast" content={content} {...props} />
}
