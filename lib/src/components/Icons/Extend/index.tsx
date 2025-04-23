import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ExtendIcon: React.FC<IconProps> = props => {
  return <Icon alt="Extend" content={content} {...props} />
}
