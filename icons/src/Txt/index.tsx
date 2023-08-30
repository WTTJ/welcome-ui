import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TxtIcon: React.FC<IconProps> = props => {
  return <Icon alt="Txt" content={content} {...props} />
}

export const TxtIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
