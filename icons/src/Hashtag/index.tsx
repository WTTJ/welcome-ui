import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const HashtagIcon: React.FC<IconProps> = props => {
  return <Icon alt="Hashtag" content={content} {...props} />
}
