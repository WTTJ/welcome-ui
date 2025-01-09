import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const TreeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Tree" content={content} {...props} />
}
