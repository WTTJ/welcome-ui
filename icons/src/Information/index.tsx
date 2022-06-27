import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const InformationIcon: React.FC<IconProps> = props => {
  return <Icon alt="Information" content={content} {...props} />
}
