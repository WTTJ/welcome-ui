import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const InstagramIcon: React.FC<IconProps> = props => {
  return <Icon alt="Instagram" content={content} {...props} />
}

export const InstagramIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
