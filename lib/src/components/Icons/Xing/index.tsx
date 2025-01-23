import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const XingIcon: React.FC<IconProps> = props => {
  return <Icon alt="Xing" content={content} {...props} />
}
