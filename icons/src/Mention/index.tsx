import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const MentionIcon: React.FC<IconProps> = props => {
  return <Icon alt="Mention" content={content} {...props} />
}

export const MentionIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
