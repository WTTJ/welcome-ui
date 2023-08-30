import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TargetIcon: React.FC<IconProps> = props => {
  return <Icon alt="Target" content={content} {...props} />
}

export const TargetIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
