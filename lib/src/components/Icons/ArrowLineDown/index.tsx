import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const ArrowLineDownIcon: React.FC<IconProps> = props => {
  return <Icon alt="ArrowLineDown" content={content} {...props} />
}
