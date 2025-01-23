import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const AlertIcon: React.FC<IconProps> = props => {
  return <Icon alt="Alert" content={content} {...props} />
}
