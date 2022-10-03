import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const DepartmentIcon: React.FC<IconProps> = props => {
  return <Icon alt="Department" content={content} {...props} />
}
