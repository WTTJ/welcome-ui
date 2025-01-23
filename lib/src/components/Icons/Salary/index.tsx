import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const SalaryIcon: React.FC<IconProps> = props => {
  return <Icon alt="Salary" content={content} {...props} />
}
