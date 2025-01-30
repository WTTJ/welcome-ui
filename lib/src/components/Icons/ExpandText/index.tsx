import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ExpandTextIcon: React.FC<IconProps> = props => {
  return <Icon alt="ExpandText" content={content} {...props} />
}
