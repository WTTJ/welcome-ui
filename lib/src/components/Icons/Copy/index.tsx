import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CopyIcon: React.FC<IconProps> = props => {
  return <Icon alt="Copy" content={content} {...props} />
}
