import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const SlackIcon: React.FC<IconProps> = props => {
  return <Icon alt="Slack" content={content} {...props} />
}

export const SlackIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
