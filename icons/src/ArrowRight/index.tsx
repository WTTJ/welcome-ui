import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ArrowRightIcon: React.FC<IconProps> = props => {
  return <Icon alt="ArrowRight" content={content} {...props} />
}

export const ArrowRightIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
