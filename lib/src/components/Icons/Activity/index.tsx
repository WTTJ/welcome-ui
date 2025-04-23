import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ActivityIcon: React.FC<IconProps> = props => {
  return <Icon alt="Activity" content={content} {...props} />
}
