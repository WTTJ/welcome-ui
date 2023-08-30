import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const NegativeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Negative" content={content} {...props} />
}

export const NegativeIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
