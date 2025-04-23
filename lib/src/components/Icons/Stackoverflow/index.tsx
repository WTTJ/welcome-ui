import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const StackoverflowIcon: React.FC<IconProps> = props => {
  return <Icon alt="Stackoverflow" content={content} {...props} />
}
