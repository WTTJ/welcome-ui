import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const FullscreenOffIcon: React.FC<IconProps> = props => {
  return <Icon alt="FullscreenOff" content={content} {...props} />
}
