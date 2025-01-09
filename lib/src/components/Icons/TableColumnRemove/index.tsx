import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const TableColumnRemoveIcon: React.FC<IconProps> = props => {
  return <Icon alt="TableColumnRemove" content={content} {...props} />
}
