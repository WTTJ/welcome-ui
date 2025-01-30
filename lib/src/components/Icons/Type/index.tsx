import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const TypeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Type" content={content} {...props} />
}
