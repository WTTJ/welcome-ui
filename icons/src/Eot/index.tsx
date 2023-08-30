import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const EotIcon: React.FC<IconProps> = props => {
  return <Icon alt="Eot" content={content} {...props} />
}

export const EotIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
