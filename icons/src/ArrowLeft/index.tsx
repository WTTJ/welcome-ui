import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ArrowLeftIcon: React.FC<IconProps> = props => {
  return <Icon alt="ArrowLeft" content={content} {...props} />
}

export const ArrowLeftIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
