import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const SymbolIcon: React.FC<IconProps> = props => {
  return <Icon alt="Symbol" content={content} {...props} />
}
