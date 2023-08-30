import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TableColumnRemoveIcon: React.FC<IconProps> = props => {
  return <Icon alt="TableColumnRemove" content={content} {...props} />
}

export const TableColumnRemoveIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
