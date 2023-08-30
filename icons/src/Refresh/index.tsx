import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const RefreshIcon: React.FC<IconProps> = props => {
  return <Icon alt="Refresh" content={content} {...props} />
}

export const RefreshIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
