import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const TableMergeCellsIcon: React.FC<IconProps> = props => {
  return <Icon alt="TableMergeCells" content={content} {...props} />
}
