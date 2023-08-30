import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const SaveIcon: React.FC<IconProps> = props => {
  return <Icon alt="Save" content={content} {...props} />
}

export const SaveIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
