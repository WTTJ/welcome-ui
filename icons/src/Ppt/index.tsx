import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const PptIcon: React.FC<IconProps> = props => {
  return <Icon alt="Ppt" content={content} {...props} />
}

export const PptIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
