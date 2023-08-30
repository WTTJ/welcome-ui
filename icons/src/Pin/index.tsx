import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const PinIcon: React.FC<IconProps> = props => {
  return <Icon alt="Pin" content={content} {...props} />
}

export const PinIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
