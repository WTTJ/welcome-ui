import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const BarChartIcon: React.FC<IconProps> = props => {
  return <Icon alt="BarChart" content={content} {...props} />
}

export const BarChartIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
