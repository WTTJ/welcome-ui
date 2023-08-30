import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TableRowAddAboveIcon: React.FC<IconProps> = props => {
  return <Icon alt="TableRowAddAbove" content={content} {...props} />
}

export const TableRowAddAboveIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
