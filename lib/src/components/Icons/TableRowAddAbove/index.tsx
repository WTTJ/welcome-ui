import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const TableRowAddAboveIcon: React.FC<IconProps> = props => {
  return <Icon alt="TableRowAddAbove" content={content} {...props} />
}
