import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const PaperplaneIcon: React.FC<IconProps> = props => {
  return <Icon alt="Paperplane" content={content} {...props} />
}

export const PaperplaneIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
