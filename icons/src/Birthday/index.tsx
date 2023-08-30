import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const BirthdayIcon: React.FC<IconProps> = props => {
  return <Icon alt="Birthday" content={content} {...props} />
}

export const BirthdayIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
