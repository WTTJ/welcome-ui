import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CrossTargetIcon: React.FC<IconProps> = props => {
  return <Icon alt="CrossTarget" content={content} {...props} />
}

export const CrossTargetIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
