import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const PromoteIcon: React.FC<IconProps> = props => {
  return <Icon alt="Promote" content={content} {...props} />
}

export const PromoteIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
