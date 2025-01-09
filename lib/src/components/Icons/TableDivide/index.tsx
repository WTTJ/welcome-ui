import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const TableDivideIcon: React.FC<IconProps> = props => {
  return <Icon alt="TableDivide" content={content} {...props} />
}
