import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ControlForwardIcon: React.FC<IconProps> = props => {
  return <Icon alt="ControlForward" content={content} {...props} />
}
