import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const OrderedListIcon: React.FC<IconProps> = props => {
  return <Icon alt="OrderedList" content={content} {...props} />
}

export const OrderedListIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
