import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const ControlBackwardIcon: React.FC<IconProps> = props => {
  return <Icon alt="ControlBackward" content={content} {...props} />
}
