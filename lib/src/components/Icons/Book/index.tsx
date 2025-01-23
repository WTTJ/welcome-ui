import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const BookIcon: React.FC<IconProps> = props => {
  return <Icon alt="Book" content={content} {...props} />
}
