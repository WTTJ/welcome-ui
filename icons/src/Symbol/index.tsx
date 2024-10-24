import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const SymbolIcon: React.FC<IconProps> = props => {
  return <Icon alt="Symbol" content={content} {...props} />
}
