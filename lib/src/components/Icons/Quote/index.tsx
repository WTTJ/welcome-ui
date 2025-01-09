import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const QuoteIcon: React.FC<IconProps> = props => {
  return <Icon alt="Quote" content={content} {...props} />
}
