import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CrossTargetIcon: React.FC<IconProps> = props => {
  return <Icon alt="CrossTarget" content={content} {...props} />
}
