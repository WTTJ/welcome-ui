import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const UnderlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="Underline" content={content} {...props} />
}

export const UnderlineIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
