import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TableColumnAddBeforeIcon: React.FC<IconProps> = props => {
  return <Icon alt="TableColumnAddBefore" content={content} {...props} />
}

export const TableColumnAddBeforeIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
