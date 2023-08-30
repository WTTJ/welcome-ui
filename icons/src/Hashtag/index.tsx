import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const HashtagIcon: React.FC<IconProps> = props => {
  return <Icon alt="Hashtag" content={content} {...props} />
}

export const HashtagIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
