import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CastUnavailableIcon: React.FC<IconProps> = props => {
  return <Icon alt="CastUnavailable" content={content} {...props} />
}

export const CastUnavailableIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
