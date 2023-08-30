import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const DocIcon: React.FC<IconProps> = props => {
  return <Icon alt="Doc" content={content} {...props} />
}

export const DocIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
