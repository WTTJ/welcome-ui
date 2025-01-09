import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const ArrowUpIcon: React.FC<IconProps> = props => {
  return <Icon alt="ArrowUp" content={content} {...props} />
}
