import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const SearchIcon: React.FC<IconProps> = props => {
  return <Icon alt="Search" content={content} {...props} />
}
