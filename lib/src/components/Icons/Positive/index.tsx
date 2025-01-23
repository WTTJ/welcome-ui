import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const PositiveIcon: React.FC<IconProps> = props => {
  return <Icon alt="Positive" content={content} {...props} />
}
