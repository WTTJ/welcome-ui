import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ComputerIcon: React.FC<IconProps> = props => {
  return <Icon alt="Computer" content={content} {...props} />
}
