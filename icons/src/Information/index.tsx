import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const InformationIcon: React.FC<IconProps> = props => {
  return <Icon alt="Information" content={content} {...props} />
}

export const InformationIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
