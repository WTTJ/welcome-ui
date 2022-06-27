import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TableColumnAddAfterIcon: React.FC<IconProps> = props => {
  return <Icon alt="TableColumnAddAfter" content={content} {...props} />
}
