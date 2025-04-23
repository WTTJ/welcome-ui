import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const EqualIcon: React.FC<IconProps> = props => {
  return <Icon alt="Equal" content={content} {...props} />
}
