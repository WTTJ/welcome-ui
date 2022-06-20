import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const FlagPointedIcon: React.FC<IconProps> = props => {
  return <Icon alt="FlagPointed" content={content} {...props} />
}
