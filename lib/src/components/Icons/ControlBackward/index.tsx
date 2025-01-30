import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ControlBackwardIcon: React.FC<IconProps> = props => {
  return <Icon alt="ControlBackward" content={content} {...props} />
}
