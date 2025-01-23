import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CollapseIcon: React.FC<IconProps> = props => {
  return <Icon alt="Collapse" content={content} {...props} />
}
