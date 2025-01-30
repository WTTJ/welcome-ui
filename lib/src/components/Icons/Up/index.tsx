import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const UpIcon: React.FC<IconProps> = props => {
  return <Icon alt="Up" content={content} {...props} />
}
