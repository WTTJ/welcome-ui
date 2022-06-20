import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TableIcon: React.FC<IconProps> = props => {
  return <Icon alt="Table" content={content} {...props} />
}
