import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TrophyIcon: React.FC<IconProps> = props => {
  return <Icon alt="Trophy" content={content} {...props} />
}

export const TrophyIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
