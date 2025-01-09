import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const ExpandIcon: React.FC<IconProps> = props => {
  return <Icon alt="Expand" content={content} {...props} />
}
