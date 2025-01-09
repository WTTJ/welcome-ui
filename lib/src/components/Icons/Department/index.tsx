import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const DepartmentIcon: React.FC<IconProps> = props => {
  return <Icon alt="Department" content={content} {...props} />
}
