import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const BehanceIcon: React.FC<IconProps> = props => {
  return <Icon alt="Behance" content={content} {...props} />
}
