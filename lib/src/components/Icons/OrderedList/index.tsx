import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const OrderedListIcon: React.FC<IconProps> = props => {
  return <Icon alt="OrderedList" content={content} {...props} />
}
