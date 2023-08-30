import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const FemaleIcon: React.FC<IconProps> = props => {
  return <Icon alt="Female" content={content} {...props} />
}

export const FemaleIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
