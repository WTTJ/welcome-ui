import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const TreeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Tree" content={content} {...props} />
}
