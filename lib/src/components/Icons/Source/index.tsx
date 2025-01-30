import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const SourceIcon: React.FC<IconProps> = props => {
  return <Icon alt="Source" content={content} {...props} />
}
