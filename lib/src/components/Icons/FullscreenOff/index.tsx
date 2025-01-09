import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const FullscreenOffIcon: React.FC<IconProps> = props => {
  return <Icon alt="FullscreenOff" content={content} {...props} />
}
