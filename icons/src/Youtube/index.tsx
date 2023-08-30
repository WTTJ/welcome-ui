import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const YoutubeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Youtube" content={content} {...props} />
}

export const YoutubeIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
