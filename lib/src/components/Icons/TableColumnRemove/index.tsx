import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const TableColumnRemoveIcon: React.FC<IconProps> = props => {
  return <Icon alt="TableColumnRemove" content={content} {...props} />
}
