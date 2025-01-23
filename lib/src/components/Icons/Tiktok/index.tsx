import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const TiktokIcon: React.FC<IconProps> = props => {
  return <Icon alt="Tiktok" content={content} {...props} />
}
