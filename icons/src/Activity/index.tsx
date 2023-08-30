import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ActivityIcon: React.FC<IconProps> = props => {
  return <Icon alt="Activity" content={content} {...props} />
}

export const ActivityIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
