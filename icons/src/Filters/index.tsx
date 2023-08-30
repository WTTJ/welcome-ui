import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const FiltersIcon: React.FC<IconProps> = props => {
  return <Icon alt="Filters" content={content} {...props} />
}

export const FiltersIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
