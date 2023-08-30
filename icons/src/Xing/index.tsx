import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const XingIcon: React.FC<IconProps> = props => {
  return <Icon alt="Xing" content={content} {...props} />
}

export const XingIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
