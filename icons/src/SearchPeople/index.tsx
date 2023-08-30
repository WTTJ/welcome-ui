import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const SearchPeopleIcon: React.FC<IconProps> = props => {
  return <Icon alt="SearchPeople" content={content} {...props} />
}

export const SearchPeopleIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
