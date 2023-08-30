import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const LinkedinIcon: React.FC<IconProps> = props => {
  return <Icon alt="Linkedin" content={content} {...props} />
}

export const LinkedinIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
