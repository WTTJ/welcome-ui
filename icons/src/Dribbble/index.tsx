import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const DribbbleIcon: React.FC<IconProps> = props => {
  return <Icon alt="Dribbble" content={content} {...props} />
}

export const DribbbleIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
