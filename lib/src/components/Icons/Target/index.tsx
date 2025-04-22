import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const TargetIcon: React.FC<IconProps> = props => {
  return <Icon alt="Target" content={content} {...props} />
}
