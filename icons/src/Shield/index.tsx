import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ShieldIcon: React.FC<IconProps> = props => {
  return <Icon alt="Shield" content={content} {...props} />
}

export const ShieldIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
