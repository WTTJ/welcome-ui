import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const ScreenshareOffIcon: React.FC<IconProps> = props => {
  return <Icon alt="ScreenshareOff" content={content} {...props} />
}
