import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const LockIcon: React.FC<IconProps> = props => {
  return <Icon alt="Lock" content={content} {...props} />
}
