import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CaddyIcon: React.FC<IconProps> = props => {
  return <Icon alt="Caddy" content={content} {...props} />
}

export const CaddyIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
