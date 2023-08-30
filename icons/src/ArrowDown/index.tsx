import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ArrowDownIcon: React.FC<IconProps> = props => {
  return <Icon alt="ArrowDown" content={content} {...props} />
}

export const ArrowDownIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
