import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const KeyIcon: React.FC<IconProps> = props => {
  return <Icon alt="Key" content={content} {...props} />
}
