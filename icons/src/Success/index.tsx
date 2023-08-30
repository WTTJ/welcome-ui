import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const SuccessIcon: React.FC<IconProps> = props => {
  return <Icon alt="Success" content={content} {...props} />
}

export const SuccessIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
