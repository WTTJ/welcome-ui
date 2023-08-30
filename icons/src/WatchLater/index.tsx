import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const WatchLaterIcon: React.FC<IconProps> = props => {
  return <Icon alt="WatchLater" content={content} {...props} />
}

export const WatchLaterIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
