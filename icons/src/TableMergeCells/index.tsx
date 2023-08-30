import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TableMergeCellsIcon: React.FC<IconProps> = props => {
  return <Icon alt="TableMergeCells" content={content} {...props} />
}

export const TableMergeCellsIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
