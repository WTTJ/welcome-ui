import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const UnorderedListIcon: React.FC<IconProps> = props => {
  return <Icon alt="UnorderedList" content={content} {...props} />
}
