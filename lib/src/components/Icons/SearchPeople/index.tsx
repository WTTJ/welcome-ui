import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const SearchPeopleIcon: React.FC<IconProps> = props => {
  return <Icon alt="SearchPeople" content={content} {...props} />
}
