import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const Heading1Icon: React.FC<IconProps> = props => {
  return <Icon alt="Heading1" content={content} {...props} />
}

export const Heading1IconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
