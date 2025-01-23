import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const BurnIcon: React.FC<IconProps> = props => {
  return <Icon alt="Burn" content={content} {...props} />
}
