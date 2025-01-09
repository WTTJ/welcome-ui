import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const ArrowLineRightIcon: React.FC<IconProps> = props => {
  return <Icon alt="ArrowLineRight" content={content} {...props} />
}
