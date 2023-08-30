import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const UnorderedListIcon: React.FC<IconProps> = props => {
  return <Icon alt="UnorderedList" content={content} {...props} />
}

export const UnorderedListIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
