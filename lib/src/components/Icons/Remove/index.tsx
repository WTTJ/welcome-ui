import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const RemoveIcon: React.FC<IconProps> = props => {
  return <Icon alt="Remove" content={content} {...props} />
}
