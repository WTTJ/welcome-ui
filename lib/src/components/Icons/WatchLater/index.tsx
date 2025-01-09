import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const WatchLaterIcon: React.FC<IconProps> = props => {
  return <Icon alt="WatchLater" content={content} {...props} />
}
