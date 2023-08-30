import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const Share1Icon: React.FC<IconProps> = props => {
  return <Icon alt="Share1" content={content} {...props} />
}

export const Share1IconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
