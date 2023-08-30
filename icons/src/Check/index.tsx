import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CheckIcon: React.FC<IconProps> = props => {
  return <Icon alt="Check" content={content} {...props} />
}

export const CheckIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
