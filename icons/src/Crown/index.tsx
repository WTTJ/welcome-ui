import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CrownIcon: React.FC<IconProps> = props => {
  return <Icon alt="Crown" content={content} {...props} />
}

export const CrownIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
