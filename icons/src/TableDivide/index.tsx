import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TableDivideIcon: React.FC<IconProps> = props => {
  return <Icon alt="TableDivide" content={content} {...props} />
}

export const TableDivideIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
