import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const CollapseIcon: React.FC<IconProps> = props => {
  return <Icon alt="Collapse" content={content} {...props} />
}
