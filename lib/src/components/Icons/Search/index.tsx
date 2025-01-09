import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const SearchIcon: React.FC<IconProps> = props => {
  return <Icon alt="Search" content={content} {...props} />
}
