import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const AspectRatioFillIcon: React.FC<IconProps> = props => {
  return <Icon alt="AspectRatioFill" content={content} {...props} />
}

export const AspectRatioFillIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
