import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TableRowRemoveIcon: React.FC<IconProps> = props => {
  return <Icon alt="TableRowRemove" content={content} {...props} />
}
