import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const TiktokIcon: React.FC<IconProps> = props => {
  return <Icon alt="Tiktok" content={content} {...props} />
}
