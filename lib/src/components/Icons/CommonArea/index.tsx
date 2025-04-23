import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CommonAreaIcon: React.FC<IconProps> = props => {
  return <Icon alt="CommonArea" content={content} {...props} />
}
