import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const PrintIcon: React.FC<IconProps> = props => {
  return <Icon alt="Print" content={content} {...props} />
}
