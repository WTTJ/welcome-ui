import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const RefreshIcon: React.FC<IconProps> = props => {
  return <Icon alt="Refresh" content={content} {...props} />
}
