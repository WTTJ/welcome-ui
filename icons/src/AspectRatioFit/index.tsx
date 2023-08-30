import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const AspectRatioFitIcon: React.FC<IconProps> = props => {
  return <Icon alt="AspectRatioFit" content={content} {...props} />
}

export const AspectRatioFitIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
