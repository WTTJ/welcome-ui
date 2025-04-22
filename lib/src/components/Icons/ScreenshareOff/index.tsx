import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ScreenshareOffIcon: React.FC<IconProps> = props => {
  return <Icon alt="ScreenshareOff" content={content} {...props} />
}
