import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const ArrowDownIcon: React.FC<IconProps> = props => {
  return <Icon alt="ArrowDown" content={content} {...props} />
}
