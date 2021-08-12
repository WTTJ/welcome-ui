import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const Heading5Icon: React.FC<IconProps> = props => {
  return <Icon alt="Heading5" content={content} {...props} />
}
