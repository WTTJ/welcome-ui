import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TiktokIcon: React.FC<IconProps> = props => {
  return <Icon alt="Tiktok" content={content} {...props} />
}

export const TiktokIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
