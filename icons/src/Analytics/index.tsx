import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const AnalyticsIcon: React.FC<IconProps> = props => {
  return <Icon alt="Analytics" content={content} {...props} />
}

export const AnalyticsIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
