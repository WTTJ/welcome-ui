import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const Heading5Icon: React.FC<IconProps> = props => {
  return <Icon alt="Heading5" content={content} {...props} />
}

export const Heading5IconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
