import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const TagIcon: React.FC<IconProps> = props => {
  return <Icon alt="Tag" content={content} {...props} />
}
