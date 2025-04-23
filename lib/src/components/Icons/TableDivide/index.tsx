import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const TableDivideIcon: React.FC<IconProps> = props => {
  return <Icon alt="TableDivide" content={content} {...props} />
}
