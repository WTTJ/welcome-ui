import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const LineChartIcon: React.FC<IconProps> = props => {
  return <Icon alt="LineChart" content={content} {...props} />
}
