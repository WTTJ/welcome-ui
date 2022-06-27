import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const HeadingIcon: React.FC<IconProps> = props => {
  return <Icon alt="Heading" content={content} {...props} />
}
