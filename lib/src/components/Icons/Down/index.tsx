import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const DownIcon: React.FC<IconProps> = props => {
  return <Icon alt="Down" content={content} {...props} />
}
