import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ControlStopIcon: React.FC<IconProps> = props => {
  return <Icon alt="ControlStop" content={content} {...props} />
}
