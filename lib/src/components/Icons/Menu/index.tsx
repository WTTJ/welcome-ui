import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const MenuIcon: React.FC<IconProps> = props => {
  return <Icon alt="Menu" content={content} {...props} />
}
