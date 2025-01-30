import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const FullscreenOnIcon: React.FC<IconProps> = props => {
  return <Icon alt="FullscreenOn" content={content} {...props} />
}
