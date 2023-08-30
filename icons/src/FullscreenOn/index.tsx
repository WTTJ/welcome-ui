import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const FullscreenOnIcon: React.FC<IconProps> = props => {
  return <Icon alt="FullscreenOn" content={content} {...props} />
}

export const FullscreenOnIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
