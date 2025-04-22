import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const BasketballIcon: React.FC<IconProps> = props => {
  return <Icon alt="Basketball" content={content} {...props} />
}
