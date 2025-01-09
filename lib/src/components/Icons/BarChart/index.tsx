import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const BarChartIcon: React.FC<IconProps> = props => {
  return <Icon alt="BarChart" content={content} {...props} />
}
