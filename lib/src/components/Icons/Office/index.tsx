import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const OfficeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Office" content={content} {...props} />
}
