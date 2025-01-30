import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const QuoteIcon: React.FC<IconProps> = props => {
  return <Icon alt="Quote" content={content} {...props} />
}
