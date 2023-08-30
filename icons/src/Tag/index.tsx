import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TagIcon: React.FC<IconProps> = props => {
  return <Icon alt="Tag" content={content} {...props} />
}

export const TagIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
