import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const MobileIcon: React.FC<IconProps> = props => {
  return <Icon alt="Mobile" content={content} {...props} />
}
