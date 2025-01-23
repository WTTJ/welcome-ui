import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ConnectionIcon: React.FC<IconProps> = props => {
  return <Icon alt="Connection" content={content} {...props} />
}
