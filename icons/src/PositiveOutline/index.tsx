import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const PositiveOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="PositiveOutline" content={content} {...props} />
}

export const PositiveOutlineIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
