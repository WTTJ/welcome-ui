import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const EqualIcon: React.FC<IconProps> = props => {
  return <Icon alt="Equal" content={content} {...props} />
}
