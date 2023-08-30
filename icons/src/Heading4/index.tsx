import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const Heading4Icon: React.FC<IconProps> = props => {
  return <Icon alt="Heading4" content={content} {...props} />
}

export const Heading4IconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
