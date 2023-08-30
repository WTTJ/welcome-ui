import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const BehanceIcon: React.FC<IconProps> = props => {
  return <Icon alt="Behance" content={content} {...props} />
}

export const BehanceIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
