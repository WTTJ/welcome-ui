import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const WatchLaterIcon: React.FC<IconProps> = props => {
  return <Icon alt="WatchLater" content={content} {...props} />
}
