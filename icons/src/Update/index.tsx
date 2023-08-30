import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const UpdateIcon: React.FC<IconProps> = props => {
  return <Icon alt="Update" content={content} {...props} />
}

export const UpdateIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
