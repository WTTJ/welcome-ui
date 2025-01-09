import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const ArrowLineLeftIcon: React.FC<IconProps> = props => {
  return <Icon alt="ArrowLineLeft" content={content} {...props} />
}
