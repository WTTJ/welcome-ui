import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const SearchPeopleIcon: React.FC<IconProps> = props => {
  return <Icon alt="SearchPeople" content={content} {...props} />
}
