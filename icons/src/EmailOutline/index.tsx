import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const EmailOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="EmailOutline" content={content} {...props} />
}

export const EmailOutlineIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
