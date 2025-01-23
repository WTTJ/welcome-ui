import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const WoffIcon: React.FC<IconProps> = props => {
  return <Icon alt="Woff" content={content} {...props} />
}
