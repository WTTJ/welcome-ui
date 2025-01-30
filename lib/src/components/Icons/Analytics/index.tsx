import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const AnalyticsIcon: React.FC<IconProps> = props => {
  return <Icon alt="Analytics" content={content} {...props} />
}
