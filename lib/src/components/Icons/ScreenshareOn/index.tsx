import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const ScreenshareOnIcon: React.FC<IconProps> = props => {
  return <Icon alt="ScreenshareOn" content={content} {...props} />
}
