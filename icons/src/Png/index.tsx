import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const PngIcon: React.FC<IconProps> = props => {
  return <Icon alt="Png" content={content} {...props} />
}

export const PngIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
