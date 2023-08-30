import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const DownIcon: React.FC<IconProps> = props => {
  return <Icon alt="Down" content={content} {...props} />
}

export const DownIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
