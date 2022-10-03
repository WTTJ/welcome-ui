import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TxtIcon: React.FC<IconProps> = props => {
  return <Icon alt="Txt" content={content} {...props} />
}
