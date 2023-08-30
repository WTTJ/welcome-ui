import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const LocationIcon: React.FC<IconProps> = props => {
  return <Icon alt="Location" content={content} {...props} />
}

export const LocationIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
