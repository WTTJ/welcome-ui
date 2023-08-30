import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ExternalLinkIcon: React.FC<IconProps> = props => {
  return <Icon alt="ExternalLink" content={content} {...props} />
}

export const ExternalLinkIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
