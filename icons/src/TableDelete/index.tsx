import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TableDeleteIcon: React.FC<IconProps> = props => {
  return <Icon alt="TableDelete" content={content} {...props} />
}
