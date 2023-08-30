import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TableRowAddBelowIcon: React.FC<IconProps> = props => {
  return <Icon alt="TableRowAddBelow" content={content} {...props} />
}

export const TableRowAddBelowIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
