import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const Heading3Icon: React.FC<IconProps> = props => {
  return <Icon alt="Heading3" content={content} {...props} />
}

export const Heading3IconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
