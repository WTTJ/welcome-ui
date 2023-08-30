import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const SubtitleIcon: React.FC<IconProps> = props => {
  return <Icon alt="Subtitle" content={content} {...props} />
}

export const SubtitleIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
