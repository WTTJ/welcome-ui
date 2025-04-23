import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const BarChartIcon: React.FC<IconProps> = props => {
  return <Icon alt="BarChart" content={content} {...props} />
}
