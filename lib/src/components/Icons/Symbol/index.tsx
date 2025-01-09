import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const SymbolIcon: React.FC<IconProps> = props => {
  return <Icon alt="Symbol" content={content} {...props} />
}
