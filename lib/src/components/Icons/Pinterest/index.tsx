import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const PinterestIcon: React.FC<IconProps> = props => {
  return <Icon alt="Pinterest" content={content} {...props} />
}
