import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const TableRowRemoveIcon: React.FC<IconProps> = props => {
  return <Icon alt="TableRowRemove" content={content} {...props} />
}
