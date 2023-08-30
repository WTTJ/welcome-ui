import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const FacebookIcon: React.FC<IconProps> = props => {
  return <Icon alt="Facebook" content={content} {...props} />
}

export const FacebookIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
