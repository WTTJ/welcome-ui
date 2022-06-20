import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TableRowAddAboveIcon: React.FC<IconProps> = props => {
  return <Icon alt="TableRowAddAbove" content={content} {...props} />
}
