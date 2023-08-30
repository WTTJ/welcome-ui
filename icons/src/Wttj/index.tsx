import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const WttjIcon: React.FC<IconProps> = props => {
  return <Icon alt="Wttj" content={content} {...props} />
}

export const WttjIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
