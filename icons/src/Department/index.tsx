import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const DepartmentIcon: React.FC<IconProps> = props => {
  return <Icon alt="Department" content={content} {...props} />
}

export const DepartmentIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
