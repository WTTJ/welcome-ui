import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ResetIcon: React.FC<IconProps> = props => {
  return <Icon alt="Reset" content={content} {...props} />
}
