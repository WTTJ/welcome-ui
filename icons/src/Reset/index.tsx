import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ResetIcon: React.FC<IconProps> = props => {
  return <Icon alt="Reset" content={content} {...props} />
}

export const ResetIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
