import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const LineChartIcon: React.FC<IconProps> = props => {
  return <Icon alt="LineChart" content={content} {...props} />
}
