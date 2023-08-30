import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CelebrateIcon: React.FC<IconProps> = props => {
  return <Icon alt="Celebrate" content={content} {...props} />
}

export const CelebrateIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
