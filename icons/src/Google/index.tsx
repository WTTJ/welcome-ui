import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const GoogleIcon: React.FC<IconProps> = props => {
  return <Icon alt="Google" content={content} {...props} />
}

export const GoogleIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
