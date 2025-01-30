import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const FlagUsIcon: React.FC<IconProps> = props => {
  return <Icon alt="FlagUs" content={content} {...props} />
}
