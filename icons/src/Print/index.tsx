import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const PrintIcon: React.FC<IconProps> = props => {
  return <Icon alt="Print" content={content} {...props} />
}

export const PrintIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
