import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const DetailsIcon: React.FC<IconProps> = props => {
  return <Icon alt="Details" content={content} {...props} />
}

export const DetailsIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
