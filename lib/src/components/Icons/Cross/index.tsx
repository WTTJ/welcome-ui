import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CrossIcon: React.FC<IconProps> = props => {
  return <Icon alt="Cross" content={content} {...props} />
}
