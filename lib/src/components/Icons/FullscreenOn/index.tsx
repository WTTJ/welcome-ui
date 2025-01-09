import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const FullscreenOnIcon: React.FC<IconProps> = props => {
  return <Icon alt="FullscreenOn" content={content} {...props} />
}
