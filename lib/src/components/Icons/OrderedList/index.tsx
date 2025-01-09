import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const OrderedListIcon: React.FC<IconProps> = props => {
  return <Icon alt="OrderedList" content={content} {...props} />
}
