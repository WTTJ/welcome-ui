import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TableColumnAddAfterIcon: React.FC<IconProps> = props => {
  return <Icon alt="TableColumnAddAfter" content={content} {...props} />
}

export const TableColumnAddAfterIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
